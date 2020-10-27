import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { purple } from "../../constants/color";

const useStyles = makeStyles({
  summaryContainer: {
    padding: 25,
  },
  summaryHeadline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  table: {
    marginTop: 100,
    marginBottom: 50,
  },
  tableCell: {
    borderBottom: "none",
  },
  tableHead: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottom: "3px solid",
    borderBottomColor: purple,
  },
  textRight: {
    textAlign: "right",
  },
});
const Summary: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end">
      <Grid item md={4} sm={6} xs={12}>
        <Paper className={classes.summaryContainer} elevation={4}>
          <h3 className={classes.summaryHeadline}>Cart Totals</h3>
          <Divider />
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    <p>Subtotal</p>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <p className={classes.textRight}>¥10000</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    <p>Shipping</p>
                  </TableCell>
                  <TableCell className={classes.tableCell} style={{ maxWidth: 200 }}>
                    <div>
                      <p className={classes.textRight} style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
                        Free shipping
                      </p>
                      <p className={classes.textRight}>Shipping options will be updated during check out</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    <p>Total</p>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <p className={classes.textRight}>¥10000</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button fullWidth variant="contained" color="primary">
            Proceed to checkout
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export { Summary };
