import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                    e.preventDefault();
                    history.push("/signin");
                }}
                disableElevation
                className={classes.appBarBtn}
            >
                Sign In
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                    e.preventDefault();
                    history.push("/signup");
                }}
                disableElevation
                className={classes.appBarBtn}
            >
                Sign Up
            </Button>
        </>
    );
};
export default LoggedOutOptions;
