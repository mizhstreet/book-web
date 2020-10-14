import * as React from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import { purple } from '../../constants/color';
import Slider, { Settings } from 'react-slick';
import NewestItem from './newest/newest-item';

const sliderSettings: Settings = {
  autoplay: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  arrows: false,
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
  container: {
    backgroundColor: purple,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 20,
  },
  title1: {
    fontFamily: 'averta-semibold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 14,
  },
  title2: {
    fontFamily: 'averta-bold',
    fontSize: 24,
    marginBottom: 35,
    color: '#fff',
  },
  title3: {
    fontSize: 15,
    marginBottom: 35,
    color: '#fff',
  },
});

const Newest = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Container>
        <Grid container>
          <Grid alignItems="center" justify="center" direction="column" container item xs={12} md={4} lg={3}>
            <p className={classes.title1}>our</p>
            <p className={classes.title2}>TOP 8</p>
            <p className={classes.title3}>Our most popular Book</p>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Slider {...sliderSettings}>
              <NewestItem name="Lucy and bash" author="mrmbiuu" />
              <NewestItem name="Lucy and bash" author="mrmbiuu" />
              <NewestItem name="Lucy and bash" author="mrmbiuu" />
              <NewestItem name="Lucy and bash" author="mrmbiuu" />
              <NewestItem name="Lucy and bash" author="mrmbiuu" />
              <NewestItem name="Lucy and bash" author="mrmbiuu" />
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Newest;
