import { Box, FormControl, makeStyles, Paper, Radio, Typography } from "@material-ui/core";
import React from "react";
import { purple } from "../../constants/color";

type payment = "cod" | "direct" | "paypal";

const useStyles = makeStyles({
  container: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  title: {
    paddingBottom: 20,
    paddingTop: 50,
    fontWeight: "bold",
    fontSize: 18,
    color: purple,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
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
    textAlign: "center",
    fontWeight: "bold",
    transition: ".3s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: purple,
    },
  },
});

const PaymentMethod: React.FC = () => {
  const [value, setValue] = React.useState<payment>("direct");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as payment);
  };
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} component="h3">
        Payment method
      </Typography>
      <Paper elevation={8} className={classes.container}>
        <FormControl component="fieldset">
          <Box pt={2} pb={2} display="flex" alignItems="center">
            <Radio
              checked={value === "direct"}
              onChange={handleChange}
              value="direct"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
            <label htmlFor="direct" className={classes.label}>
              Direct bank transfer
            </label>
          </Box>
          <Box pt={2} pb={2} display="flex" alignItems="center">
            <Radio
              checked={value === "cod"}
              onChange={handleChange}
              value="cod"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
            <label htmlFor="cod" className={classes.label}>
              Cash on delivery
            </label>
          </Box>
          <Box pt={2} pb={2} display="flex" alignItems="center">
            <Radio
              checked={value === "paypal"}
              onChange={handleChange}
              value="paypal"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
            <label htmlFor="paypal" className={classes.label}>
              Paypal
            </label>
          </Box>
        </FormControl>
        <div className={classes.button}>Place order</div>
      </Paper>
    </>
  );
};

export { PaymentMethod };
