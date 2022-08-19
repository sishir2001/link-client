import { makeStyles } from "@material-ui/core";
import React from "react";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

const Landing = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Home />
        </div>
    );
};
export default Landing;
