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
    fontSize: 14,
    color: grey[700],
  },
});
const OrderTracking: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadline}>Tracking Information</TableCell>
              <TableCell className={classes.tableHeadline}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    10/11/2000
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Package delivered
                  </Typography>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    28/10/2000
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Package arrived at local office
                  </Typography>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    27/10/2000
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Package accepted by airline
                  </Typography>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    26/10/2000
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography>
                  <Typography className={classes.infoAttr} component="span">
                    Shipment ready
                  </Typography>
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

export { OrderTracking };
