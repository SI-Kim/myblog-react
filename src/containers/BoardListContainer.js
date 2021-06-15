import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BoardListComponent } from '../components/index';

const BoardListContainer = () => {
  const classes = useStyle();
  return (
    <div className={classes.containerBox}>
      <BoardListComponent />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  containerBox: {
    height: "100%",
    width: "100%"
  }
}));

export default BoardListContainer;
