import React from "react";
import Page from "../components/page";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import boring from "../public/img/products/boring_girls_a_novel.jpg";
import { purple } from "../constants/color";
import Book from "../components/book/book";
import AuthorSlider from "../components/author-profile/author-slider";
import { PageBannerTitle } from "../components/page-banner-title";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: "rgb(243, 242, 245)",
    padding: 10,
  },
  summaryHeadline: {
    fontSize: 16,
    paddingBottom: 20,
  },
  table: {
    marginTop: 100,
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
}));

const AuthorProfile: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="Lucy Crehan">
      <PageBannerTitle title="Cart" />
      <Container>
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
              {/* <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
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
        </Grid>
        <Grid container>
          <Grid item md={4} sm={6} xs={12}>
            <Paper elevation={4}>
              <h3>Cart Totals</h3>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AuthorProfile;
