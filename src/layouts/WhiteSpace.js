import React from "react";
import { makeStyles } from "@material-ui/styles";

const WhiteSpace = () => {
  const classes = useStyle();
  return (
    <div className={classes.whiteSpaceBox}>
      <p>WhiteSpace</p>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  whiteSpaceBox: {
    border: "1px",
    "&:hover": {
      border: "dotted"
    }
  }
}));

export default WhiteSpace;
