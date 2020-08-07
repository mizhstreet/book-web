import * as React from "react";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import lucy from "../../../public/img/bash_and_lucy-2.jpg";
import { purple } from "../../../constants/color";

interface IProps {
  name: string;
  author: string;
}
const useStyles = makeStyles({
  container: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 25
  },
  img: {
    width: "100%",
    height: "auto",
    borderRadius: 8
  },
  imgContainer: {
    flex: 1,
    objectFit: "cover"
  },
  title: {
    "&:hover": {
      textDecoration: "none"
    },
    fontSize: 18,
    fontFamily: "averta-bold",
    color: "#fff",
    marginTop: 10,
    display: "block"
  },
  author: {
    color: "rgba(255, 255, 255, 0.48)",
    fontSize: 14,
    marginBottom: 7,
    marginTop: 7,
    fontFamily: "averta-semibold"
  },
  orgPrice: {
    textDecoration: "line-through",
    fontSize: 12,
    marginRight: 8,
    color: purple
  },
  price: {
    fontSize: 16,
    color: purple,
    fontFamily: "averta-bold"
  }
});

const NewestItem: React.FC<IProps> = ({ name, author }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={lucy} alt={"lucy"} />
        </div>
        <Link href="#">
          <a className={classes.title}>{name}</a>
        </Link>
        <p className={classes.author}>by: {author}</p>
      </div>
    </Grid>
  );
};
export default NewestItem;
