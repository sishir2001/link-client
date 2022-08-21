import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
// import Notifications from "./Notification/Notifications";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const Profile = (props) => {
    const classes = useStyles();
    const scrollRef = useRef(null);

    return (
        <div>
            <div className={classes.toolbar}></div>
            {/* <Notifications/> */}
            Profile
        </div>
    );
};
export default Profile;