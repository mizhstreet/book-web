import * as React from "react";
import { Page } from "../components/page";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import Sidebar from "../components/home/sidebar";
import Featured from "../components/home/featured";
import { grey } from "../constants/color";
import Book from "../components/book/book";
import CategoryItem from "../components/home/category-item";
import Newest from "../components/home/newest";
import { useAllBooksQuery, useAllCategoriesQuery } from "../generated/apolloComponent";
import { generateImageURL } from "../helpers/generateImageUrl";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    paddingLeft: 45,
    paddingRight: 45,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  sectionTitle: {
    color: grey,
    fontSize: 15,
    paddingLeft: 15,
    marginBottom: 30,
    textTransform: "uppercase",
    fontFamily: "averta-semibold",
  },
  listItemWrapper: {
    marginBottom: 30,
  },
}));

const index: React.FC = () => {
  const classes = useStyles();
  const allBooksQuery = useAllBooksQuery();
  const allCategories = useAllCategoriesQuery();
  return (
    <Page title={"Welcome home"}>
      <Grid className={classes.mainContent} container={true}>
        <Featured />
        <Grid item={true} sm={12} lg={3} md={3} xs={12}>
          <Sidebar />
        </Grid>
        <Grid item={true} sm={12} lg={9} md={9} xs={12}>
          <h2 className={classes.sectionTitle}>Popular</h2>
          <Grid className={classes.listItemWrapper} container={true}>
            {allBooksQuery.loading && <CircularProgress />}
            {allBooksQuery.data &&
              allBooksQuery.data.books.map((c) => (
                <Book
                  key={c.id}
                  name={c.name}
                  price={c.price}
                  orgPrice={8.99}
                  author={c.author![0].name}
                  image={generateImageURL(c.image)}
                />
              ))}
          </Grid>
          <h2 className={classes.sectionTitle}>Categories</h2>
          <Grid className={classes.listItemWrapper} container={true}>
            {allCategories.data &&
              allCategories.data.categories.map((c) => (
                <CategoryItem
                  key={c.id}
                  name={c.name}
                  // price={c.price}
                  // orgPrice={8.99}
                  // author={c.author![0].name}
                  image={generateImageURL(c.image)}
                />
              ))}
          </Grid>
          <h2 className={classes.sectionTitle}>Popular</h2>
          <Grid className={classes.listItemWrapper} container={true}>
            {allBooksQuery.loading && <CircularProgress />}
            {allBooksQuery.data &&
              allBooksQuery.data.books.map((c) => (
                <Book
                  key={c.id}
                  name={c.name}
                  price={c.price}
                  orgPrice={8.99}
                  author={c.author![0].name}
                  image={generateImageURL(c.image)}
                />
              ))}
          </Grid>
        </Grid>
        <Newest />
      </Grid>
    </Page>
  );
};

export default index;
