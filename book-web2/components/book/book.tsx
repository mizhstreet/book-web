import * as React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { grey, purple } from "../../constants/color";
interface IProps {
  name: string;
  author: string;
  orgPrice?: number;
  price: number;
  image: string;
}
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
    [theme.breakpoints.down("xs")]: {
      padding: 4,
    },
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
}));
const Book: React.FC<IProps> = ({ name, price, orgPrice, author, image }) => {
  const classes = useStyles();
  return (
    <Grid item={true} lg={3} xs={6} sm={6} md={4}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <LazyLoad height={200}>
            <img className={classes.img} src={image} alt={"lucy"} />
          </LazyLoad>
        </div>
        <Link href="/product">
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
