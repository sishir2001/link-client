import { makeStyles, Grid, Typography} from "@material-ui/core";
import React, { useState } from "react";
import {notifications} from "../NotificationLists/NotificationList";
import Notification from "./NotificationSection";
import Tick from "../../../svgs/tick.svg"

const useStyles = makeStyles((theme) => ({
    section: {
        marginTop: 100,
        margin:"auto",
        marginBottom: 40,
        display: "flex",
        flexDirection: "column",
    },
    grid: {
        paddingTop: theme.spacing(5),
        color: "Black",
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: 600,
        fontStyle: "normal",
    },
    grid1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        cursor: "pointer",
    },
    sub:{
        color: "black",
        fontWeight: 500,
        fontSize: 18,
        fontFamily: "Lora",
        fontStyle: "normal",
        paddingLeft: 5,
    },
}));


const Notifications = (props) => {

    const title = "Notifications";
    const text = "Mark as read";
    
    const [data, setData] = useState(notifications);
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <Grid container spacing={0} className= {classes.grid}>
                <Grid item xs={9}>
                    <Typography variant="h2" className={classes.title}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.grid1}>
                    <img src = {Tick} alt= 'tick'/>
                    <Typography variant="h2" className={classes.sub}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>

            {data.map (({id,design,name,ideaId,psID,info,time}) => {
                return(
                    <Notification key={id} idea={ideaId} info={info} time={time} design={design} name={name} psID={psID}/>
                )
            })}

        </section>
        
    );
}

export default Notifications;