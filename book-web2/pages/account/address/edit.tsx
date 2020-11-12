import React from "react";
import { Box, Button, Container, FormControl, Grid, makeStyles, MenuItem, Typography } from "@material-ui/core";

import { Page } from "../../../components/page";
import { PageBannerTitle } from "../../../components/page-banner-title";
import { purple } from "../../../constants/color";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";

interface IFormValues {
  old: string;
  new: string;
  reNew: string;
}

const useStyles = makeStyles({
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 40,
    paddingBottom: 15,
    color: purple,
  },
  fieldContainer: {
    marginBottom: 25,
  },
  inputField: {
    padding: 8,
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 14,
  },
  select: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const Edit: React.FC = () => {
  const initialValues: IFormValues = {
    old: "",
    new: "",
    reNew: "",
  };
  const classes = useStyles();
  return (
    <Page title="my account">
      <PageBannerTitle title="Edit Address" />
      <Container>
        <Box>
          <Typography className={classes.sectionTitle} component="h2">
            Your Address
          </Typography>
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
              <Box maxWidth={500}>
                <Form>
                  <Grid container direction="column">
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Name</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="old"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Company Name</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
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
                      <label className={classes.fieldLabel}>Street Address</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Postcode</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Town/City</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Phone number</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Email address</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
                      />
                    </FormControl>
                    <Box display="flex" justifyContent="flexStart">
                      <Button variant="contained" color="primary">
                        Change
                      </Button>
                    </Box>
                  </Grid>
                </Form>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </Page>
  );
};

export default Edit;
