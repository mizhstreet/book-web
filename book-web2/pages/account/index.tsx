import React from "react";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import CloudDownloadTwoToneIcon from "@material-ui/icons/CloudDownloadTwoTone";
import SettingsBackupRestoreTwoToneIcon from "@material-ui/icons/SettingsBackupRestoreTwoTone";
import RestoreTwoToneIcon from "@material-ui/icons/RestoreTwoTone";
import SwapHorizTwoToneIcon from "@material-ui/icons/SwapHorizTwoTone";
import MailTwoToneIcon from "@material-ui/icons/MailTwoTone";
import { MenuItem } from "../../components/account/menu-item";

import { Page } from "../../components/page";
import { PageBannerTitle } from "../../components/page-banner-title";
import { purple } from "../../constants/color";
import { SideMenu } from "../../components/account/side-menu";

const useStyles = makeStyles({
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 40,
    paddingBottom: 15,
    color: purple,
  },
});

const index: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="my account">
      <PageBannerTitle title="Account" />
      <Container>
        <Grid container>
          <Grid item md={9} xs={12}>
            <Box>
              <Typography className={classes.sectionTitle} component="h2">
                My info
              </Typography>
              <Grid container component="ul" spacing={2}>
                <MenuItem href="#" Icon={EditTwoToneIcon} description="Edit your personal info" />
                <MenuItem href="/account/change-password" Icon={LockTwoToneIcon} description="Change your password" />
                <MenuItem href="#" Icon={HomeTwoToneIcon} description="Manage address book" />
                <MenuItem href="#" Icon={FavoriteTwoToneIcon} description="Your wishlist" />
              </Grid>
            </Box>
            <Box>
              <Typography className={classes.sectionTitle} component="h2">
                My orders
              </Typography>
              <Grid container component="ul" spacing={2}>
                <MenuItem href="#" Icon={ListAltTwoToneIcon} description="Your order history" />
                <MenuItem href="#" Icon={CloudDownloadTwoToneIcon} description="Download" />
                <MenuItem href="#" Icon={SettingsBackupRestoreTwoToneIcon} description="View return request" />
                <MenuItem href="#" Icon={RestoreTwoToneIcon} description="Your recurring payment" />
                <MenuItem href="#" Icon={SwapHorizTwoToneIcon} description="Your transaction" />
              </Grid>
            </Box>
            <Box>
              <Typography className={classes.sectionTitle} component="h2">
                Newsletter
              </Typography>
              <Grid container component="ul" spacing={2}>
                <MenuItem href="#" Icon={MailTwoToneIcon} description="Subscribe to newsletter" />
              </Grid>
            </Box>
          </Grid>
          <SideMenu />
        </Grid>
      </Container>
    </Page>
  );
};

export default index;
