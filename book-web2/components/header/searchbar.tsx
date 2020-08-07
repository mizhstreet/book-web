import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { purple } from "../../constants/color";

const useStyles = makeStyles({
  button: {
    backgroundColor: purple,
    textTransform: "none",
    marginLeft: 20,
    marginTop: 5
  },
  textFieldWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5
  },
  textField: {
    "& input": {
      padding: 10
    }
  }
});
const SearchBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container={true} justify={"flex-end"} alignItems={"center"} item={true} md={8} lg={9} xs={12}>
      <div className={classes.textFieldWrap}>
        <TextField
          className={classes.textField}
          placeholder={"Search"}
          variant={"outlined"}
          fullWidth={true}
          margin={"normal"}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          classes={{
            containedPrimary: classes.button
          }}
        >
          Go
        </Button>
      </div>
    </Grid>
  );
};

export default SearchBar;
