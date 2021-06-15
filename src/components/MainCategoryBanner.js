import React from "react";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const MainCategoryBanner = ({ header, content, date, url }) => {
  const classes = useStyle();
  return (
    <Link to={url} className={classes.linkBox}>
      <Card className={classes.cardBox}>
        <CardHeader title={header} subheader={date} />
        <CardContent>{content}</CardContent>
      </Card>
    </Link>
  );
};

const useStyle = makeStyles((theme) => ({
  cardBox: {
    width: "90%",
    margin: "auto"
  },
  linkBox: {
    display: "inline-block",
    width: "31%",
    padding: "1%"
    
  }
}));

export default MainCategoryBanner;
