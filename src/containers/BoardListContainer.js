import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@material-ui/core";

const BoardListContainer = () => {
  const classes = useStyle();
  return (
    <div className="BoardListContainer" style={{ backgroundColor: "black" }}>
      boardList
    </div>
  );
};

const useStyle = makeStyles((theme) => ({}));

export default BoardListContainer;
