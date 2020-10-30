import { Box, Checkbox, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { grey } from "../../constants/color";
import { FilterAttrItem } from "./filter-attr-item";

const useStyles = makeStyles({
  headline: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16,
  },
  checbox: {
    padding: 0,
  },
  filterValue: {
    paddingLeft: 10,
    color: grey,
  },
});

const FilterAttr: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Typography component="h4" className={classes.headline}>
        Age range
      </Typography>
      <Box p={2}>
        <ul>
          <li>
            <FilterAttrItem />
          </li>
          <li>
            <FilterAttrItem />
          </li>
          <li>
            <FilterAttrItem />
          </li>
          <li>
            <FilterAttrItem />
          </li>
          <li>
            <FilterAttrItem />
          </li>
          <li>
            <FilterAttrItem />
          </li>
          <li>
            <FilterAttrItem />
          </li>
        </ul>
      </Box>
    </>
  );
};

export { FilterAttr };
