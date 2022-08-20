import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import bulbSVG from "../../svgs/Bulb.svg";
import playSVG from "../../svgs/play.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        // background:
        //     "linear-gradient(180deg, #322ABF 0%, rgba(26, 22, 88, 0) 100%)",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        height: `100vh`,
        color: "white",
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    toolbar: theme.mixins.toolbar,
    typo: {
        marginTop: theme.spacing(3),
    },
    typoHomeFoo: {
        marginTop: theme.spacing(8),
        marginLeft: -theme.spacing(4),
    },
    motto: {
        fontFamily: "Lora",
    },
    playSVG: {
        marginLeft: -60,
    },
    homeFooter: {
        display: "flex",
    },
}));

const Home = ({ scrollRef }) => {
    const classes = useStyles();
    const motto = "Link between your journey from empathizing to implementing.";
    const wish = "Join us today to make your dream into a reality...";

    const handleKnowMore = () => {
        console.log("Clicked on know more");
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <div className={classes.toolbar}></div>
            <Grid container spacing={4}>
                {/* Text */}
                <Grid item xs={7}>
                    <div className={classes.toolbar}></div>
                    <Typography variant="h2" className={classes.typo}>
                        {motto}
                    </Typography>
                    <Typography
                        variant="h6"
                        className={`${classes.typo} ${classes.motto}`}
                    >
                        {wish}
                    </Typography>

                    {/* Home Footer */}
                    <Button
                        onClick={handleKnowMore}
                        disableElevation
                        disableRipple
                    >
                        <img
                            src={playSVG}
                            className={classes.playSVG}
                            alt="play svg"
                        />
                    </Button>
                </Grid>
                {/* Bulb Image */}
                <Grid item xs={5}>
                    <img src={bulbSVG} alt="idea svg" />
                </Grid>
            </Grid>
        </div>
    );
};
export default Home;
