import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { grey } from "../../constants/color";

const useStyles = makeStyles({
  icon: {
    fontSize: 80,
    color: "#59349e",
    marginBottom: 18,
    marginTop: 4,
  },
  infoHeadline: {
    color: "#59349e",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoDescription: {
    color: grey,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
  },
});

const ShopInfo: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box mt={10}></Box>
      <Grid spacing={4} container>
        <Grid item sm={4} xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <MenuBookIcon className={classes.icon} />
            <Typography className={classes.infoHeadline} component="h3">
              Huge Range of books
            </Typography>
            <Typography className={classes.infoDescription} component="h4">
              We store a huge ranges of book
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <QueryBuilderIcon className={classes.icon} />
            <Typography className={classes.infoHeadline} component="h3">
              Open Hours
            </Typography>
            <Typography className={classes.infoDescription} component="h4">
              Monday-Saturday: 9:00am-5:00pm
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <LocalShippingIcon className={classes.icon} />
            <Typography className={classes.infoHeadline} component="h3">
              Free shipping
            </Typography>
            <Typography className={classes.infoDescription} component="h4">
              All orders in Japan
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { ShopInfo };
