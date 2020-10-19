import React from "react";
import lady from "../public/img/lady_author_3.jpg";
import Page from "../components/page";
import { makeStyles } from "@material-ui/core";
import { purple } from "../constants/color";

const useStyles = makeStyles({
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
  },
  authorName: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
  },
  authorQuote: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 20,
    fontWeight: 400,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#888a92",
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
});

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
          "I'll cross my heart and hope to die and we're always and forever I'll be by your side"
        </p>
      </div>
    </Page>
  );
};

export default AuthorProfile;
