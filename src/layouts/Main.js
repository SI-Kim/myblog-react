import React from "react";
import { makeStyles } from "@material-ui/styles";

const Main = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainBox}>
      <h1 className={classes.h1}>Main</h1>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  mainBox: {
    height: "70vh",
    width: "69vw",
    float: "right",
    marginRight: "15vw",
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
