import * as React from "react";
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import { grey } from "../../constants/color";
import { FilterAttr } from "./filter-attr";

const useStyles = makeStyles({
  title: {
    fontFamily: "averta-semibold",
    fontSize: 15,
    color: grey,
    marginBottom: 20,
  },
  filterbarHead: {
    fontWeight: "bold",
    color: grey,
  },
});
const FilterBar: React.FC = () => {
  const classes = useStyles();
  return (
    <aside>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2} flexWrap="wrap">
        <Typography className={classes.filterbarHead} component="h3">
          Filter
        </Typography>
        <span>Reset</span>
      </Box>
      <FilterAttr />
      <FilterAttr />
      <FilterAttr />
      <FilterAttr />
    </aside>
  );
};

export { FilterBar };
