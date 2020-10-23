import React from "react";
import { makeStyles } from "@material-ui/core";
import { purple } from "../constants/color";
interface IProps {
  title: string;
}

const useStyles = makeStyles({
  background: {
    minHeight: 250,
    width: "100%",
    backgroundColor: purple,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
  },
});

const PageBannerTitle: React.FC<IProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};

export { PageBannerTitle };
