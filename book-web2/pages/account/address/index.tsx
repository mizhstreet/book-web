import React from "react";
import { Box, Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";

import { Page } from "../../../components/page";
import { PageBannerTitle } from "../../../components/page-banner-title";
import { SideMenu } from "../../../components/account/side-menu";
import { grey } from "@material-ui/core/colors";
import Link from "next/link";

interface IFormValues {
  old: string;
  new: string;
  reNew: string;
}

const useStyles = makeStyles({
  container: {
    marginTop: 35,
  },
  btn: {
    marginLeft: 5,
    marginRight: 5,
  },
  itemContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: grey[200],
    padding: 10,
    paddingLeft: 20,
    flexWrap: "wrap",
  },
});

const index: React.FC = () => {
  const initialValues: IFormValues = {
    old: "",
    new: "",
    reNew: "",
  };
  const classes = useStyles();
  return (
    <Page title="my account">
      <PageBannerTitle title="Address book" />
      <Container>
        <Grid container>
          <Grid item md={9} xs={12}>
            <Grid className={classes.container} container component="ul">
              <Grid className={classes.itemContainer} item container component="li">
                <Box flex="1">
                  <Typography>asdasd sdadasd</Typography>
                  <Typography>Higashi-ku kita 18 jo-higashi</Typography>
                  <Typography>7 chome 2-24</Typography>
                  <Typography>Sapporo-shi 0650018</Typography>
                  <Typography>Gumma</Typography>
                  <Typography>Japan</Typography>
                </Box>
                <Button className={classes.btn} color="primary" variant="contained">
                  Edit
                </Button>
                <Button className={classes.btn} color="secondary" variant="contained">
                  Delete
                </Button>
              </Grid>
              <Grid className={classes.itemContainer} item container component="li">
                <Box flex="1">
                  <Typography>asdasd sdadasd</Typography>
                  <Typography>Higashi-ku kita 18 jo-higashi</Typography>
                  <Typography>7 chome 2-24</Typography>
                  <Typography>Sapporo-shi 0650018</Typography>
                  <Typography>Gumma</Typography>
                  <Typography>Japan</Typography>
                </Box>
                <Link passHref href="/account/address/edit">
                  <a>
                    <Button className={classes.btn} color="primary" variant="contained">
                      Edit
                    </Button>
                  </a>
                </Link>
                <Button className={classes.btn} color="secondary" variant="contained">
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <SideMenu />
        </Grid>
      </Container>
    </Page>
  );
};

export default index;
