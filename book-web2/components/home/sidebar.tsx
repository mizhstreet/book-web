import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "../../constants/color";
import SidebarBook from "./sidebar/sidebar-book";
import SidebarAuthor from "./sidebar/sidebar-author";
import { useAllAuthorsQuery } from "../../generated/apolloComponent";
import { generateImageURL } from "../../helpers/generateImageUrl";

const useStyles = makeStyles({
  title: {
    fontFamily: "averta-semibold",
    fontSize: 15,
    color: grey,
    marginBottom: 20,
  },
});
const Sidebar: React.FC = () => {
  const classes = useStyles();
  const { data } = useAllAuthorsQuery();
  return (
    <aside>
      <h3 className={classes.title}>NEWEST RELEASE</h3>
      <div>
        <SidebarBook name={"Shattered"} author={"Peter Cowdron"} price={9.99} orgPrice={120} image={"asd.jpg"} />
        <SidebarBook name={"Shattered"} author={"Peter Cowdron"} price={9.99} orgPrice={120} image={"asd.jpg"} />
        <SidebarBook name={"Shattered"} author={"Peter Cowdron"} price={9.99} orgPrice={120} image={"asd.jpg"} />
        <SidebarBook name={"Shattered"} author={"Peter Cowdron"} price={9.99} orgPrice={120} image={"asd.jpg"} />
        <SidebarBook name={"Shattered"} author={"Peter Cowdron"} price={9.99} orgPrice={120} image={"asd.jpg"} />
      </div>
      <div style={{ height: 30 }} />
      <h3 className={classes.title}>NEWEST RELEASE</h3>
      <div>
        {data &&
          data.authors.map((a) => (
            <SidebarAuthor key={a.id} name={a.name} bookCount={10} image={generateImageURL(a.image)} />
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
