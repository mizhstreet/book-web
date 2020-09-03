import React from "react";
import img from "../public/img/products/shattered.jpg";
import authorimg from "../public/img/lady_author_3.jpg";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Page from "../components/page";
import { Grid, makeStyles, Container, colors } from "@material-ui/core";
import { purple } from "../constants/color";
import { ReviewComment } from "../components/product/review-comment";
import SidebarBook from "../components/home/sidebar/sidebar-book";

const useStyles = makeStyles({
  productContainer: {
    backgroundColor: purple,
    paddingTop: 50,
    display: "block",
    minHeight: 500,
    marginBottom: 100,
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
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  overview: {
    fontSize: 16,
  },
  line: {
    borderBottom: "1px solid #e5e6ea",
    display: "block",
    marginBottom: 20,
    marginTop: 20,
  },
  subSectionTitle: {
    color: "#888a92",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "bold",
  },
  productDetailAttrs: {
    "&> li": {
      paddingTop: 5,
      paddingBottom: 5,
    },
  },
  previewContainer: {
    display: "flex",
    flexDirection: "row",
  },
  previewItem: {
    display: "block",
    width: 100,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: colors.yellow[900],
  },
  writeReviewBtn: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    color: "white",
    border: "none",
    backgroundColor: purple,
    borderRadius: 7,
    fontSize: 15,
    fontWeight: "bold",
  },
  reviewSectionHeadWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewSubHeadWrapper: {
    marginTop: 30,
    display: "flex",
  },
  avgRatingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 100,
  },
  totalRatings: {
    color: "#888a92",
    paddingLeft: 10,
    paddingBottom: 5,
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
  },
  reviewStarEmpty: {
    color: purple,
  },
  sidebarContainer: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 20,
  },
  sidebarBooksContainer: {
    marginTop: 20,
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
      <Container>
        <Grid container>
          <Grid item xs={12} md={9}>
            <div>
              <h3 className={classes.sectionTitle}>Overview</h3>
              <p className={classes.overview}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                cum dolor, laudantium numquam earum fugiat. Placeat quo
                doloribus quasi et, animi harum deserunt pariatur libero,
                mollitia cumque assumenda provident ratione. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. At doloremque voluptate
                perferendis natus accusamus, voluptas qui rem similique minus
                incidunt vitae nobis neque laboriosam sed nostrum optio
                doloribus, quod ea. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quaerat rerum id perspiciatis obcaecati, nihil
                tempore, repellat quos nisi incidunt, magnam numquam debitis
                autem velit quasi harum odio voluptatibus nostrum voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                rerum id perspiciatis obcaecati, nihil tempore, repellat quos
                nisi incidunt, magnam numquam debitis autem velit quasi harum
                odio voluptatibus nostrum voluptas! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat rerum id perspiciatis
                obcaecati, nihil tempore, repellat quos nisi incidunt, magnam
                numquam debitis autem velit quasi harum odio voluptatibus
                nostrum voluptas! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quaerat rerum id perspiciatis obcaecati, nihil
                tempore, repellat quos nisi incidunt, magnam numquam debitis
                autem velit quasi harum odio voluptatibus nostrum voluptas!
              </p>
            </div>
            <div className={classes.line}></div>
            <Grid container>
              <Grid item md={6}>
                <h6 className={classes.subSectionTitle}>Book Details</h6>
                <ul className={classes.productDetailAttrs}>
                  <li>
                    <span className={classes.subTitle}>Genres:</span> Thriller
                  </li>
                  <li>
                    <span className={classes.subTitle}>Hardcover:</span> NA
                  </li>
                  <li>
                    <span className={classes.subTitle}>Publisher:</span> NXB Kim
                    dong
                  </li>
                  <li>
                    <span className={classes.subTitle}>Language:</span> English
                  </li>
                  <li>
                    <span className={classes.subTitle}>ISBN-10:</span> NA
                  </li>
                  <li>
                    <span className={classes.subTitle}>Dimensions:</span> NA
                  </li>
                </ul>
              </Grid>
              <Grid item md={6}>
                <h6 className={classes.subSectionTitle}>Previews</h6>
                <div className={classes.previewContainer}>
                  <div className={classes.previewItem}></div>
                  <div className={classes.previewItem}></div>
                  <div className={classes.previewItem}></div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.line}></div>
            <div>
              <div className={classes.reviewSectionHeadWrapper}>
                <h3 className={classes.sectionTitle}>Customer review</h3>
                <button className={classes.writeReviewBtn}>
                  Write a review
                </button>
              </div>
              <div className={classes.reviewSubHeadWrapper}>
                <p className={classes.avgRatingTitle}>
                  Average Customer Rating
                </p>
                <div>
                  <div className={classes.ratingContainer}>
                    <div>
                      <StarBorderIcon className={classes.reviewStarEmpty} />
                      <StarBorderIcon className={classes.reviewStarEmpty} />
                      <StarBorderIcon className={classes.reviewStarEmpty} />
                      <StarBorderIcon className={classes.reviewStarEmpty} />
                      <StarBorderIcon className={classes.reviewStarEmpty} />
                    </div>
                    <span className={classes.totalRatings}>0 Rating</span>
                  </div>
                </div>
              </div>
              <div>
                <ReviewComment
                  author={"min"}
                  content={"aijsbduiasdboiasoifno"}
                  createdAt={"2010/3/2"}
                  image={"some"}
                />
                <ReviewComment
                  author={"min"}
                  content={"aijsbduiasdboiasoifno"}
                  createdAt={"2010/3/2"}
                  image={"some"}
                />
              </div>
              <div className={classes.line}></div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.sidebarContainer}>
              <h3 className={classes.subSectionTitle}>BOOKS BY LUCY CREHAN</h3>
              <ul className={classes.sidebarBooksContainer}>
                <li>
                  <SidebarBook
                    name="Batch and shit"
                    author="Creig Stark"
                    image={"some.jpg"}
                  />
                </li>
                <li>
                  <SidebarBook
                    name="Batch and shit"
                    author="Creig Stark"
                    image={"some.jpg"}
                  />
                </li>
                <li>
                  <SidebarBook
                    name="Batch and shit"
                    author="Creig Stark"
                    image={"some.jpg"}
                  />
                </li>
                <li>
                  <SidebarBook
                    name="Batch and shit"
                    author="Creig Stark"
                    image={"some.jpg"}
                  />
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default product;
