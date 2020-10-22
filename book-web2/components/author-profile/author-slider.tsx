import * as React from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import Slider, { Settings } from "react-slick";
import AuthorSliderItem from "./author-slider/author-slider-item";

const sliderSettings: Settings = {
  autoplay: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  arrows: false,
  centerPadding: "100px",
  responsive: [
    {
      breakpoint: 462,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f4f4f4",
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 20,
    marginTop: 30,
  },
  sectionHead: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
  },
});

const AuthorSlider: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Container>
        <h3 className={classes.sectionHead}>Explore more authors</h3>
        <Slider {...sliderSettings}>
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
          <AuthorSliderItem name="Sarah Wilson" totalBooks={4} />
        </Slider>
      </Container>
    </Grid>
  );
};

export default AuthorSlider;
