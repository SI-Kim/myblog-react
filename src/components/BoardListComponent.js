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
  Posts.map((data) => {
    console.log(data);
    console.log(data.id.toString());
    console.log(data.title);
    console.log(data.date);
  });
  console.log(Posts);
  const classes = useStyle();
  return (
    <div className={classes.boardBox}>
      <TableContainer className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ width: "10%" }}>번호</TableCell>
            <TableCell align="center" style={{ width: "60%" }}>제목</TableCell>
            <TableCell align="center" style={{ width: "10%" }}>일시</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {
            Posts.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{data.id.toString()}</TableCell>
                  <TableCell align="right" >{data.title}</TableCell>
                  <TableCell>{data.date}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </TableContainer>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  boardBox: {
    
    width: "100%",
    height: "100%"
  },
  table: {
    marginLeft: "5%",
    marginRight: "5% auto",
    width: "90%",
    height: "100%",
  }
}));

export default BoardListComponent;
