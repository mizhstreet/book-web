import React from "react";
import { Formik, Field, Form } from "formik";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Typography,
  Checkbox,
  Box,
} from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import { purple } from "../../constants/color";

interface IFormValues {
  name: string;
  email: string;
  rating: number;
  review: string;
  prefecture: string;
}

const useStyles = makeStyles({
  accordion: {
    "&:before": {
      border: "none",
    },
  },
  formHeadline: {
    paddingBottom: 20,
    paddingLeft: 30,
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 18,
    color: purple,
  },
  inputField: {
    padding: 5,
    paddingLeft: 0,
    paddingTop: 0,
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 5,
  },
  fieldContainer: {
    marginBottom: 25,
  },
  formContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  btnContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  underline: {
    "&:before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
  },
  select: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const BillingForm: React.FC = () => {
  const initialValues: IFormValues = {
    name: "",
    email: "",
    rating: 0,
    review: "",
    prefecture: "",
  };
  const classes = useStyles();
  return (
    <Paper elevation={6}>
      <Typography className={classes.formHeadline} component={"h3"}>
        Billing details
      </Typography>
      <Accordion className={classes.accordion}>
        <AccordionSummary>
          <Box alignItems="center" display="flex">
            <Checkbox checked color="primary" />
            <Typography>Same as shipping address</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("something");
              setSubmitting(true);
            }}
          >
            {({
              values,
              // errors,
              // touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              submitForm,
              /* and other goodies */
            }) => (
              <Form className={classes.formContainer}>
                <Grid container direction="column">
                  <FormControl className={classes.fieldContainer}>
                    <label className={classes.fieldLabel}>Name</label>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      inputProps={{ className: classes.inputField }}
                      InputProps={{ classes: { underline: classes.underline } }}
                      name="name"
                    />
                  </FormControl>
                  <FormControl className={classes.fieldContainer}>
                    <label className={classes.fieldLabel}>Company Name (optional)</label>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      inputProps={{ className: classes.inputField }}
                      InputProps={{ classes: { underline: classes.underline } }}
                      name="name"
                    />
                  </FormControl>
                  <FormControl className={classes.fieldContainer}>
                    <label className={classes.fieldLabel}>Prefectural</label>
                    <Field
                      classes={{ root: classes.select }}
                      component={Select}
                      variant="outlined"
                      name="prefecture"
                      value="Hokkaido"
                    >
                      <MenuItem value={"Hokkaido"}>Hokkaido</MenuItem>
                      <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
                      <MenuItem value={"Osaka"}>Osaka</MenuItem>
                    </Field>
                  </FormControl>
                  <FormControl className={classes.fieldContainer}>
                    <label className={classes.fieldLabel}>Street address</label>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      inputProps={{ className: classes.inputField }}
                      InputProps={{ classes: { underline: classes.underline } }}
                      name="name"
                    />
                  </FormControl>
                  <FormControl className={classes.fieldContainer}>
                    <label className={classes.fieldLabel}>Postcode</label>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      inputProps={{ className: classes.inputField }}
                      InputProps={{ classes: { underline: classes.underline } }}
                      name="name"
                    />
                  </FormControl>
                  <FormControl className={classes.fieldContainer}>
                    <label className={classes.fieldLabel}>Town / City</label>
                    <Field
                      component={TextField}
                      fullWidth={true}
                      inputProps={{ className: classes.inputField }}
                      InputProps={{ classes: { underline: classes.underline } }}
                      name="name"
                    />
                  </FormControl>
                </Grid>
              </Form>
            )}
          </Formik>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export { BillingForm };
