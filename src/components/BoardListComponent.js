import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@material-ui/core";
import Posts from "../datas/BoardPosts";

const BoardListComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.boardBox}>
      <TableContainer className={classes.table}>
        <TableHead>
          <TableRow>
           
          </TableRow>
        </TableHead>
      </TableContainer>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  boardBox: {
    backgroundColor: "grey",
    width: "100%",
    height: "100%"
  },
  table: {
    backgroundColor: "yellow",
    width: "100%",
    height: "100%"
  }
}));

export default BoardListComponent;
