import React, { FC } from "react";
import Link from "next/link";
import { makeStyles, Grid } from "@material-ui/core";
import { purple, grey } from "../../constants/color";
const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      color: purple,
    },
    color: grey,
    fontSize: 14,
    marginRight: 12,
    fontFamily: "averta",
    transition: "all .5s",
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginBottom: 15,
    },
  },
}));

const HeaderLinks: FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} item={true} xs={12} sm={12} md={6}>
      <Link href={"/login"}>
        <a className={classes.link}>Login / Register</a>
      </Link>
      <Link href={"/#"}>
        <a className={classes.link}>FAQ</a>
      </Link>
      <Link href={"/contact"}>
        <a className={classes.link}>Contact us</a>
      </Link>
    </Grid>
  );
};

export default HeaderLinks;
