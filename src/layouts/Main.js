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
    backgroundColor: "#F5F5DC",
    height: "70vh",
    width: "70vw",
    float: "right",
    marginRight: "15vw",
    "&:hover": {
      border: "dotted 3px"
    }
  },
  h1: {
    color: "black",
    paddingTop: "35%",
    paddingLeft: "45%"
  }
}));

export default Main;
