import React, { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

interface IProps {
  title: string;
}

const Page: FC<IProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
