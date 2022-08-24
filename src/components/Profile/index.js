import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import globalUseStyles from ".../../GlobalStyle";
import Home from "./Home";
import EditProfile from "./EditProfile";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#F7F8FC",
    },
}));

const Profile = (props) => {
    const classes = useStyles();
    const { path } = useRouteMatch();
    const globalClasses = globalUseStyles();

    // useEffect(() => {
    //     console.log(path);
    // });

    return (
        <div className={`${globalClasses.toolbarMargin} ${classes.root}`}>
            <div className={globalClasses.toolbar}></div>
            {/* <Notifications/> */}
            <Switch>
                <Route path={`${path}/edit`}>
                    <EditProfile />
                </Route>
                <Route exact path={`${path}`}>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};
export default Profile;
