import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { questions } from "./Questions";
import globalUseStyles from "../../../GlobalStyle";
import Faq from "./Faq";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
    },
    grid: {
        paddingTop: theme.spacing(5),
        color: "white",
        paddingBottom: theme.spacing(2),
    },
    title: {
        fontFamily: "Poppins",
        fontSize: "2.125rem",
        fontWeight: 700,
        textAlign: "center",
    },
    faq: {
        fontFamily: "Poppins",
        color: "Black",
        fontSize: "1.5rem",
        fontWeight: 600,
        paddingRight: 22,
    },
    sub: {
        color: "#000000",
        fontWeight: 400,
        fontSize: "1.125rem",
        fontFamily: "Lora",
        fontStyle: "normal",
        paddingTop: 10,
        textAlign: "center",
    },
    button: {
        filter: "drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25))",
        color: "white",
        width: '7vw',
        background: "linear-gradient(105.5deg, #EE5060 19.57%, #B25A59 78.85%)",
        textTransform: "initial",
          '&:hover': {
            backgroundColor: "linear-gradient(105.5deg, #EE5060 19.57%, #B25A59 78.85%)",
            color: "white",
            boxShadow: 'none',
          },,
    },
}));

const Doubts = (props) => {
    const sub = "All your queries about our platform can be addressed here.";
    const faq = "Frequently Asked Questions";

    const [data, setData] = useState(questions);

    const classes = useStyles();
    const globalClasses = globalUseStyles();

    return (
        <section className={`${globalClasses.toolbarMargin} ${classes.root}`}>
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
