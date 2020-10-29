import React from "react";
import Page from "../components/page";
import { Accordion, AccordionSummary, Box, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { PageBannerTitle } from "../components/page-banner-title";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import VoucherIcon from "@material-ui/icons/CallToAction";
import { purple } from "../constants/color";
import { VoucherForm } from "../components/checkout/voucher-form";
import { BillingForm } from "../components/checkout/billing-form";
import { ShippingForm } from "../components/checkout/shipping-form";
import { PaymentMethod } from "../components/checkout/payment-method";

const useStyles = makeStyles({
  couponContainer: {
    marginTop: 100,
    marginBottom: 100,
  },
  couponExpand: {
    backgroundColor: "#f7f6f7",
    color: "#515151",
    boxShadow: "none",
    borderTop: "4px solid",
    borderTopColor: purple,
    borderRadius: 0,
    marginBottom: 60,
    flex: 1,
    alignItems: "center",
    "&:first-child": {
      borderRadius: 0,
    },
  },
  voucherIcon: {
    color: purple,
    marginRight: 5,
  },
});

const Checkout: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="Lucy Crehan">
      <PageBannerTitle title="Checkout" />
      <Container>
        <Box mt={"60px"} mb={"60px"}>
          <Accordion className={classes.couponExpand}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <VoucherIcon className={classes.voucherIcon} />
              <Typography>
                Have a coupon? <span>Click here to enter your code</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <VoucherForm />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <ShippingForm />
          </Grid>
          <Grid item md={6} xs={12}>
            <BillingForm />
          </Grid>
        </Grid>
        <PaymentMethod />
      </Container>
    </Page>
  );
};

export default Checkout;
