import { makeStyles } from "@material-ui/core";
import React from "react";
import { purple } from "../../constants/color";

const useStyles = makeStyles({
  formBtn: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    color: "white",
    border: "2px solid",
    borderColor: purple,
    backgroundColor: purple,
    borderRadius: 7,
    fontSize: 15,
    fontWeight: "bold",
    transition: ".3s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: purple,
    },
  },
});

const FormButton: React.FC<any> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <button {...props} className={classes.formBtn}>
      {children}
    </button>
  );
};

export { FormButton };
