import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "../../constants/color";
import SidebarBook from "./sidebar/sidebar-book";
import SidebarAuthor from "./sidebar/sidebar-author";

const useStyles = makeStyles({
  title: {
    fontFamily: "averta-semibold",
    fontSize: 15,
    color: grey,
    marginBottom: 20
  }
});
const Sidebar: React.FC = () => {
  const classes = useStyles();
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
        <SidebarAuthor name="Sarah Wilson" bookCount={10} />
        <SidebarAuthor name="Sarah Wilson" bookCount={10} />
        <SidebarAuthor name="Sarah Wilson" bookCount={10} />
        <SidebarAuthor name="Sarah Wilson" bookCount={10} />
        <SidebarAuthor name="Sarah Wilson" bookCount={10} />
      </div>
    </aside>
  );
};

export default Sidebar;
