import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { MainPageContainer, BoardListContainer } from "../containers/index";

const Router = () => {
  const classes = useStyle();
  return (
    <div className={classes.router}>
      <Route path="/" component={MainPageContainer} />
      <Route path="/boardList" component={BoardListContainer} />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  router: {
    height: "70vh"
  }
}));

export default Router;
