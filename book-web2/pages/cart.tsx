import React from "react";
import lady from "../public/img/lady_author_3.jpg";
import Page from "../components/page";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { purple } from "../constants/color";
import Book from "../components/book/book";
import AuthorSlider from "../components/author-profile/author-slider";

const useStyles = makeStyles((theme) => ({
  authorBackground: {
    minHeight: 250,
    width: "100%",
    backgroundColor: purple,
    display: "block",
  },
  authorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 100,
  },
  authorName: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
  },
  authorShareText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 25,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#888a92",
  },
  authorQuote: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 17,
    fontWeight: 400,
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 800,
  },
  avatar: {
    display: "block",
    maxWidth: 120,
    marginTop: -75,
  },
  avatarImg: {
    width: "100%",
    borderRadius: 75,
  },
  filterItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888a92",
    marginRight: 20,
    paddingBottom: 15,
    cursor: "pointer",
    transition: ".6s",
    "&:hover": {
      color: purple,
    },
    "&$filterItemActive": {
      borderBottom: "4px solid",
      borderBottomColor: purple,
    },
  },
  filterItemActive: {},
  filterList: {
    display: "flex",
    marginLeft: 15,
    overflow: "scroll",
    marginBottom: 20,
    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  line: {
    borderBottom: "1px solid #e5e6ea",
    display: "block",
    marginBottom: 20,
    marginTop: 20,
  },
  showMoreBtn: {
    display: "block",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    color: purple,
    border: "2px solid",
    borderColor: purple,
    backgroundColor: "white",
    borderRadius: 7,
    fontSize: 15,
    fontWeight: "bold",
    transition: ".3s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: purple,
      color: "white",
    },
  },
  socialMedia: {
    color: purple,
    fontSize: 40,
  },
  socialMediaItem: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  socialMediaList: {
    display: "flex",
    justifyContent: "center",
  },
}));

const AuthorProfile: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="Lucy Crehan">
      <div className={classes.authorContainer}>
        <div className={classes.authorBackground}></div>
        <div className={classes.avatar}>
          <img className={classes.avatarImg} src={lady} alt="" />
        </div>
        <h3 className={classes.authorName}>Lucy Crehan</h3>
        <p className={classes.authorQuote}>
          "I'll cross my heart and hope to die and we're always and forever I'll be by your side I'll cross my heart and
          hope to die and we're always and forever I'll be by your side I'll cross my heart and hope to die and we're
          always and forever I'll be by your side"
        </p>
        <div>
          <p className={classes.authorShareText}>Share this author</p>
          <ul className={classes.socialMediaList}>
            <li className={classes.socialMediaItem}>
              <FacebookIcon className={classes.socialMedia} />
            </li>
            <li className={classes.socialMediaItem}>
              <InstagramIcon className={classes.socialMedia} />
            </li>
            <li className={classes.socialMediaItem}>
              <TwitterIcon className={classes.socialMedia} />
            </li>
            <li className={classes.socialMediaItem}>
              <EmailIcon className={classes.socialMedia} />
            </li>
          </ul>
        </div>
      </div>
      <Container>
        <ul className={classes.filterList}>
          <li className={`${classes.filterItem} ${classes.filterItemActive}`}>
            <p>Lastest Publication</p>
          </li>
          <li className={classes.filterItem}>
            <p>Best Seller</p>
          </li>
          <li className={classes.filterItem}>
            <p>Featured</p>
          </li>
        </ul>
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
          <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
          <Book name={"Boring Girls, A Novel"} price={5.03} orgPrice={8.99} author={"Sara Taylor"} />
        </Grid>
        <Grid container justify="center">
          <button className={classes.showMoreBtn}>Show more</button>
        </Grid>
        <AuthorSlider />
      </Container>
    </Page>
  );
};

export default AuthorProfile;
