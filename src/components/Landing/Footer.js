import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import lineSVG from "../../svgs/line.svg";
import smallLineSVG from "../../svgs/smallline.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#000000",
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    grid: {
        paddingTop: theme.spacing(10),
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Lekton",
        fontSize: 75,
        fontWeight: 700,
    },
    text: {
        fontFamily: "Poppins",
        color: "white",
        paddingRight: 22,
    },
    sub: {
        color: "#F0C53E",
        fontWeight: 400,
        fontSize: 25,
        paddingTop: 60,
    },
    line: {
        paddingRight: theme.spacing(2),
    },
    grid1: {
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        color: "white",
        background: "linear-gradient(105.5deg, #EE5060 19.57%, #B25A59 78.85%)",
        textTransform: "initial",
    },
    textField: {
        color: "#F0C53E",
        width: 300,
        height: 40,
        borderRadius: 80,
    },
    list: {
        paddingTop: 50,
        display: "flex",
        flexDirection: "row",
        fontSize: 22,
        fontWeight: 400,
    },
    agreement: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 22,
        fontWeight: 400,
    },
}));

const Footer = (props) => {
    const title = "link.";
    const sub = "Subscribe to get our Newsletter";
    const agreement = "© 2022 Copyright Agreement";

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} className={classes.grid}>
                <Grid item xs={2}>
                    <Typography variant="h2" className={classes.title}>
                        {title}
                    </Typography>
                </Grid>
                <img src={lineSVG} alt="line svg" className={classes.line} />
                <Grid item xs={2}>
                    <Typography variant="h6" className={`${classes.text}`}>
                        Problems
                    </Typography>
                    <Typography variant="h6" className={`${classes.text}`}>
                        Ideas
                    </Typography>
                    <Typography variant="h6" className={`${classes.text}`}>
                        Investments
                    </Typography>
                </Grid>
            </Grid>
            <Typography
                variant="h6"
                className={`${classes.text} ${classes.sub}`}
            >
                {sub}
            </Typography>

            <Grid container spacing={2} className={classes.grid1}>
                <Grid item xs={3}>
                    {/* <TextField id="outlined-basic" label="Your Email" variant="outlined" className= {classes.textField} style={{ borderRadius: 50}}/> */}
                    <label>
                        Name:
                        <input
                            style={{
                                borderRadius: 50,
                                width: 300,
                                height: 30,
                                border: "2px solid #F0C53E",
                                paddingLeft: 15,
                                backgroundColor: "black",
                                color: "white",
                            }}
                            type="text"
                            name="name"
                            placeholder="Your Email"
                        />
                    </label>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        style={{ borderRadius: 50 }}
                    >
                        Subscribe
                    </Button>
                </Grid>
            </Grid>

            <div className={classes.list}>
                <Typography variant="h6" className={`${classes.text}`}>
                    More
                </Typography>
                <img
                    src={smallLineSVG}
                    alt="line svg"
                    className={classes.line}
                />
                <Typography variant="h6" className={`${classes.text}`}>
                    Privacy Policy
                </Typography>
                <img
                    src={smallLineSVG}
                    alt="line svg"
                    className={classes.line}
                />
                <Typography variant="h6" className={`${classes.text}`}>
                    Terms & Conditions
                </Typography>
            </div>
            <Typography
                variant="h6"
                className={`${classes.text} ${classes.agreement}`}
            >
                {agreement}
            </Typography>
        </div>
    );
};

export default Footer;
