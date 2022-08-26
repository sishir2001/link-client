import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {feed} from "../Feed/FeedList";
import FeedSection from "../Feed/FeedSection";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundColor: "#F7F8FC",
    borderBottomColor: "4px solid #DFE0EB",
    width: "100%",
    },
    tabpanel: {
    backgroundColor: "rgba(247, 247, 252, 0.96)"
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
    tabpanel: {
      marginBottom: theme.spacing(5),
    },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [data, setData] = useState(feed);

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
          <Tab label="All" {...a11yProps(0)} 
                    classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                    }}   
            />
          <Tab label="Problem Statements" {...a11yProps(1)} 
            classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                    }}
          />
          <Tab label="Ideas" {...a11yProps(2)} 
            classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                    }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabpanel}>
            {data.map (({id,type,title,avatar, description, likesCount,username,role,hashtags,time}) => {
                    return(
                        <FeedSection key={id} type = {type} title ={title} avatar = {avatar} description ={description} likesCount= {likesCount} username = {username} role = {role} hashtags= {hashtags} time = {time}/>
                    )
            })}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabpanel}>
            {data.map (({id,type,title,avatar, description, likesCount,username,role,hashtags,time}) => {
                return(
                    <FeedSection key={id} type = {type} title ={title} avatar = {avatar} description ={description} likesCount= {likesCount} username = {username} role = {role} hashtags= {hashtags} time = {time}/>
                )
            })}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabpanel}>
            {data.map (({id,type,title,avatar, description, likesCount,username,role,hashtags,time}) => {
                return(
                    <FeedSection key={id} type = {type} title ={title} avatar = {avatar} description ={description} likesCount= {likesCount} username = {username} role = {role} hashtags= {hashtags} time = {time}/>
                )
            })}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}