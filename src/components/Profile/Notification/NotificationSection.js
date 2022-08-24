import React, { useState } from 'react';
import { makeStyles, Typography} from "@material-ui/core";
import Person from "../../../svgs/person.svg"
import Dots from "../../../svgs/dots.svg"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#ECECEC",
        padding: theme.spacing(2),
        display: "flex",
        filter: "drop-shadow(4px 5px 25px rgba(0, 0, 0, 0.25))",
        border: "2px solid #DFE0EB",
        borderRadius: "8px 8px 0px 0px",
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(2),
        alignItems: "center",
    },
    info: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 22,
        fontStyle: "normal",
        textAlign: "center",
        color: "black",
    },
    idea:{
        color: "#3751FF",
        fontWeight: 600,
        fontSize: 22,
        fontFamily: "Poppins",
        fontStyle: "normal",
        textAlign: "center",
        paddingRight: theme.spacing(1),
        textDecoration: "underline",
        textDecorationColor: "#3751FF",
    },
    img1: {
        width:60,
        height:60,
        paddingRight: theme.spacing(2),
    },
    div1: {
        display: "flex",
        width:"90%",
    },
    div2: {
        display: "flex",
        flexDirection: "column",
        padding:0,
    },
    p: {
        fontWeight: 400,
        fontSize: 18,
        fontFamily: "Poppins",
        fontStyle: "normal",
        textAlign: "center",
        padding: 0,
        marginTop: 0,
        marginBottom: 15,
    },
    img2: {
        padding: 0,
    },
}));

const Notification = ({idea,info,time}) => {
    const [show, setShow] = useState(true);
    const classes = useStyles();

    return ( 
            <div className={classes.root}>
                <img className={classes.img1} src={Person} alt="person"/>
                <div className={classes.div1}>
                    <Typography variant="h4" className={classes.idea}>
                        {idea}
                    </Typography>
                    <Typography variant="h4" className={classes.info}>
                        {info}
                    </Typography>
                </div>
                <div className={classes.div2}>
                    <p className={classes.p}>{time}</p>
                    <img className={classes.img2} src={Dots} alt="dots"/>
                </div>
                
            </div>
     );
}
 
export default Notification;