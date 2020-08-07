import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import icon1 from "../../public/img/icon-1.png";
import icon2 from "../../public/img/icon-2.png";
import { grey, purple } from "../../constants/color";

const useStyles = makeStyles(theme => ({
  itemWrapper: {
    "& > img": {
      marginRight: 10
    }
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 20
    }
  },
  content: {
    "& > h5": {
      fontSize: 16,
      fontFamily: "averta-semibold",
      marginBottom: 1,
      color: purple
    },
    "& > span": {
      fontFamily: "averta-semibold",
      fontSize: 12,
      color: grey
    },
    display: "inline-block"
  },
  line: {
    display: "block",
    borderColor: grey,
    borderLeft: "1px solid",
    width: 1,
    marginLeft: 20,
    marginRight: 20
  }
}));

const HeaderCart: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container item justify={"flex-end"} xs={12} sm={12} md={6}>
      <div className={classes.itemWrapper}>
        <img alt={"some"} src={icon1} />
        <div className={classes.content}>
          <h5>Bookshelf</h5>
          <span>Books</span>
        </div>
      </div>
      <div className={classes.line} />
      <div className={classes.itemWrapper}>
        <img alt={"some"} src={icon2} />
        <div className={classes.content}>
          <h5>Cart</h5>
          <span>0</span>
        </div>
      </div>
    </Grid>
  );
};

export default HeaderCart;
