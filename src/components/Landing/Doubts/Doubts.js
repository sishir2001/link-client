import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { questions } from "./Questions";
import Faq from "./Faq";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(15),
        paddingRight: theme.spacing(15),
        paddingBottom: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
    },
    grid: {
        paddingTop: theme.spacing(7),
        color: "white",
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 35,
        fontWeight: 700,
        textAlign: "center",
    },
    faq: {
        fontFamily: "Poppins",
        color: "Black",
        fontSize: 30,
        fontWeight: 600,
        paddingRight: 22,
    },
    sub: {
        color: "#000000",
        fontWeight: 400,
        fontSize: 20,
        fontFamily: "Lora",
        fontStyle: "normal",
        paddingTop: 10,
        textAlign: "center",
    },
    button: {
        filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25))",
        color: "white",
        background: "#217BF4",
    },
}));

const Doubts = (props) => {
    const sub = "All your queries about our platform can be addressed here.";
    const faq = "Frequently Asked Questions";

    const [data, setData] = useState(questions);

    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                Still have doubts?
            </Typography>
            <Typography variant="h2" className={classes.sub}>
                {sub}
            </Typography>
            <Grid container spacing={0} className={classes.grid}>
                <Grid item xs={11}>
                    <Typography variant="h2" className={classes.faq}>
                        {faq}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        style={{ borderRadius: 50 }}
                    >
                        View All
                    </Button>
                </Grid>
            </Grid>

            {data.map(({ id, question, answer }) => (
                <Faq key={id} ques={question} ans={answer} />
            ))}
        </section>
    );
};

export default Doubts;
