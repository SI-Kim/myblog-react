import React from "react";
import { makeStyles } from "@material-ui/styles";

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.headerBox}>
      <h1 className={classes.h1}>Header</h1>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  headerBox: {
    height: "15%",
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      border: "dotted",
      backgroundColor: "white",
      color: "black"
    }
  },
  h1: {
    margin: "0",
    paddingTop: "5%",
    paddingLeft: "4%"
  }
}));

export default Header;
