import { makeStyles } from "@material-ui/core";
import React from "react";
import { purple } from "../../constants/color";

const useStyles = makeStyles({
  writeReviewBtn: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    color: "white",
    border: "none",
    backgroundColor: purple,
    borderRadius: 7,
    fontSize: 15,
    fontWeight: "bold",
  },
});

const FormButton: React.FC = ({ children }) => {
  const classes = useStyles();
  return <button className={classes.writeReviewBtn}>{children}</button>;
};

export { FormButton };
