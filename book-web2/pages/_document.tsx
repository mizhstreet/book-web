import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import CleanCSS from "clean-css";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/reset.css" />
          <link rel="stylesheet" href="/css/slick/slick.css" />
          <link rel="stylesheet" href="/css/slick/slick-theme.css" />
          <link rel="stylesheet" href="/css/index.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    styles: (
      <>
        {initialProps.styles}
        <style
          id="jss-server-side"
          key="jss-server-side"
          dangerouslySetInnerHTML={{ __html: new CleanCSS({}).minify(sheets.toString()).styles }}
        />
      </>
    ),
  };
};
