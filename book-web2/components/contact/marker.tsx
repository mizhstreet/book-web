import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

interface IProps {
  lat: number;
  lng: number;
}
const useStyles = makeStyles({
  icon: {
    color: red[400],
  },
});
const Marker: React.FC<IProps> = () => {
  const classes = useStyles();
  return (
    <div>
      <RoomIcon className={classes.icon} />
    </div>
  );
};

export { Marker };
