import React from "react";
import logo from "../../public/img/logo.png";
import { Grid } from "@material-ui/core";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Grid container alignItems={"center"} item={true} md={4} lg={3} xs={12}>
      <div>
        <Link href="/">
          <img alt={"Book junky"} src={logo} style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </Grid>
  );
};
export default Logo;
