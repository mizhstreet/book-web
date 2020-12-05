import * as React from "react";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { purple } from "../../../constants/color";
import { getRandomInt } from "../../../helpers/getRandomInt";

interface IProps {
  name: string;
  image: string;
  slug: string;
}

const useStyles = makeStyles({
  container: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 25,
    width: "100%",
    textAlign: "center",
  },
  img: {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  imgContainer: {
    position: "relative",
    width: "75%",
    paddingTop: "75%",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto",
  },
  name: {
    "&:hover": {
      textDecoration: "none",
    },
    fontSize: 18,
    fontFamily: "averta-bold",
    color: "black",
    marginTop: 10,
    display: "block",
  },
  author: {
    color: purple,
    fontSize: 14,
    marginBottom: 7,
    marginTop: 7,
    fontFamily: "averta-semibold",
  },
});

const AuthorSliderItem: React.FC<IProps> = ({ name, image, slug }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={image} alt={"lucy"} />
        </div>
        <Link href={`/author-profile/${slug}`}>
          <a className={classes.name}>{name}</a>
        </Link>
        <p className={classes.author}>{getRandomInt(2, 20)} books</p>
      </div>
    </Grid>
  );
};
export default AuthorSliderItem;
