import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const Feed = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar}></div>
            <div>Feed</div>
        </div>
    );
};
export default Feed;
