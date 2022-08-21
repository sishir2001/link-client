import React from "react";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
    },
}));

const LoggedInOptions = (props) => {
    const classes = useStyles();
    //! history should be only used inside Router of react router dom
    const history = useHistory();

    const handleProfileIcon = () => {
        try {
            history.push("/profile");
        } catch (e) {
            console.log(e);
        }
    };
    const handleFeedIcon = () => {
        try {
            history.push("/feed");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Button
                variant="text"
                color="inherit"
                disableElevation
                onClick={handleFeedIcon}
            >
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
                onClick={handleProfileIcon}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
        </>
    );
};
export default LoggedInOptions;
