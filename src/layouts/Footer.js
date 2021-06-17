import React from "react";
import { makeStyles } from "@material-ui/styles";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerBox}>
      <p className={classes.p}>Footer</p>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  footerBox: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "15%",
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      border: "dotted",
      backgroundColor: "white",
      color: "black"
    }
  },
  p: {
    paddingLeft: "4%",
    paddingTop: "3%"
  }
}));

export default Footer;
