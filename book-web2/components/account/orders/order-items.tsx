import React from "react";
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { purple } from "../../../constants/color";
import { grey, red } from "@material-ui/core/colors";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import dark from "../../../public/img/products/darknet.jpg";

const useStyles = makeStyles({
  img: {
    maxWidth: 60,
  },
  table: {
    marginTop: 20,
  },
  tableCell: {
    fontSize: 14,
    color: grey[800],
    fontWeight: "bold",
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
  btn: {
    maxWidth: "35px",
    maxHeight: "35px",
    minWidth: "35px",
    minHeight: "35px",
    marginLeft: 4,
    marginRight: 4,
  },
  icon: {
    fontSize: 22,
  },
});
const OrderItems: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadline}>Product name</TableCell>
              <TableCell className={classes.tableHeadline}></TableCell>
              <TableCell align="center" className={classes.tableHeadline}>
                Quantity
              </TableCell>
              <TableCell className={classes.tableHeadline}>Price</TableCell>
              <TableCell className={classes.tableHeadline}>Total</TableCell>
              <TableCell className={classes.tableHeadline}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>Lucy and bash fetch confidence</TableCell>
              <TableCell className={classes.tableCell}>
                <img className={classes.img} src={dark} />
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                3
              </TableCell>
              <TableCell className={classes.tableCell}>2000</TableCell>
              <TableCell className={classes.tableCell}>6000</TableCell>
              <TableCell className={classes.tableCell}>
                <Button size="small" className={classes.btn} variant="contained" color="primary">
                  <ShoppingCartTwoToneIcon className={classes.icon} />
                </Button>
                <Button size="small" className={classes.btn} variant="contained" color="secondary">
                  <SettingsBackupRestoreIcon className={classes.icon} />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Lucy and bash fetch confidence</TableCell>
              <TableCell className={classes.tableCell}>
                <img className={classes.img} src={dark} />
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                3
              </TableCell>
              <TableCell className={classes.tableCell}>2000</TableCell>
              <TableCell className={classes.tableCell}>6000</TableCell>
              <TableCell className={classes.tableCell}>
                <Button size="small" className={classes.btn} variant="contained" color="primary">
                  <ShoppingCartTwoToneIcon className={classes.icon} />
                </Button>
                <Button size="small" className={classes.btn} variant="contained" color="secondary">
                  <SettingsBackupRestoreIcon className={classes.icon} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Grid>
  );
};

export { OrderItems };
