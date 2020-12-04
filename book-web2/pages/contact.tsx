import { Divider } from "@material-ui/core";
import { GetStaticProps } from "next";
import React from "react";
import { ContactInfo } from "../components/contact/contact-info";
import { ShopInfo } from "../components/contact/shop-info";
import { Page } from "../components/page";

import { PageBannerTitle } from "../components/page-banner-title";
import { useCountriesQuery } from "../generated/apolloComponent";
import { countriesQuery } from "../graphql/countries/queries/countries";
import { initializeApollo } from "../lib/apolloClient";

const Contact: React.FC = () => {
  const { loading, data, error } = useCountriesQuery();
  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>`Error! ${error.message}`</p>;
  return (
    <Page title="Lucy Crehan">
      <PageBannerTitle title="Contact us" />
      <ShopInfo />
      <Divider />
      <ContactInfo />
      {data &&
        data.countries.map((c) => (
          <div key={c.code}>
            <p>{c.code}</p>
            <p>{c.name}</p>
          </div>
        ))}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: countriesQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 5,
  };
};

export default Contact;
