import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@material-ui/core";

const BoardListComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.boardBox}>
      <TableContainer>
        <TableHead></TableHead>
      </TableContainer>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  boardBox: {}
}));

export default BoardListComponent;
