import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { purple, grey } from "../../../constants/color";

interface IProps {
  name: string;
  bookCount: number;
  image: string;
  slug: string;
}
const useStyles = makeStyles({
  container: {
    flex: 1,
    display: "flex",
    marginBottom: 20,
    alignItems: "center",
  },
  imgContainer: {
    maxWidth: 40,
    marginRight: 15,
  },
  img: {
    maxWidth: "100%",
    borderRadius: 20,
  },
  name: {
    "&:hover": {
      color: purple,
      textDecoration: "none",
    },
    fontSize: 16,
    fontFamily: "averta-bold",
    color: "black",
    transition: "all .5s",
  },
  bookCount: {
    fontSize: 12,
    color: grey,
    marginTop: 6,
  },
});
const SidebarAuthor: React.FC<IProps> = ({ name, bookCount, image, slug }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} alt={name} src={image} />
      </div>
      <div>
        <Link href={`/author-profile/${slug}`}>
          <a className={classes.name}>{name}</a>
        </Link>
        <p className={classes.bookCount}>{bookCount} Book</p>
      </div>
    </div>
  );
};

export default SidebarAuthor;
