import React from "react";
import { makeStyles } from "@material-ui/styles";
import Categories from "../datas/Categories";
import { MainCategoryBanner } from "../components/index";

const MainPageContainer = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainPageBox}>
      {Categories.map((data) => (
        <MainCategoryBanner
          header={data.name}
          date={data.date}
          content={data.content}
          url={data.url}
        />
      ))}
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  mainPageBox: {
    height: "100%",
    width: "100%"
  }
}));

export default MainPageContainer;
