import React from "react";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
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
import Link from "next/link";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  img: {
    maxWidth: 60,
  },
  viewBtn: {
    color: purple,
    "&:hover": {
      color: "black",
    },
  },
  summaryContainer: {
    padding: 25,
  },
  summaryHeadline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  table: {
    marginTop: 40,
    marginBottom: 50,
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
  tableInfo: {
    color: grey[600],
    fontSize: 14,
  },
});
const OrderHistory: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadline}>OrderId</TableCell>
              <TableCell className={classes.tableHeadline}>Customer</TableCell>
              <TableCell className={classes.tableHeadline}>No .</TableCell>
              <TableCell className={classes.tableHeadline}>Status</TableCell>
              <TableCell className={classes.tableHeadline}>Total</TableCell>
              <TableCell className={classes.tableHeadline}>Date Added</TableCell>
              <TableCell className={classes.tableHeadline}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                #13218
              </TableCell>
              <TableCell className={classes.tableCell}>Mr MinhBiu</TableCell>
              <TableCell className={classes.tableCell}>3</TableCell>
              <TableCell className={classes.tableCell}>Pending</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>20/8/2010</TableCell>
              <TableCell className={classes.tableCell}>
                <Link href="#">
                  <a className={classes.viewBtn}>
                    <VisibilityTwoToneIcon />
                  </a>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                #13218
              </TableCell>
              <TableCell className={classes.tableCell}>Mr MinhBiu</TableCell>
              <TableCell className={classes.tableCell}>3</TableCell>
              <TableCell className={classes.tableCell}>Pending</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>20/8/2010</TableCell>
              <TableCell className={classes.tableCell}>
                <Link href="#">
                  <a className={classes.viewBtn}>
                    <VisibilityTwoToneIcon />
                  </a>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                #13218
              </TableCell>
              <TableCell className={classes.tableCell}>Mr MinhBiu</TableCell>
              <TableCell className={classes.tableCell}>3</TableCell>
              <TableCell className={classes.tableCell}>Pending</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>20/8/2010</TableCell>
              <TableCell className={classes.tableCell}>
                <Link href="#">
                  <a className={classes.viewBtn}>
                    <VisibilityTwoToneIcon />
                  </a>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                #13218
              </TableCell>
              <TableCell className={classes.tableCell}>Mr MinhBiu</TableCell>
              <TableCell className={classes.tableCell}>3</TableCell>
              <TableCell className={classes.tableCell}>Pending</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>20/8/2010</TableCell>
              <TableCell className={classes.tableCell}>
                <Link href="#">
                  <a className={classes.viewBtn}>
                    <VisibilityTwoToneIcon />
                  </a>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <Typography className={classes.tableInfo} align="left">
        Showing 1 to 1 of 1 page
      </Typography>
    </Grid>
  );
};

export { OrderHistory };
