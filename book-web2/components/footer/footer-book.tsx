import * as React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";
import img from "../../public/img/bash_and_lucy-2.jpg";
import { purple, grey } from "../../constants/color";

interface IProps {
  name: string;
  author: string;
  image: string;
}
const useStyles = makeStyles({
  book: {
    flex: 1,
    display: "flex",
    marginBottom: 15,
  },
  img: {
    maxWidth: "55px",
    objectFit: "contain",
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    paddingLeft: 15,
  },
  name: {
    "&:hover": {
      textDecoration: "none",
      color: purple,
    },
    fontFamily: "averta-bold",
    fontSize: 18,
    color: "black",
    transition: "all .5s",
  },
  author: {
    color: grey,
    fontFamily: "averta-semibold",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 15,
  },
});

const FooterBook: React.FC<IProps> = ({ name, author }) => {
  const classes = useStyles();
  return (
    <div className={classes.book}>
      <img className={classes.img} alt="book" src={img} />
      <div className={classes.content}>
        <Link href={"#"}>
          <a className={classes.name}>{name}</a>
        </Link>
        <p className={classes.author}>by {author}</p>
      </div>
    </div>
  );
};

export default FooterBook;
