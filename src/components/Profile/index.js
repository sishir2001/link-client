import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
// import Notifications from "./Notification/Notifications";
import globalUseStyles from "../../GlobalStyle";
import Info from "./Info";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

const Profile = (props) => {
    const classes = useStyles();
    const globalClasses = globalUseStyles();

    return (
        <div className={`${globalClasses.toolbarMargin}`}>
            <div className={globalClasses.toolbar}></div>
            {/* <Notifications/> */}
            <Info />
        </div>
    );
};
export default Profile;
