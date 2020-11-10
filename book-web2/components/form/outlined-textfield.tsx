import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField, TextFieldProps } from "formik-material-ui";
import { FormControl, InputAdornment, makeStyles, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { grey } from "../../constants/color";

interface IProps {
  labelname: string;
  Icon?: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
}

const useStyles = makeStyles({
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
});

const OutlinedTextfield: React.FC<TextFieldProps & IProps> = (props) => {
  const classes = useStyles();
  const { Icon, labelname, ...rest } = props;
  return (
    <FormControl className={classes.fieldContainer}>
      <label className={classes.fieldLabel}>{labelname}</label>
      <MuiTextField
        {...fieldToTextField(rest)}
        fullWidth={true}
        variant="outlined"
        inputProps={{ className: classes.inputField }}
        InputProps={
          Icon
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon className={classes.inputFieldIcon} />
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </FormControl>
  );
};

export { OutlinedTextfield };
