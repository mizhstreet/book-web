import { Divider } from "@material-ui/core";
import React from "react";
import { ContactInfo } from "../components/contact/contact-info";
import { ShopInfo } from "../components/contact/shop-info";
import Page from "../components/page";

import { PageBannerTitle } from "../components/page-banner-title";

const Contact: React.FC = () => {
  return (
    <Page title="Lucy Crehan">
      <PageBannerTitle title="Contact us" />
      <ShopInfo />
      <Divider />
      <ContactInfo />
    </Page>
  );
};

export default Contact;
