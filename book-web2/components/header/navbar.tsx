import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { purple } from "../../constants/color";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles({
  menuWrap: {
    display: "flex",
    flexDirection: "row",
  },
  menuItem: {
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      paddingRight: 0,
    },
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    color: purple,
    paddingLeft: 40,
    paddingRight: 40,
  },
  link: {
    "&:hover": {
      color: purple,
      textDecoration: "none",
    },
    color: purple,
    fontSize: 18,
    textDecoration: "none",
    transition: "all .5s",
  },
});
const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <nav>
        <ul className={classes.menuWrap}>
          <li className={classes.menuItem}>
            <Link href={"/"}>
              <a className={classes.link}>Home</a>
            </Link>
          </li>
          <li className={classes.menuItem}>
            <Link href={"/#"}>
              <a className={classes.link}>Mega Menu</a>
            </Link>
            <KeyboardArrowDownIcon fontSize="small" />
          </li>
          <li className={classes.menuItem}>
            <Link href={"/#"}>
              <a className={classes.link}>News</a>
            </Link>
            <KeyboardArrowDownIcon fontSize="small" />
          </li>
          <li className={classes.menuItem}>
            <Link href={"/contact"}>
              <a className={classes.link}>Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Hidden>
  );
};
export default Navbar;
