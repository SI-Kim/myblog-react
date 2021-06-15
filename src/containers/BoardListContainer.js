import React from "react";
import { makeStyles } from "@material-ui/styles";

const BoardListContainer = () => {
  const classes = useStyle();
  return <div className={classes.containerBox}>boardList</div>;
};

const useStyle = makeStyles((theme) => ({
  containerBox: {
    height: "100%",
    width: "100%"
  }
}));

export default BoardListContainer;
