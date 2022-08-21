import { makeStyles } from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import Members from "./Members/index";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import Doubts from "./Doubts/Doubts";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: theme.spacing(3),
//     },
// }));

const Landing = (props) => {
    const scrollRef = useRef(null);

    return (
        <div>
            <Home scrollRef={scrollRef} />
            <About scrollRef={scrollRef} />
            <Members />
            <Doubts />
            <Footer />
        </div>
    );
};
export default Landing;
