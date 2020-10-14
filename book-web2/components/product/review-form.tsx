import React from "react";
import { Formik, Field, FieldProps, Form } from "formik";
import { Grid, makeStyles } from "@material-ui/core";
import { TextField } from "formik-material-ui";

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
    fontSize: 40,
    width: "100%",
    padding: 0,
  },
  inputNoPadding: {
    padding: 0,
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={6}>
                <Field
                  component={TextField}
                  inputProps={{ className: classes.inputNoPadding }}
                  className={classes.inputField}
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6}>
                <Field component={TextField} className={classes.inputField} name="name" variant="outlined" />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ReviewForm };
