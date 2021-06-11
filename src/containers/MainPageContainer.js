import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const MainPageContainer = () => {
  return (
    <div>
      <Link to="boardList">
        <Button children="List" variant="contained" />
      </Link>
    </div>
  );
};

export default MainPageContainer;
