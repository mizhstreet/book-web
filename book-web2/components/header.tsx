import * as React from "react";
import HeaderLinks from "./header/header-links";
import { Container, Grid, makeStyles } from "@material-ui/core";
import HeaderCart from "./header/header-cart";
import Navbar from "./header/navbar";
import Logo from "./header/logo";
import SearchBar from "./header/searchbar";

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <HeaderLinks />
        <HeaderCart />
      </Grid>
      <Grid container={true}>
        <Logo />
        <SearchBar />
      </Grid>
      <Grid container>
        <Navbar />
      </Grid>
    </Container>
  );
};

export default Header;
