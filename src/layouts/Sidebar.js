import React from "react";
import { makeStyles } from "@material-ui/styles";

const Sidebar = () => {
  const classes = useStyle();
  return (
    <div className={classes.sidebarBox}>
      <p className={classes.p}>Sidebar</p>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  sidebarBox: {
    width: "15%",
    color: "black",
    height: "70%",
    float: "left",
    "&:hover": {
      border: "dotted"
    }
  },
  p: {
    paddingLeft: "20%",
    paddingTop: "170%"
  }
}));

export default Sidebar;
