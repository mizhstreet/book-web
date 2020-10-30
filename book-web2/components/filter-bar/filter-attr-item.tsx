import { Box, Checkbox, makeStyles } from "@material-ui/core";
import React from "react";
import { grey } from "../../constants/color";

const useStyles = makeStyles({
  checbox: {
    padding: 0,
  },
  filterValue: {
    paddingLeft: 10,
    color: grey,
  },
});

const FilterAttrItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Checkbox size="small" className={classes.checbox} />
      <span className={classes.filterValue}>6-12</span>
    </Box>
  );
};

export { FilterAttrItem };
