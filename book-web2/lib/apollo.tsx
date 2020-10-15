import React from "react";
import Head from "next/head";
import { AppContextType, NextComponentType, AppInitialProps } from "next/dist/next-server/lib/utils";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { IncomingMessage } from "http";
import cookie from "cookie";
import fetch from "isomorphic-unfetch";

const getToken = (req?: IncomingMessage, options = {}) => {
  const cookies = cookie.parse(req?.headers?.cookie ?? document.cookie, options);

  return cookies.token;
};

type InitApolloClientOptions = [unknown, { getToken: typeof getToken }];

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (initialState = {}, { getToken }: any) => {
  const fetchOptions = {
    agent: null,
  };

  const httpLink = new HttpLink({
    // uri: process.env.GRAPHQL_URL,
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
const initApolloClient = (...args: InitApolloClientOptions) => {
  if (typeof window === "undefined") {
    // @ts-ignore
    return createApolloClient(...args);
  }

  if (!apolloClient) {
    // @ts-ignore
    apolloClient = createApolloClient(...args);
  }

  return apolloClient;
};

export const withApollo: any = (App: NextComponentType<AppContextType, AppInitialProps, any>, { ssr = true } = {}) => {
  const WithApollo = ({ apolloClient, apolloState, ...appProps }: any) => {
    const client = apolloClient || initApolloClient(apolloState, { getToken });

    return (
      <ApolloProvider client={client}>
        <App {...appProps} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== "production") {
    // Set correct display name for devtools
    WithApollo.displayName = `withApollo(${App.displayName})`;
  }

  WithApollo.getInitialProps = async (ctx: AppContextType) => {
    const {
      Component,
      router,
      ctx: { req, res },
    } = ctx;

    // @ts-ignore
    const apolloClient = (ctx.ctx.apolloClient = initApolloClient(
      {},
      {
        getToken: () => getToken(req),
      },
    ));

    const appProps = App.getInitialProps ? await App.getInitialProps(ctx) : {};

    if (res && res.finished) {
      return {};
    }

    if (ssr) {
      try {
        const { getDataFromTree } = await import("@apollo/react-ssr");

        // Run all GraphQL queries
        await getDataFromTree(
          // @ts-ignore
          <ApolloProvider client={apolloClient}>
            <App {...appProps} Component={Component} router={router} />
          </ApolloProvider>,
        );
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        console.error("Error while running `getDataFromTree`", error);
      }

      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind();
    }

    // Extract query data from the Apollo's store
    const apolloState = apolloClient.cache.extract();

    return {
      ...appProps,
      apolloState,
    };
  };

  return WithApollo;
};
