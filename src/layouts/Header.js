import React from "react";
import { makeStyles } from "@material-ui/styles";

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.headerBox}>
      <h1 className={classes.H1}>Header</h1>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  headerBox: {
    backgroundColor: "#008080",
    height: "15%",
    color: "white"
  },
  H1: {
    margin: "0",
    paddingTop: "3%",
    paddingLeft: "4%"
  }
}));

export default Header;
