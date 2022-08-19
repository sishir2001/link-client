import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import About from "./About";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

const Landing = (props) => {
    const classes = useStyles();
    const scrollRef = useRef(null);

    return (
        <div>
            <Home scrollRef={scrollRef} />
            <About scrollRef={scrollRef} />
        </div>
    );
};
export default Landing;
