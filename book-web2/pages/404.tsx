import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Page } from "../components/page";
import { PageBannerTitle } from "../components/page-banner-title";
import { purple } from "../constants/color";

const useStyles = makeStyles({
  message: {
    fontSize: 40,
    fontWeight: "bold",
    color: purple,
  },
});

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="404">
      <PageBannerTitle title="404" />
      <Container>
        <Box mt={10} mb={8}>
          <Typography className={classes.message} align="center" component="h2">
            Oops! This page can’t be found
          </Typography>
          <Typography align="center">It looks like nothing was found in here. Maybe try a diffirent page?</Typography>
        </Box>
      </Container>
    </Page>
  );
};

export default Login;
