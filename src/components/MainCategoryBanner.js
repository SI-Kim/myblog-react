import React from 'react';
import { 
    Card,
    CardHeader,
    CardContent,
    CardActions
 } from '@material-ui/core';
 import { makeStyles } from "@material-ui/styles";
 import { Link } from "react-router-dom";

const MainCategoryBanner = ({ header, content, date}) => {
    const classes = useStyle();
    return (
        <Link to="boardList">
            <Card className={classes.cardBox}>
                <CardHeader title={header} subheader={date} />
                <CardContent>{content}</CardContent>
            </Card>
        </Link>
    );
}

const useStyle = makeStyles((theme) => ({
    cardBox: {
        width: "20%"
    }
}));

export default MainCategoryBanner;
