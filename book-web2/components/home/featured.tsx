import React from 'react';
import Slider, { Settings } from 'react-slick';
import { makeStyles } from '@material-ui/styles';
import FeaturedItem from './featured/featured-item';
import { grey } from '../../constants/color';

const sliderSettings: Settings = {
  autoplay: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  initialSlide: 0,
  dots: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const useStyles = makeStyles({
  title: {
    fontFamily: 'averta-semibold',
    fontSize: 17,
    color: grey,
    marginBottom: 23,
    textTransform: 'uppercase',
  },
  container: {
    marginBottom: 25,
    maxWidth: '100%',
  },
});
const Featured: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.title}>This week feature book</p>
      <Slider {...sliderSettings}>
        <FeaturedItem
          name={'The Happy Lemon'}
          author={'Kurt Yamashita'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        />
        <FeaturedItem
          name={'The Happy Lemon'}
          author={'Kurt Yamashita'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        />
        <FeaturedItem
          name={'The Happy Lemon'}
          author={'Kurt Yamashita'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        />
        <FeaturedItem
          name={'The Happy Lemon'}
          author={'Kurt Yamashita'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        />
        <FeaturedItem
          name={'The Happy Lemon'}
          author={'Kurt Yamashita'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        />
        <FeaturedItem
          name={'The Happy Lemon'}
          author={'Kurt Yamashita'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        />
      </Slider>
    </div>
  );
};
export default Featured;
