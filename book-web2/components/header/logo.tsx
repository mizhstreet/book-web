import React from "react";
import logo from "../../public/img/logo.png";
import { Grid } from "@material-ui/core";
const Logo: React.FC = () => {
  return (
    <Grid container alignItems={"center"} item={true} md={4} lg={3} xs={12}>
      <div>
        <img alt={"Book junky"} src={logo} />
      </div>
    </Grid>
  );
};
export default Logo;
