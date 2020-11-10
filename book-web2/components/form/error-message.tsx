import { makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  err: {
    color: red[600],
  },
});

const ErrorMessage: React.FC = (props) => {
  const classes = useStyles();
  return <Typography className={classes.err}>{props.children}</Typography>;
};

export { ErrorMessage };
