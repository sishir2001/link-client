import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import Members from "./Members/index";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import Doubts from "./Doubts/Doubts";

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
            <Doubts/>
            <Footer/>
            <Members />
        </div>
    );
};
export default Landing;
