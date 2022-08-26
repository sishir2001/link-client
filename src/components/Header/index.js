import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import LoggedOutOptions from "./LoggedOutOptions";
import LoggedInOptions from "./LoggedInOptions";
import globalUseStyles from "../../GlobalStyle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#1b28a8",
    },
    left: {
        flexGrow: 1,
    },
    title: {
        fontFamily: "Lekton",
        fontSize: theme.spacing(6),
        fontWeight: 500,
        color: "white",
    },
    appBarBtn: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: 40,
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const globalClasses = globalUseStyles();
    const location = useLocation();

    const { jwtToken } = useSelector((state) => state.auth);
    useEffect(() => {
        console.log(location.pathname);
    });

    const renderRightHeaderOptions = () => {
        if (location.pathname === "/signin" || location.pathname === "/signup")
            return;
        if (!_.isEmpty(jwtToken)) {
            // loggedIn
            return <LoggedInOptions />;
        } else {
            return <LoggedOutOptions />;
        }
    };
    return (
        <div>
            <AppBar className={classes.root} elevation={0}>
                <Toolbar className={globalClasses.toolbarMargin}>
                    <div className={classes.left}>
                        <Typography variant="h4" className={classes.title}>
                            link.
                        </Typography>
                    </div>
                    {renderRightHeaderOptions()}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
