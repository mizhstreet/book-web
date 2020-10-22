import * as React from "react";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import lucy from "../../../public/img/bash_and_lucy-2.jpg";
import lady from "../../../public/img/lady_author_3.jpg";
import { purple } from "../../../constants/color";

interface IProps {
  name: string;
  totalBooks: number;
}
const useStyles = makeStyles({
  container: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 25,
    textAlign: "center",
  },
  img: {
    width: "75%",
    height: "auto",
    borderRadius: "50%",
  },
  imgContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
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

const AuthorSliderItem: React.FC<IProps> = ({ name, totalBooks }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={lady} alt={"lucy"} />
        </div>
        <Link href="#">
          <a className={classes.name}>{name}</a>
        </Link>
        <p className={classes.author}>{totalBooks} books</p>
      </div>
    </Grid>
  );
};
export default AuthorSliderItem;
