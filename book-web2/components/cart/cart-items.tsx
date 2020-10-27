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
import { purple } from "../../constants/color";
import boring from "../../public/img/products/boring_girls_a_novel.jpg";

const useStyles = makeStyles({
  img: {
    maxWidth: 60,
  },
  removeBtn: {
    minWidth: 0,
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    fontWeight: "bold",
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
    marginTop: 100,
    marginBottom: 50,
  },
  tableCell: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5c4a9e",
  },
  tableHead: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottom: "3px solid",
    borderBottomColor: purple,
  },
});
const CartItems: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead} align="center" colSpan={3}>
                Product
              </TableCell>
              <TableCell className={classes.tableHead}>Price</TableCell>
              <TableCell className={classes.tableHead}>Quantity</TableCell>
              <TableCell className={classes.tableHead}>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                <Button className={classes.removeBtn} variant="contained" color="primary">
                  X
                </Button>
              </TableCell>
              <TableCell className={classes.tableCell} style={{ minWidth: 70 }}>
                <img src={boring} alt="asdn" className={classes.img} />
              </TableCell>
              <TableCell className={classes.tableCell}>Boring Girl, A novel</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>4</TableCell>
              <TableCell className={classes.tableCell}>¥10000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                <Button className={classes.removeBtn} variant="contained" color="primary">
                  X
                </Button>
              </TableCell>
              <TableCell className={classes.tableCell} style={{ minWidth: 70 }}>
                <img src={boring} alt="asdn" className={classes.img} />
              </TableCell>
              <TableCell className={classes.tableCell}>Boring Girl, A novel</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>4</TableCell>
              <TableCell className={classes.tableCell}>¥10000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell} style={{ minWidth: 30 }}>
                <Button className={classes.removeBtn} variant="contained" color="primary">
                  X
                </Button>
              </TableCell>
              <TableCell className={classes.tableCell} style={{ minWidth: 70 }}>
                <img src={boring} alt="asdn" className={classes.img} />
              </TableCell>
              <TableCell className={classes.tableCell}>Boring Girl, A novel</TableCell>
              <TableCell className={classes.tableCell}>¥3500</TableCell>
              <TableCell className={classes.tableCell}>4</TableCell>
              <TableCell className={classes.tableCell}>¥10000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Grid>
  );
};

export { CartItems };
