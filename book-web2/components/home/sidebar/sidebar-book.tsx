import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { grey, purple } from "../../../constants/color";
import lucy from "../../../public/img/bash_and_lucy-2.jpg";

interface IProps {
  name: string;
  author: string;
  price?: number;
  orgPrice?: number;
  image: string;
}
const useStyles = makeStyles({
  container: {
    flex: 1,
    display: "flex",
    marginBottom: 20,
  },
  img: {
    maxWidth: "100%",
    boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)",
  },
  imgContainer: {
    maxWidth: 55,
    marginRight: 15,
  },
  title: {
    "&:hover": {
      textDecoration: "none",
    },
    fontSize: 18,
    fontFamily: "averta-bold",
    color: "black",
  },
  author: {
    color: grey,
    fontSize: 14,
    marginBottom: 7,
    marginTop: 7,
    fontFamily: "averta-semibold",
  },
  orgPrice: {
    textDecoration: "line-through",
    fontSize: 12,
    marginRight: 8,
    color: "purple",
  },
  price: {
    fontSize: 12,
    color: purple,
    fontFamily: "averta-bold",
  },
});
const SidebarBook: React.FC<IProps> = ({ name, author, price, orgPrice }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={lucy} alt={"lucy"} className={classes.img} />
      </div>
      <div>
        <Link href="#">
          <a className={classes.title}>{name}</a>
        </Link>
        <p className={classes.author}>by {author}</p>
        <div>
          {!orgPrice || <span className={classes.orgPrice}>${orgPrice}</span>}
          {!price || <span className={classes.price}>${price}</span>}
        </div>
      </div>
    </div>
  );
};

export default SidebarBook;
