import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBarBtn: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: 40,
    },
}));

const LoggedOutOptions = (props) => {
    const classes = useStyles();
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.appBarBtn}
            >
                Sign In
            </Button>
            <Button
                variant="contained"
                color="secondary"
                disableElevation
                className={classes.appBarBtn}
            >
                Sign Up
            </Button>
        </>
    );
};
export default LoggedOutOptions;
