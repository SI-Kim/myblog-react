import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Categories from '../datas/Categories';
import MainCategoryBanner from '../components/MainCategoryBanner';

const MainPageContainer = () => {

  const classes = useStyle();
  return (
    <div className={classes.mainPageBox}>
      {
        Categories.map((data) => (
          <MainCategoryBanner header={data.name} date={data.date} content={data.content} />
        ))
      }      
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
