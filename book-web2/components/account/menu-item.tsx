import { Box, Grid, makeStyles, SvgIconTypeMap, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Link from "next/link";
import React from "react";
import { purple } from "../../constants/color";

interface IProps {
  href: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  description: string;
}
const useStyles = makeStyles({
  container: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "2px solid",
    borderRadius: 5,
    borderColor: "rgba(226, 226, 226, 1)",
    color: "rgba(105, 105, 115, 1)",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
  },
  icon: {
    marginBottom: 10,
    color: purple,
    fontSize: 40,
  },
});
const MenuItem: React.FC<IProps> = ({ href, Icon, description }) => {
  const classes = useStyles();
  return (
    <Grid item component="li" sm={3}>
      <Link href={href}>
        <a>
          <Box className={classes.container}>
            <Icon className={classes.icon} />
            <Typography className={classes.description}>{description}</Typography>
          </Box>
        </a>
      </Link>
    </Grid>
  );
};

export { MenuItem };
