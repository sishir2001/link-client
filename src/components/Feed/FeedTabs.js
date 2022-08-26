import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Snackbar } from "@material-ui/core";

import { feed } from "../Feed/FeedList";
import FeedSection from "../Feed/FeedSection";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API } from "../../global";
import MuiAlert from "@material-ui/lab/Alert";
import _ from "lodash";
import { type } from "@testing-library/user-event/dist/type";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F7F8FC",
        borderBottomColor: "4px solid #DFE0EB",
        width: "100%",
    },
    tabpanel: {
        backgroundColor: "rgba(247, 247, 252, 0.96)",
    },
    tabsRoot: {
        borderBottom: "1px solid #e8e8e8",
    },
    tabsIndicator: {
        backgroundColor: theme.palette.primary.main,
    },
    tabRoot: {
        textTransform: "initial",
        minWidth: 72,
        fontWeight: 600,
        [theme.breakpoints.up("xs")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1rem",
        },
        marginRight: theme.spacing.unit * 4,
        fontFamily: "Poppins",
        "&:hover": {
            color: "black",
            opacity: 1,
        },
        "&$tabSelected": {
            color: "black",
            fontWeight: theme.typography.fontWeightBold,
        },
        "&:focus": {
            color: "black",
        },
    },
    tabSelected: {},
}));

export default function FullWidthTabs({
    setErrorSnackBar,
    setErrorSnackBarMsg,
}) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    // TODO : get accesstoken for fetching the feed
    const { auth } = useSelector((state) => state);
    const { jwtToken } = auth;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const [data, setData] = useState(feed);

    const [allData, setAllData] = useState([]);
    const [psData, setPsData] = useState([]);
    const [ideaData, setIdeaData] = useState([]);
    // const [communityData, setCommunityData] = useState([]);

    const fetchFeed = async () => {
        // fetch from the endpoint
        // const deFactorAPI = "http://0cd6-103-130-89-183.ngrok.io";
        try {
            console.log(jwtToken["access"]);
            const res = await fetch(`${API}/home/generate_feed`, {
                method: "GET",
                Authorization: "Bearer " + jwtToken["access"],
            });
            const resJson = await res.json();
            console.log(resJson);
            if (_.isUndefined(resJson.all)) {
                // ! throw error
            } else {
                // * update states
                let newAllData = resJson.all_cpts;
                newAllData.append(resJson.all);
                setAllData(newAllData);
                setPsData(resJson.ps);
                setIdeaData(resJson.ids);
            }
        } catch (e) {
            console.log("error fetching the feed");
            // TODO : add a snackbar to specify the error
            // setErrorSnackBarMsg(e);
            // setErrorSnackBar(true);
        }
    };

    const renderType = (type) => {
        if (type === 0) {
            return "Success Story";
        } else if (type === 1) {
            return "Problem Statement";
        } else if (type === 2) {
            return "Idea";
        } else if (type === 3) {
            return "Community Post";
        }
    };

    // ! fetch everytime when the tabs component renders
    useEffect(() => {
        // TODO : fetch it from feed endpoint
        fetchFeed();
    });

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    classes={{
                        root: classes.tabsRoot,
                        indicator: classes.tabsIndicator,
                    }}
                >
                    <Tab
                        label="All"
                        {...a11yProps(0)}
                        classes={{
                            root: classes.tabRoot,
                            selected: classes.tabSelected,
                        }}
                    />
                    <Tab
                        label="Problem Statements"
                        {...a11yProps(1)}
                        classes={{
                            root: classes.tabRoot,
                            selected: classes.tabSelected,
                        }}
                    />
                    <Tab
                        label="Ideas"
                        {...a11yProps(2)}
                        classes={{
                            root: classes.tabRoot,
                            selected: classes.tabSelected,
                        }}
                    />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel
                    value={value}
                    index={0}
                    dir={theme.direction}
                    className={classes.tabpanel}
                >
                    {allData.map((item, idx) => {
                        return (
                            <FeedSection
                                key={idx}
                                type={renderType(item.type)}
                                title={item.title}
                                avatar={item.profile_url}
                                description={item.description}
                                username={item.username}
                                likesCount={item.noOfLikes}
                                role={item.user_role}
                                hashtags={item.hashtags}
                                time={item.createdOn}
                            />
                        );
                    })}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {psData.map((item, idx) => {
                        return (
                            <FeedSection
                                key={idx}
                                type={renderType(item.type)}
                                title={item.title}
                                avatar={item.profile_url}
                                description={item.description}
                                username={item.username}
                                likesCount={item.noOfLikes}
                                role={item.user_role}
                                hashtags={item.hashtags}
                                time={item.createdOn}
                            />
                        );
                    })}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {psData.map((item, idx) => {
                        return (
                            <FeedSection
                                key={idx}
                                type={renderType(item.type)}
                                title={item.title}
                                avatar={item.profile_url}
                                description={item.description}
                                username={item.username}
                                likesCount={item.noOfLikes}
                                role={item.user_role}
                                hashtags={item.hashtags}
                                time={item.createdOn}
                            />
                        );
                    })}
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
