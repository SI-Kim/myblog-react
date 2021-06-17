import React from "react";
import { makeStyles } from "@material-ui/styles";

const WhiteSpace = () => {
  const classes = useStyle();
  return (
    <div className={classes.whiteSpaceBox}>
      <p className={classes.p}>
        White
        <br />
        Space
      </p>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  whiteSpaceBox: {
    float: "right",
    marginRight: "0",
    width: "15vw",
    height: "70vh",

    "&:hover": {
      border: "dotted"
    }
  },
  p: {
    paddingLeft: "35%",
    paddingTop: "170%"
  }
}));

export default WhiteSpace;
