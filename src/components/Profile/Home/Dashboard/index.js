import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import DashboardCards from "./DashboardCards";
import TimeInvestetedList from "./TimeInvestedList";

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));
const Dashboard = (props) => {
    const classes = useStyles();
    return (
        <div>
            <DashboardCards />
            <div className={classes.gridRoot}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Paper elevation={1} className={classes.paper}>
                            <TimeInvestetedList />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Paper elevation={1} className={classes.paper}></Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default Dashboard;
