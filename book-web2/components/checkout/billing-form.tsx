import React from "react";
import { Formik, Field, FieldProps, Form } from "formik";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Divider, Grid, makeStyles, Paper } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { purple } from "../../constants/color";
// import { FormButton } from "./form-button";

interface IFormValues {
  name: string;
  email: string;
  rating: number;
  review: string;
}

const useStyles = makeStyles({
  container: {},
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
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
    padding: 10,
  },
  textAreaField: {
    padding: 0,
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  fieldContainer: {
    flexDirection: "column",
    display: "flex",
    marginTop: 13,
  },
  formContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  star: {
    color: "#fdd835",
  },
  unratedStar: {
    color: purple,
  },
  btnContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  underLine: {
    color: "red",
    "&::after": {
      border: "2px solid red",
    },
  },
});

const BillingForm: React.FC = () => {
  const initialValues: IFormValues = {
    name: "",
    email: "",
    rating: 0,
    review: "",
  };
  const classes = useStyles();
  return (
    <Paper elevation={6}>
      <div className={classes.container}>
        <h3 className={classes.formHeadline}>Billing details</h3>
        <Divider />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("something");
            setSubmitting(true);
            // await new Promise(() =>
            //   setTimeout(() => {
            //     alert("dit con memay");
            //   }, 400),
            // );
            // setSubmitting(false);
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
                <label className={classes.fieldLabel}>Name</label>
                <Field
                  component={TextField}
                  fullWidth={true}
                  inputProps={{ className: classes.inputField }}
                  InputProps={{ classes: { underline: classes.underLine } }}
                  name="name"
                />
                <Grid className={classes.fieldContainer} item md={6} sm={12}>
                  <label className={classes.fieldLabel}>Email</label>
                  <Field
                    component={TextField}
                    fullWidth
                    inputProps={{ className: classes.inputField }}
                    name="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid className={classes.fieldContainer} item>
                  <label className={classes.fieldLabel}>Your rating</label>
                  <div>
                    <StarBorderIcon className={classes.unratedStar} />
                    <StarBorderIcon className={classes.unratedStar} />
                    <StarBorderIcon className={classes.unratedStar} />
                    <StarBorderIcon className={classes.unratedStar} />
                    <StarBorderIcon className={classes.unratedStar} />
                  </div>
                </Grid>
                <Grid className={classes.fieldContainer} item>
                  <label className={classes.fieldLabel}>Your review</label>
                  <Field
                    component={TextField}
                    inputProps={{ className: classes.textAreaField }}
                    type="email"
                    multiline
                    rows={5}
                    name="review"
                    variant="outlined"
                  />
                </Grid>
                <Grid className={classes.btnContainer} container justify="center">
                  {/* <FormButton disabled={isSubmitting} type="submit">
                  Submit
                </FormButton> */}
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Paper>
  );
};

export { BillingForm };
