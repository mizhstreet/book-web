import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Palette } from "react-palette";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { purple } from "../../../constants/color";
import lucy from "../../../public/img/products/les_des_animaux.jpg";

interface IProps {
  name: string;
  author: string;
  description: string;
}
const useStyles = makeStyles({
  container: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#ededa6",
    marginLeft: 5,
    marginRight: 5,
    position: "relative",
    zIndex: 1,
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    borderRadius: 15,
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.5)",
  },
  author: {
    color: "white",
  },
  title: {
    "&:hover": {
      color: purple,
      textDecoration: "none",
    },
    color: "white",
    fontFamily: "averta-bold",
    fontSize: 18,
    display: "block",
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    display: "flex",
  },
  contentInfo: {
    width: "70%",
  },
  ratings: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: 18,
    color: "white",
  },
  ratingsCount: {
    color: "white",
    fontSize: 12,
    paddingLeft: 10,
  },
  description: {
    lineHeight: "20px",
    color: "white",
    marginBottom: 35,
  },
  imgContainer: {
    width: "30%",
  },
  image: {
    maxWidth: "100%",
  },
  viewShop: {
    "&:hover": {
      textDecoration: "none",
    },
    width: "fit-content",
    fontFamily: "averta-bold",
    padding: "15px 25px",
    borderRadius: 100,
    fontSize: 14,
    color: "black",
    display: "block",
    backgroundColor: "white",
    marginBottom: 10,
  },
});

const FeaturedItem: React.FC<IProps> = ({ name, author, description }) => {
  const classes = useStyles();
  return (
    <Palette src={lucy}>
      {(palette) => (
        <div
          style={{
            background: palette.data.vibrant,
          }}
          className={classes.container}
        >
          <div className={classes.overlay} />
          <Link href={"#"}>
            <a className={classes.title}>{name}</a>
          </Link>
          <div className={classes.contentContainer}>
            <div className={classes.contentInfo}>
              <p className={classes.author}>by: {author}</p>
              <div className={classes.ratings}>
                <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                </div>
                <span className={classes.ratingsCount}>2 Ratings</span>
              </div>
              <p className={classes.description}>{description}</p>
              <Link href={"#"}>
                <a className={classes.viewShop}>View in book store -&gt</a>
              </Link>
            </div>
            <div className={classes.imgContainer}>
              <img className={classes.image} alt={"lemon"} src={lucy} />
            </div>
          </div>
        </div>
      )}
    </Palette>
  );
};

export default FeaturedItem;
