import * as React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Link from "next/link";
import footerLogo from "../public/img/footer-logo.png";
import fb from "../public/img/fb.png";
import insta from "../public/img/insta.png";
import twitter from "../public/img/twitter.png";
import { purple, grey } from "../constants/color";
import FooterBook from "./footer/footer-book";

const useStyles = makeStyles({
  container: {
    paddingTop: 60,
    paddingBottom: 25,
  },
  logoImg: {
    marginBottom: 20,
    maxWidth: "100%",
  },
  title: {
    fontFamily: "averta-bold",
    fontSize: 20,
    marginBottom: 16,
  },
  logoText: {
    fontFamily: "averta-light",
    letterSpacing: 1,
    fontSize: 14,
    lineHeight: "22px",
    marginBottom: 20,
  },
  socialWrap: {
    "& > a": {
      "&:first-child": {
        paddingLeft: 0,
      },
      paddingLeft: 20,
    },
    display: "flex",
    flex: 1,
  },
  listItem: {
    "& > a": {
      "&:hover": {
        textDecoration: "none",
        color: purple,
      },
      transition: "all .3s",
      color: grey,
    },
    fontSize: 16,
    color: grey,
    fontFamily: "averta-bold",
    lineHeight: "35px",
  },
});

const listGenres: string[] = ["Action", "Comedy", "Drama", "E-books", "Horror", "Kids"];

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container>
        <Grid className={classes.container} container={true} spacing={2}>
          <Grid item={true} sm={12} md={3} lg={4} xs={12}>
            <Link href={"/"}>
              <a>
                <img className={classes.logoImg} src={footerLogo} alt="MrMbiuu" />
              </a>
            </Link>
            <p className={classes.logoText}>
              Suspendisse potenti. Nulla facilisi. Vestibulum non blandit nulla. Vivamus id orci condimentum, suscipit
              nunc non, viverra justo. Phasellus sit amet justo ac felis sagittis elementum a at dui.
            </p>
            <div className={classes.socialWrap}>
              <a href="http://fb.com/buituan.minh.10">
                <img width={30} alt="fb" src={fb} />
              </a>
              <a href="/mb">
                <img width={30} alt="fb" src={insta} />
              </a>
              <a href="/mb">
                <img width={30} alt="fb" src={twitter} />
              </a>
            </div>
          </Grid>
          <Grid item={true} sm={12} md={3} xs={12}>
            <h3 className={classes.title}>Best Review</h3>
            <Grid container direction="column">
              <FooterBook name={"Bash and Lucy Fetch Confidence"} author={"Lisa & MichaelCol"} image={"some.jpg"} />
              <FooterBook name={"Bash and Lucy Fetch Confidence"} author={"Lisa & MichaelCol"} image={"some.jpg"} />
              <FooterBook name={"Bash and Lucy Fetch Confidence"} author={"Lisa & MichaelCol"} image={"some.jpg"} />
            </Grid>
          </Grid>
          <Grid item={true} md={3} sm={12} xs={12}>
            <h3 className={classes.title}>Contact Us</h3>
            <ul>
              {listGenres.map((item, index) => (
                <li className={classes.listItem} key={index}>
                  <Link href={"#"}>
                    <a>{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item={true} md={3} lg={2} xs={12}>
            <h3 className={classes.title}>Genres</h3>
            <ul>
              <li className={classes.listItem}>BookJunky</li>
              <li className={classes.listItem}>80 Crown Street</li>
              <li className={classes.listItem}>London, WE4DC7A</li>
              <li className={classes.listItem} />
              <li className={classes.listItem}>Call: 0772 410 0100</li>
              <li className={classes.listItem}>Mail: minhcf2013@gmail.com</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
export default Footer;
