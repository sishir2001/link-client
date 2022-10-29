import React from 'react';
import { makeStyles, Button, Typography, Grid} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
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
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.5rem',
        color: '#11142D',
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

                <Typography variant="h4" className={classes.title}>
                    Problem Statement
                </Typography>

                <Grid container spacing={0} justifyContent= "center" className={classes.grid}>
                    <Grid item xs={8} className= {classes.grid1}>
                        
                    </Grid>
                    <Grid item xs={3} className= {classes.grid2}>
                    
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProblemStatement;