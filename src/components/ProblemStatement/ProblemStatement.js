import React from 'react';
import { makeStyles, Button, Typography, Grid, Paper} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import profile from "../../svgs/profile.svg";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        // height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
    },
    grid: {
        display: "flex",
    },
    grid1:{
        color: "white",
        // marginRight: theme.spacing(2),
    },
    grid2:{
        color: "white",
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: 'Transparent',
        cursor:'pointer',
        boxShadow: 'none',
        "&:hover": {
            color: "black",
            backgroundColor: 'Transparent',
            opacity: 1,
            boxShadow: 'none',           
        },
        justifyContent: 'right',
        width: theme.spacing(4),
    },
    main:{
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        background: '#F7F7FC',
        borderRadius: '30px',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column'
    },
    heading: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.5rem',
        color: '#11142D',
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1.2rem',
        color: "#15186D",
        marginTop: theme.spacing(2),
    },
    div1: {

    },
    div2: {

    },
    div3: {

    },

}));
const ProblemStatement = () => {
    const classes = useStyles();

    // const problem = 
    return(
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <div className={classes.main}>
                <Button
                    variant="contained"
                    color = 'inherit'
                    className={classes.button}
                    startIcon={<ArrowBackIcon/>}
                >
                    Back
                </Button>

                <Typography variant="h4" className={classes.heading}>
                    Problem Statement
                </Typography>

                <Grid container spacing={0} justifyContent= "center" className={classes.grid}>
                    <Grid item xs={9} className= {classes.grid1}>
                    <Typography variant="h6" className={classes.title}>
                        Title:
                    </Typography>

                    {/* title */}
                    <Typography variant="h4" className={classes.description}>

                    </Typography>

                    <Typography variant="h6" className={classes.title}>
                        Complete Description of the Problem:
                    </Typography>

                    {/* Description */}
                    <Typography variant="h4" className={classes.description}>

                    </Typography>

                    {/* Reason */}
                    <Typography variant="h6" className={classes.title}>
                        Reason for problem Occurence:
                    </Typography>
                    <Typography variant="h4" className={classes.description}>

                    </Typography>

                    {/* instructions */}
                    <Typography variant="h6" className={classes.title}>
                        Instructions
                    </Typography>
                    <Typography variant="h4" className={classes.description}>

                    </Typography>
                    </Grid>
                    <Grid item xs={3} className= {classes.grid2}>
                        <Paper elevation={3} className={classes.div1}>
                            <img src={profile} alt='profile photo'/>
                        </Paper>
                        <Paper elevation={3} className={classes.div2}>

                        </Paper>
                        <Paper elevation={3} className={classes.div3}>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProblemStatement;