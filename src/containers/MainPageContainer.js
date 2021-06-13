import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const MainPageContainer = () => {

  const classes = useStyle();
  return (
    <div className={classes.mainPageBox}>
      <Link to="boardList">
        <Button children="List" variant="contained" />
      </Link>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  mainPageBox: {
    height: "100%",
    width: "100%",
  }
}));

export default MainPageContainer;
