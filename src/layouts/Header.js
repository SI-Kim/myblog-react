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
    height: "10%",
    marginBottom: "5%",
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
    paddingTop: "3%",
    paddingLeft: "4%"
  }
}));

export default Header;
