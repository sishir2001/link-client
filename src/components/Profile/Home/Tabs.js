import React from "react";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up("xs")]: {
            fontSize: theme.spacing(2),
        },
        [theme.breakpoints.up("md")]: {
            fontSize: theme.spacing(3),
        },
        marginRight: theme.spacing.unit * 4,
        fontFamily: "Poppins",
        "&:hover": {
            color: theme.palette.primary.main,
            opacity: 1,
        },
        "&$tabSelected": {
            color: theme.palette.primary.dark,
            fontWeight: theme.typography.fontWeightBold,
        },
        "&:focus": {
            color: theme.palette.primary.main,
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
}));

function ProfileTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    const { handleAbout, handleDashboard } = props;

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                classes={{
                    root: classes.tabsRoot,
                    indicator: classes.tabsIndicator,
                }}
            >
                <Tab
                    disableRipple
                    onClick={handleDashboard}
                    classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                    }}
                    label="Dashboard"
                />
                <Tab
                    disableRipple
                    onClick={handleAbout}
                    classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                    }}
                    label="About"
                />
                {/* <Tab
                    disableRipple
                    classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                    }}
                    label="Tab 3"
                /> */}
            </Tabs>
            {/* <Typography className={classes.typography}>
                Ant Design UI powered by Material-UI
            </Typography> */}
        </div>
    );
}

export default ProfileTabs;
