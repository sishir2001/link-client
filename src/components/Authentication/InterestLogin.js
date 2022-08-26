import React from "react";
import { makeStyles, Grid, Typography, Button} from "@material-ui/core";
import Img from "../../svgs/image.svg";
import Dot from "../../svgs/dot.svg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
        height: "100vh",
        display: "flex",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        alignItems: "center",
    },
    toolbar: theme.mixins.toolbar,
    grid: {
        padding: 0,
        alignItems: "center",
    },
    grid1: {
        paddingRight: 0,
    },
    grid2: {
        background: "white",
        borderRadius: theme.spacing(2),
    },
    heading: {
        display: "flex",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 800,
        fontStyle: "normal",
        fontSize: "2.25vw",
        color: "#0B2F8A",
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(4),
    },
    img1: {
        marginTop: theme.spacing(6),
    },
    button: {
        color: "white",
        background: "linear-gradient(93.45deg, #EE5066 0%, #B25A59 99.99%, #B25A59 100%)",
        textTransform: "initial",
        width: "12ch",
        fontSize: "18px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        marginTop: theme.spacing(3),
        display: "flex",
        marginTop: "60px",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const Interests = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <Grid
                container
                spacing={0}
                justifyContent="center"
                className={classes.grid}
            >
                <Grid item xs={5} className={classes.grid1}>
                    <img src={Img} alt="Illustration" />
                </Grid>
                <Grid item xs={7} className={classes.grid2}>
                    <div className={classes.heading}>
                        <Typography variant="h4" className={classes.title}>
                            Your Interests.
                        </Typography>
                        <img className={classes.img1} src={Dot} alt="dot" />
                    </div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        style={{ borderRadius: 10 }}
                        endIcon={<ArrowForwardIcon/>}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </div>

    )
}

export default Interests;