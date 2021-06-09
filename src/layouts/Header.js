import React from "react";
import { makeStyles } from "@material-ui/styles";

const Header = () => {
  const classes = useStyle();
  return <div className={classes.headerBox}></div>;
};

const useStyle = makeStyles((theme) => ({
  headerBox: {
    backgroundColor: "light grey"
  }
}));

export default Header;
