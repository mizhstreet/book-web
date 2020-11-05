import React from "react";
import { Formik, Field, Form } from "formik";
import { Box, Button, FormControl, Grid, InputAdornment, makeStyles, Paper, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";

import logo from "../../public/img/logo.png";
import { grey, purple } from "../../constants/color";

interface IFormValues {
  username: string;
  password: string;
  email: string;
  name: string;
}
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "15%",
    paddingTop: 70,
  },
  background: {
    backgroundColor: purple,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    minHeight: 1000,
  },
  formHeadline: {
    paddingBottom: 20,
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16,
    color: grey,
  },
  inputField: {
    padding: 15,
    paddingLeft: 5,
  },
  inputFieldIcon: {
    color: grey,
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
  },
  fieldContainer: {
    marginBottom: 25,
  },
  formContainer: {
    paddingTop: 0,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}));

const RegisterForm: React.FC = () => {
  const initialValues: IFormValues = {
    username: "",
    password: "",
    email: "",
    name: "",
  };
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid container justify="center">
        {/* <div className={classes.background}></div> */}
        <Grid item md={5} sm={7} xs={11}>
          <Paper className={classes.container} elevation={6}>
            <Box display="flex" justifyContent="center">
              <img src={logo} alt="" />
            </Box>
            <Typography className={classes.formHeadline} component={"h3"}>
              Register
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
                <Form className={classes.formContainer}>
                  <Grid container direction="column">
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Name</label>
                      <Field
                        component={TextField}
                        fullWidth={true}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon className={classes.inputFieldIcon} />
                            </InputAdornment>
                          ),
                        }}
                        name="username"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Email</label>
                      <Field
                        component={TextField}
                        fullWidth={true}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon className={classes.inputFieldIcon} />
                            </InputAdornment>
                          ),
                        }}
                        name="username"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Username</label>
                      <Field
                        component={TextField}
                        fullWidth={true}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle className={classes.inputFieldIcon} />
                            </InputAdornment>
                          ),
                        }}
                        name="username"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Password</label>
                      <Field
                        type="password"
                        component={TextField}
                        fullWidth={true}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon className={classes.inputFieldIcon} />
                            </InputAdornment>
                          ),
                        }}
                        name="password"
                      />
                    </FormControl>
                    <FormControl className={classes.fieldContainer}>
                      <label className={classes.fieldLabel}>Re-enter password</label>
                      <Field
                        type="password"
                        component={TextField}
                        fullWidth={true}
                        variant="outlined"
                        inputProps={{ className: classes.inputField }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon className={classes.inputFieldIcon} />
                            </InputAdornment>
                          ),
                        }}
                        name="password"
                      />
                    </FormControl>
                    <Button variant="contained" color="primary">
                      Register
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export { RegisterForm };
