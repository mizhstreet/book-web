import React from "react";
import { Formik, Field, FieldProps, Form } from "formik";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { purple } from "../../constants/color";
// import { FormButton } from "./form-button";

interface IFormValues {
  voucher: string;
}

const useStyles = makeStyles({
  container: {},
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    color: "#fdd835",
  },
  unratedStar: {
    color: purple,
  },
  btnContainer: {},
});

const VoucherForm: React.FC = () => {
  const initialValues: IFormValues = {
    voucher: "",
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
            <Box mr={"20px"}>
              <Field
                component={TextField}
                inputProps={{ className: classes.inputField }}
                name="voucher"
                variant="outlined"
              />
            </Box>
            <Button variant="contained" color="primary">
              Apply
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { VoucherForm };
