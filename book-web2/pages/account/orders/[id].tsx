import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Page } from "../../../components/page";
import { PageBannerTitle } from "../../../components/page-banner-title";
import { SideMenu } from "../../../components/account/side-menu";
import { OrderInfo } from "../../../components/account/orders/order-info";
import { OrderAddress } from "../../../components/account/orders/order-address";
import { OrderItems } from "../../../components/account/orders/order-items";
import { OrderTracking } from "../../../components/account/orders/order-tracking";

const Orders: React.FC = () => {
  return (
    <Page title="my account">
      <PageBannerTitle title="Order Details" />
      <Container>
        <Grid container>
          <Grid item md={9} xs={12}>
            <OrderInfo />
            <OrderAddress />
            <OrderItems />
            <OrderTracking />
          </Grid>
          <SideMenu />
        </Grid>
      </Container>
    </Page>
  );
};

export default Orders;
