import React from "react";
import { Box, Button, Container, FormControl, Grid, makeStyles, Typography } from "@material-ui/core";

import { Page } from "../../components/page";
import { PageBannerTitle } from "../../components/page-banner-title";
import { purple } from "../../constants/color";
import { SideMenu } from "../../components/account/side-menu";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";

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
});

const index: React.FC = () => {
  const initialValues: IFormValues = {
    old: "",
    new: "",
    reNew: "",
  };
  const classes = useStyles();
  return (
    <Page title="my account">
      <PageBannerTitle title="Change password" />
      <Container>
        <Box>
          <Typography className={classes.sectionTitle} component="h2">
            Your password
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
                <Form className={classes.formContainer}>
                  <Grid container direction="column">
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Current password</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="old"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>New password</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="new"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Re-enter new password</label>
                      <Field
                        component={TextField}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        name="reNew"
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

export default index;
