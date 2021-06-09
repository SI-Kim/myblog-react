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
    backgroundColor: "#3CB371",
    width: "15%",
    color: "white",
    height: "70%",
    float: "left"
  },
  p: {
    paddingLeft: "20%",
    paddingTop: "170%"
  }
}));

export default Sidebar;
