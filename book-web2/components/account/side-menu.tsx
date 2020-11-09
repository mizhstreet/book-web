import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Link from "next/link";
import React from "react";
import { purple } from "../../constants/color";

const useStyles = makeStyles({
  link: {
    color: grey[700],
    fontWeight: "bold",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    transition: ".1s all",
    "&:hover": {
      color: purple,
    },
  },
  itemContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: grey[100],
  },
  arrow: {
    color: grey[500],
    marginRight: 5,
  },
});
const SideMenu: React.FC = () => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Grid item md={3}>
        <Box component="ul" pt={5} pl={5}>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>My Account
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Address book
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Wish list
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Order history
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Downloads
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Recurring Payments
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Reward Points
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Returns
              </a>
            </Link>
          </li>
          <li className={classes.itemContainer}>
            <Link href="#">
              <a className={classes.link}>
                <span className={classes.arrow}>&gt;</span>Transaction
              </a>
            </Link>
          </li>
        </Box>
      </Grid>
    </Hidden>
  );
};

export { SideMenu };
