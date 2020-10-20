import * as React from "react";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import lucy from "../../public/img/products/bash_and_lucy-2.jpg";
import { grey, purple } from "../../constants/color";
interface IProps {
  name: string;
  author: string;
  orgPrice?: number;
  price: number;
}
const useStyles = makeStyles({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
  },
  img: {
    width: "100%",
    height: "auto",
    borderRadius: 8,
  },
  imgContainer: {
    flex: 1,
    objectFit: "cover",
  },
  title: {
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
    color: purple,
  },
  price: {
    fontSize: 16,
    color: purple,
    fontFamily: "averta-bold",
  },
});
const Book: React.FC<IProps> = ({ name, price, orgPrice, author }) => {
  const classes = useStyles();
  return (
    <Grid item={true} lg={3} xs={12} sm={6} md={4}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={lucy} alt={"lucy"} />
        </div>
        <Link href="#">
          <a className={classes.title}>{name}</a>
        </Link>
        <p className={classes.author}>by: {author}</p>
        <div>
          {!orgPrice || <span className={classes.orgPrice}>${orgPrice}</span>}
          <span className={classes.price}>${price}</span>
        </div>
      </div>
    </Grid>
  );
};
export default Book;
