import React from "react";
import { makeStyles } from "@material-ui/core";
import globalUseStyles from "../../GlobalStyle";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

const Feed = (props) => {
    const classes = useStyles();
    const globalClasses = globalUseStyles();
    return (
        <div>
            <div className={globalClasses.toolbar}></div>
            <div>Feed</div>
        </div>
    );
};
export default Feed;
