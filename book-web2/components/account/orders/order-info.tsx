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
    marginTop: 40,
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
  infoAttr: {
    fontWeight: "bolder",
    marginRight: 5,
  },
});
const OrderInfo: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadline}>Order Information</TableCell>
              <TableCell className={classes.tableHeadline}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Order Status:
                  </Typography>
                  Confirmed
                </Typography>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Order ID:
                  </Typography>
                  #12731982nasd
                </Typography>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Date added:
                  </Typography>{" "}
                  22/7/2000
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Payment method:
                  </Typography>
                  Cash on delivery
                </Typography>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Shipping method:
                  </Typography>
                  Yamato express
                </Typography>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Shipping cost:
                  </Typography>
                  Free
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Grid>
  );
};

export { OrderInfo };
