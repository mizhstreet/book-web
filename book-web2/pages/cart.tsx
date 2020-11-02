import React from "react";
import Page from "../components/page";
import { Container } from "@material-ui/core";

import { PageBannerTitle } from "../components/page-banner-title";
import { Summary } from "../components/cart/summary";
import { CartItems } from "../components/cart/cart-items";

const Cart: React.FC = () => {
  return (
    <Page title="Lucy Crehan">
      <PageBannerTitle title="Cart" />
      <Container>
        <CartItems />
        <Summary />
      </Container>
    </Page>
  );
};

export default Cart;
