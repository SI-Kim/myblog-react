import React from "react";
import { makeStyles } from "@material-ui/styles";
import Router from "../routes/Router";

const Main = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainBox}>
      <Router />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  mainBox: {
    height: "70vh",
    width: "69vw",
    float: "left",
    color: "black",
    "&:hover": {
      border: "dotted"
    }
  },
  h1: {
    paddingTop: "35%",
    paddingLeft: "45%"
  }
}));

export default Main;
