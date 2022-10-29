import React from 'react';
import { makeStyles, Typography, Paper, Link} from "@material-ui/core";
import Dots from "../../svgs/dots.svg"


const useStyles = makeStyles((theme) => ({
    root: {
        background: "#FFFFFF",
        padding: theme.spacing(2),
        display: "flex",
        // filter: "drop-shadow(4px 5px 25px rgba(0, 0, 0, 0.25))",
        border: "2px solid #DFE0EB",
        borderRadius: "8px 8px 0px 0px",
        marginTop: theme.spacing(1),
        alignItems: "center",
    },
    info: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 22,
        fontStyle: "normal",
        textAlign: "center",
        color: "black",
        marginRight: "3px",
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
        cursor: "pointer",
    },
    img1: {
        width:60,
        height:60,
        paddingRight: theme.spacing(2),
        cursor: "pointer",
    },
    div1: {
        display: "flex",
        width:"100%",
    },
    div2: {
        display: "flex",
        flexDirection: "column",
        padding:0,
        alignItems: "right",
        marginRight: theme.spacing(3),
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
        cursor: "pointer",
    },
}));

const Notification = ({design,name,idea,psID,info,time}) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    if(design===1){
        return ( 
            <Paper elevation={2} className={classes.root}>
                {/* <img className={classes.img1} src={Person} alt="person"/> */}
                <div className={classes.div1}>
                    <Typography variant="h4" className={classes.info}>
                        <Link href="#" onClick={preventDefault} className={classes.info}>
                            {name}
                        </Link>
                    </Typography>
                    <Typography variant="h4" className={classes.info}>
                        {info}
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        ID:
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        {idea}
                    </Typography>
                    <Typography variant="h4" className={classes.info}>
                        for 
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        Problem ID:
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        {psID}
                    </Typography>
                </div>
                <div className={classes.div2}>
                    <p className={classes.p}>{time}</p>
                    <img className={classes.img2} src={Dots} alt="dots"/>
                </div>
                
            </Paper>
     );
    }
    else if(design===2){
        return ( 
            <Paper elevation={2} className={classes.root}>
                {/* <img className={classes.img1} src={Person} alt="person"/> */}
                <div className={classes.div1}>
                    <Typography variant="h4" className={classes.info}>
                        <Link href="#" onClick={preventDefault} className={classes.info}>
                            {name}
                        </Link>
                    </Typography>
                    <Typography variant="h4" className={classes.info}>
                        {info}
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        ID:
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        {idea}
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        {psID}
                    </Typography>
                </div>
                <div className={classes.div2}>
                    <p className={classes.p}>{time}</p>
                    <img className={classes.img2} src={Dots} alt="dots"/>
                </div>
                
            </Paper>
    );
    }
    else{
        return ( 
            <Paper elevation={2} className={classes.root}>
                {/* <img className={classes.img1} src={Person} alt="person"/> */}
                <div className={classes.div1}>
                    <Typography variant="h4" className={classes.info}>
                        <Link href="#" onClick={preventDefault} className={classes.info}>
                            {name}
                        </Link>
                    </Typography>
                    <Typography variant="h4" className={classes.info}>
                        {info}
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        {idea}
                    </Typography>
                    <Typography variant="h4" className={classes.idea}>
                        {psID}
                    </Typography>
                </div>
                <div className={classes.div2}>
                    <p className={classes.p}>{time}</p>
                    <img className={classes.img2} src={Dots} alt="dots"/>
                </div>
                
            </Paper>
        );
    }
        
}
 
export default Notification;