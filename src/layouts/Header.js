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
    color: "black",
    "&:hover": {
      border: "dotted"
    }
  },
  h1: {
    margin: "0",
    paddingTop: "5%",
    paddingLeft: "4%"
  }
}));

export default Header;
