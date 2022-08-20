import React from "react";
import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#1b28a8",
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        fontFamily: "Lekton",
        fontSize: theme.spacing(6),
        fontWeight: 500,
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
    const { isLoggedIn } = useSelector((state) => state.auth);

    const renderLoggedInHeaderOptions = () => {
        return (
            <>
                <Button variant="text" color="inherit" disableElevation>
                    Feed
                </Button>
                <IconButton
                    // aria-label="account of current user"
                    // aria-controls="menu-appbar"
                    // aria-haspopup="true"
                    className={classes.menuButton}
                    color="inherit"
                >
                    <AddCircleIcon />
                </IconButton>
                <IconButton
                    // aria-label="account of current user"
                    // aria-controls="menu-appbar"
                    // aria-haspopup="true"
                    className={classes.menuButton}
                    color="inherit"
                >
                    <NotificationsIcon />
                </IconButton>
                <IconButton
                    // aria-label="account of current user"
                    // aria-controls="menu-appbar"
                    // aria-haspopup="true"
                    className={classes.menuButton}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </>
        );
    };
    const renderLoggedOutHeaderOptions = () => {
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
    const renderRightHeaderOptions = () => {
        if (isLoggedIn) {
            // loggedIn
            return renderLoggedInHeaderOptions();
        } else {
            return renderLoggedOutHeaderOptions();
        }
    };
    return (
        <div>
            <AppBar className={classes.root} elevation={0}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        link.
                    </Typography>
                    {renderRightHeaderOptions()}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
