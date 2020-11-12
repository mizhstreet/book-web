import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Page } from "../../../components/page";
import { PageBannerTitle } from "../../../components/page-banner-title";
import { SideMenu } from "../../../components/account/side-menu";
import { OrderHistory } from "../../../components/account/orders/order-history";

const Orders: React.FC = () => {
  return (
    <Page title="my account">
      <PageBannerTitle title="My orders" />
      <Container>
        <Grid container>
          <Grid item md={9} xs={12}>
            <OrderHistory />
          </Grid>
          <SideMenu />
        </Grid>
      </Container>
    </Page>
  );
};

export default Orders;
