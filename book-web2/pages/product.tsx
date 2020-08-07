import React from "react";
import img from "../public/img/products/shattered.jpg";
import authorimg from "../public/img/lady_author_3.jpg";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Page from "../components/page";
import { Grid, makeStyles, Container } from "@material-ui/core";
import { purple } from "../constants/color";

const useStyles = makeStyles({
  productContainer: {
    backgroundColor: purple,
    paddingTop: 50,
    display: "block",
    minHeight: 500,
  },
  imgContainer: {
    objectFit: "cover",
    border: "none",
    position: "relative",
  },
  productImg: {
    width: "80%",
    maxWidth: 300,
    height: "auto",
    borderRadius: 10,
    position: "absolute",
    top: 40,
  },
  authorContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
  },
  authorImg: {
    maxWidth: "100%",
    borderRadius: 20,
    display: "block",
  },
  authorImgContainer: {
    maxWidth: 40,
    marginRight: 15,
  },
  authorName: {
    fontSize: 18,
    color: "white",
  },
  productName: {
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 20,
  },
  productDescription: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
  },
  star: {
    color: "#fdd835",
  },
  buyBtn: {
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    backgroundColor: "purple",
    borderRadius: 10,
    color: "white",
    fontSize: 14,
  },
});

const product: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="Product detail page">
      <div className={classes.productContainer}>
        <Container>
          <Grid container>
            <Grid item sm={12} md={4}>
              <div className={classes.imgContainer}>
                <img className={classes.productImg} src={img} alt="" />
              </div>
            </Grid>
            <Grid item sm={12} md={8}>
              <div className={classes.authorContainer}>
                <div className={classes.authorImgContainer}>
                  <img className={classes.authorImg} src={authorimg} alt="" />
                </div>
                <p className={classes.authorName}>Peter Cawdron</p>
              </div>
              <p className={classes.productName}>Shattered</p>
              <div>
                <div>
                  <StarBorderIcon className={classes.star} />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </div>
              </div>
              <p className={classes.productDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                rerum id perspiciatis obcaecati, nihil tempore, repellat quos
                nisi incidunt, magnam numquam debitis autem velit quasi harum
                odio voluptatibus nostrum voluptas! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat rerum id perspiciatis
                obcaecati, nihil tempore, repellat quos nisi incidunt, magnam
                numquam debitis autem velit quasi harum odio voluptatibus
                nostrum voluptas!
              </p>
              <div className="btns">
                <a className={classes.buyBtn} href="#">
                  Buy for $15
                </a>
                <a></a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Page>
  );
};

export default product;
