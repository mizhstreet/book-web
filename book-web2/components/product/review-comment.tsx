import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import lady from "../../public/img/lady_author_3.jpg";
import { makeStyles, colors } from "@material-ui/core";
import { grey } from "../../constants/color";
interface IProps {
  author: string;
  image: string;
  content: string;
  createdAt: string;
}

const useStyles = makeStyles({
  avatar: {
    maxWidth: 60,
    borderRadius: 30,
  },
  authorName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  authorNameContainer: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 10,
  },
  authorContainer: {
    marginLeft: 20,
  },
  commentHeadContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  createdAt: {
    color: grey,
    paddingLeft: 40,
  },
  star: {
    fontSize: 20,
    color: colors.yellow[800],
  },
});
const ReviewComment: React.FC<IProps> = ({ author }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.commentHeadContainer}>
        <img className={classes.avatar} src={lady} />
        <div className={classes.authorContainer}>
          <div className={classes.authorNameContainer}>
            <p className={classes.authorName}>{author}</p>
            <p className={classes.createdAt}>3 minutes ago</p>
          </div>
          <div>
            <StarBorderIcon className={classes.star} />
            <StarBorderIcon className={classes.star} />
            <StarBorderIcon className={classes.star} />
            <StarBorderIcon className={classes.star} />
            <StarBorderIcon className={classes.star} />
          </div>
        </div>
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis minima fuga laudantium facere quas
          atque, aliquid ab ipsum ad doloremque culpa reprehenderit earum repellendus! Aperiam illum totam expedita
          consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt mollitia, voluptatum
          assumenda ut cum culpa perspiciatis! Accusantium, fugiat explicabo? Quasi maiores libero totam facilis tempore
          ipsam doloribus natus iusto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda blanditiis
          quam similique, facilis totam veritatis eius corporis iusto, aspernatur placeat nulla, voluptas officiis
          aliquam consectetur! Quia qui expedita doloribus accusantium.
        </p>
      </div>
    </div>
  );
};

export { ReviewComment };
