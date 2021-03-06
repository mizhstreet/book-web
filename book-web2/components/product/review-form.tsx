import React from "react";
import { Formik, Field, FieldProps, Form } from "formik";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Grid, makeStyles } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { purple } from "../../constants/color";
import { FormButton } from "./form-button";

interface IFormValues {
  name: string;
  email: string;
  rating: number;
  review: string;
}

const useStyles = makeStyles({
  container: {
    paddingTop: 40,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputField: {
    padding: 10,
    width: "40%",
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
});

const ReviewForm: React.FC = () => {
  const initialValues: IFormValues = {
    name: "",
    email: "",
    rating: 0,
    review: "",
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.formTitle}>Let's write a review </h1>
      <p>Your email address will not be published. Required fields are marked</p>
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
              <Grid className={classes.fieldContainer} item md={6} sm={12}>
                <label className={classes.fieldLabel}>Name</label>
                <Field
                  component={TextField}
                  inputProps={{ className: classes.inputField }}
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid className={classes.fieldContainer} item md={6} sm={12}>
                <label className={classes.fieldLabel}>Email</label>
                <Field
                  component={TextField}
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
                <FormButton disabled={isSubmitting} type="submit">
                  Submit
                </FormButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ReviewForm };
