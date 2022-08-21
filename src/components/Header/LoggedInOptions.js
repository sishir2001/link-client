import React from "react";
import {
    Button,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
    },
    nonMenu: {
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    menu: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    menuIcon: {
        background: "white",
    },
}));

const LoggedInOptions = (props) => {
    const classes = useStyles();
    //! history should be only used inside Router of react router dom
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfileIcon = () => {
        try {
            setAnchorEl(null);
            history.push("/profile");
        } catch (e) {
            console.log(e);
        }
    };
    const handleFeedIcon = () => {
        try {
            setAnchorEl(null);
            history.push("/feed");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className={classes.nonMenu}>
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
            </div>
            <div className={classes.menu}>
                {/* menu for smaller devices */}
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon style={{ color: "#ffffff" }} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleFeedIcon}>Feed</MenuItem>
                    <MenuItem onClick={handleClose}>Create Idea</MenuItem>
                    <MenuItem onClick={handleClose}>Notifications</MenuItem>
                    <MenuItem onClick={handleProfileIcon}>Profile</MenuItem>
                </Menu>
            </div>
        </>
    );
};
export default LoggedInOptions;
