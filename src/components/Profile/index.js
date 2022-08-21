import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import Notifications from "./Notification/Notifications"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

const Profile = (props) => {
    const classes = useStyles();
    const scrollRef = useRef(null);

    return (
        <div>
            <Notifications/>
        </div>
    );
};
export default Profile;
