import * as React from 'react';
import { Grid } from '@material-ui/core';
import thriller from '../../public/img/cate-thrillers.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  img: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
  },
  imgContainer: {
    flex: 1,
    objectFit: 'cover',
  },
  itemWrapper: {
    paddingLeft: 15,
    position: 'relative',
    paddingBottom: 20,
  },
  name: {
    position: 'absolute',
    top: 20,
    left: '50%',
    transform: 'translate(-50%,0)',
    color: 'white',
    fontFamily: 'averta-bold',
    fontSize: 20,
  },
});

const CategoryItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item={true} container={true} className={classes.itemWrapper} xs={12} sm={6} md={4}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={thriller} alt={'Thrill'} />
      </div>
      <h5 className={classes.name}>Thriller</h5>
    </Grid>
  );
};

export default CategoryItem;
