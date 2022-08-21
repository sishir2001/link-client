import { makeStyles, Typography, AppBar, Tabs, Tab } from "@material-ui/core";
import React from "react";
import Active from "./Active";
import Popular from "./Popular";
import Newest from "./Newest";
import globalUseStyles from "../../../GlobalStyle";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#ECECEC",
        height: `100vh`,
        // color: "black",
        paddingTop: theme.spacing(4),
        // paddingLeft: theme.spacing(4),
        // paddingRight: theme.spacing(4),
    },
    heading: {
        fontWeight: theme.typography.fontWeightBold,
        marginTop: theme.spacing(1),
        color: "#0A093D",
    },
    appBarDiv: {
        marginTop: theme.spacing(3),
    },
    appbar: {
        background: "#e0e5ed",
        borderRadius: "14px",
        marginLeft: theme.spacing(50),
        marginRight: theme.spacing(50),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    tab: {
        borderRadius: "14px",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    tabActive: {
        background: " #217BF4",
        boxShadow: "0px 7px 22px -6px rgba(0, 72, 168, 0.34)",
        color: "white",
    },
}));

const Members = (props) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const globalClasses = globalUseStyles();
    const headingText = "Our Active Members";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderContent = () => {
        if (value === 0) {
            return <Newest />;
        } else if (value === 1) {
            return <Popular />;
        }
        return <Active />;
    };

    const a11yProps = (index) => {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`,
        };
    };

    return (
        <div className={`${globalClasses.toolbarMargin} ${classes.root}`}>
            <div className={globalClasses.toolbar}></div>
            <Typography variant="h4" align="center" className={classes.heading}>
                {headingText}
            </Typography>
            {/* Tabs */}
            <div
                // position="static"
                // color="default"
                // elevation={0}
                className={classes.appBarDiv}
            >
                <Tabs
                    className={classes.appbar}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    // variant="fullWidth"
                    centered
                    aria-label="full width tabs example"
                >
                    <Tab
                        className={`${classes.tab} }`}
                        label="Newest"
                        {...a11yProps(0)}
                    />
                    <Tab
                        className={classes.tab}
                        label="Popular"
                        {...a11yProps(1)}
                    />
                    <Tab
                        className={classes.tab}
                        label="Active"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </div>
            {/* Content */}
            <div>{renderContent()}</div>
        </div>
    );
};
export default Members;
