import * as React from "react";
import Page from "../components/page";
import { Box, Divider, Grid, makeStyles, MenuItem, Select } from "@material-ui/core";
import { PageBannerTitle } from "../components/page-banner-title";
import { FilterBar } from "../components/filter-bar/filter-bar";
import { grey } from "../constants/color";
import Book from "../components/book/book";

const useStyles = makeStyles(() => ({
  select: {
    minWidth: 150,
    maxWidth: 600,
  },
  counter: {
    fontSize: 15,
    fontWeight: "bold",
    color: grey,
  },
  mainContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
}));

type orderType = "default" | "rating" | "date" | "price:low" | "price:high";

const index: React.FC = () => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<orderType>("default");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrder(event.target.value as orderType);
  };

  return (
    <Page title={"Welcome home"}>
      <PageBannerTitle title="Childrens" />
      <Box height={50}></Box>
      <Grid container>
        <Grid item md={3} xs={12}>
          <FilterBar />
        </Grid>
        <Grid className={classes.mainContainer} item md={9}>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <p className={classes.counter}>10 books found</p>
            <Select className={classes.select} autoWidth variant="outlined" value={order} onChange={handleChange}>
              <MenuItem value={"default"}>Default</MenuItem>
              <MenuItem value={"rating"}>Sort by rating</MenuItem>
              <MenuItem value={"date"}>Sort by date</MenuItem>
              <MenuItem value={"price:low"}>Sort by price : low to high</MenuItem>
              <MenuItem value={"price:high"}>Sort by price: hight to low</MenuItem>
            </Select>
          </Box>
          <Divider />
          <Grid container>
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
            <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

export default index;
