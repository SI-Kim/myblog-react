import React from "react";
import { Route } from "react-router-dom";
import { MainPageContainer, BoardListContainer } from "../containers/index";

const Router = () => {
  return (
    <div className="Router">
      <Route path="/" component={MainPageContainer} />
      <Route path="/boardList" component={BoardListContainer} />
    </div>
  );
};

export default Router;
