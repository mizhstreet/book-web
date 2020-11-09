import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { Page } from "../../components/page";
import { PageBannerTitle } from "../../components/page-banner-title";

const index: React.FC = () => {
  return (
    <Page title="my account">
      <PageBannerTitle title="Account" />
      <Container>
        <Grid container>
          <Grid item md={9} xs={12}></Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default index;
