import React from "react";
import Info from "./Info";
import ProfileTabs from "./Tabs";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Dashboard from "./Dashboard";
import About from "./About";
import { useEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    tabs: {
        marginTop: theme.spacing(3),
    },
}));

const Home = (props) => {
    const { path } = useRouteMatch();
    const classes = useStyles();
    const [tabNo, setTabNo] = useState(1);
    useEffect(() => {
        console.log(path);
    });

    const handleDashboard = () => {
        setTabNo(1);
    };
    const handleAbout = () => {
        setTabNo(2);
    };

    const renderBody = () => {
        if (tabNo === 1) {
            return <Dashboard />;
        } else if (tabNo === 2) {
            return <About />;
        }
    };

    return (
        <div>
            <Info />
            {/* Add Tabs for nested routing */}
            <div className={classes.tabs}>
                <ProfileTabs
                    handleDashboard={handleDashboard}
                    handleAbout={handleAbout}
                />
            </div>
            <div className={classes.tabs}>{renderBody()}</div>
        </div>
    );
};
export default Home;
