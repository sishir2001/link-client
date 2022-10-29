import React, { useState } from 'react';
import {makeStyles} from "@material-ui/core";
import Plus from "../../../svgs/plus.svg";
import Minus from "../../../svgs/minus.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#ECECEC",
        padding: theme.spacing(1),
        borderRadius: 10,
        boxShadow: "7px 7px 5px rgba(27, 27, 27, 0.25)",
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1),
        display: "flex",
    },
    question: {
        fontFamily: "Poppins",
        fontSize: "1.25rem",
        fontWeight: 500,
        marginTop: "2px",
    },
    answer: {
        fontWeight: 400,
        fontSize: "1rem",
        fontFamily: "Lora",
        fontStyle: "normal",
        textAlign: "justify",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
    },
    container: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(2),
    },
    img: {
        width: "1.5rem",
        height:"1.5rem",
        cursor: "pointer",
        paddingLeft: theme.spacing(2),
        paddingTop: 5,
    },
}));

const Faq = ({ques,ans}) => {
    const [show, setShow] = useState(false);
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <div onClick={() => setShow(!show)} >
                {show? <img className={classes.img} src={Minus} alt="minus"/> : <img className={classes.img} src={Plus} alt="plus"/>}
            </div>
            <div className= {classes.container}>
                <div className= {classes.question}>{ques}</div>
                {show && <p className= {classes.answer}>{ans}</p>}
            </div>
        </div>
     );
}
 
export default Faq;