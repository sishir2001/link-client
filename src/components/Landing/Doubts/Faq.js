import React, { useState } from 'react';
import { Icon, makeStyles} from "@material-ui/core";
import Plus from "../../../svgs/plus.svg";
import Minus from "../../../svgs/minus.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#ECECEC",
        padding: theme.spacing(4),
        borderRadius: 10,
        boxShadow: "7px 7px 5px rgba(27, 27, 27, 0.25)",
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        display: "flex",
    },
    question: {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: 500,
    },
    answer: {
        fontWeight: 400,
        fontSize: 22,
        fontFamily: "Lora",
        fontStyle: "normal",
        textAlign: "justify",
    },
    container: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(2),
    },
    img: {
        width: 30,
        height:30,
    },
}));

const Faq = ({ques,ans}) => {
    const [show, setShow] = useState(false);
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <div>
                <div onClick={() => setShow(!show)} >
                    {show? <img className={classes.img} src={Minus} alt="minus"/> : <img className={classes.img} src={Plus} alt="plus"/>}
                </div>
            </div>
            <div className= {classes.container}>
                <div className= {classes.question}>{ques}</div>
                {show && <p className= {classes.answer}>{ans}</p>}
            </div>
        </div>
     );
}
 
export default Faq;