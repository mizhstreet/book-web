import React from "react";
import {
  Divider,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { purple } from "../../../constants/color";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  table: {
    marginTop: 20,
  },
  tableCell: {
    fontSize: 14,
    width: "50%",
  },
  tableHead: {
    backgroundColor: grey[100],
  },
  tableHeadline: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottom: "2px solid",
    color: "#5c4a9e",
    borderBottomColor: purple,
  },
});
const OrderAddress: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadline}>Shipping Address</TableCell>
              <TableCell className={classes.tableHeadline}>Billing Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography>asdasd sdadasd</Typography>
                <Typography>Higashi-ku kita 18 jo-higashi</Typography>
                <Typography>7 chome 2-24</Typography>
                <Typography>Sapporo-shi 0650018</Typography>
                <Typography>Gumma</Typography>
                <Typography>Japan</Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography>asdasd sdadasd</Typography>
                <Typography>Higashi-ku kita 18 jo-higashi</Typography>
                <Typography>7 chome 2-24</Typography>
                <Typography>Sapporo-shi 0650018</Typography>
                <Typography>Gumma</Typography>
                <Typography>Japan</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Grid>
  );
};

export { OrderAddress };
