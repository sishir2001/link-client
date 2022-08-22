import {
    Grid,
    makeStyles,
    Paper,
    Typography,
    LinearProgress,
    CircularProgress,
} from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    title: {
        color: "#9FA2B4",
        fontWeight: theme.typography.fontWeightBold,
    },
    value: {
        fontWeight: 600,
        fontSize: theme.spacing(4),
    },
}));

// export default DashboardCards;
const DashboardCards = (props) => {
    // const { auth } = useSelector((state) => state);

    const { auth } = useSelector((state) => state);
    // const auth = {
    //     role: null,
    // };

    // investors
    const [investments, setInvestments] = useState(null);
    const [amount, setAmount] = useState(null);
    // mentors
    const [mentorships, setMentorships] = useState(null);
    const [upcomingSessions, setUpcomingSessions] = useState(null);
    // students
    const [ideasRaised, setIdeasRaised] = useState(null);
    const [mentorshipsTaken, setMentorshipsTaken] = useState(null);
    const [investmentsRecieved, setInvestmentsRecieved] = useState(null);
    // organization
    const [problemStatements, setProblemStatements] = useState(null);
    const [ideasRecieved, setIdeasRecieved] = useState(null);
    const [hackathonsConducted, setHackathonsConducted] = useState(null);
    // common
    const [reqRecieved, setReqRecieved] = useState(null);
    const [feedBackPending, setFeedBackPending] = useState(null);
    // fetch the required details according to the role of the logged in user
    // useEffect(() => {});

    const renderCardList = () => {
        if (auth.role === "investor") {
            return [
                {
                    title: "Investments",
                    value: investments,
                },
                {
                    title: "Amount",
                    value: amount === null ? null : `₹${amount}`,
                },
                {
                    title: "Requests Recieved",
                    value: reqRecieved,
                },
                {
                    title: "Feedback's Pending",
                    value: feedBackPending,
                },
            ];
        } else if (auth.role === "mentor") {
            return [
                {
                    title: "Mentorships",
                    value: mentorships,
                },
                {
                    title: "Upcoming Sessions",
                    value: upcomingSessions,
                },
                {
                    title: "Requests Recieved",
                    value: reqRecieved,
                },
                {
                    title: "Feedback's Pending",
                    value: feedBackPending,
                },
            ];
        } else if (auth.role === "user") {
            return [
                {
                    title: "Ideas Raised",
                    value: ideasRaised,
                },
                {
                    title: "Mentorships Taken",
                    value: mentorshipsTaken,
                },
                {
                    title: "Investments Recieved",
                    value: investmentsRecieved,
                },
                {
                    title: "Feedback's Pending",
                    value: feedBackPending,
                },
            ];
        }

        return [
            {
                title: "Problem Statements",
                value: problemStatements,
            },
            {
                title: "Ideas Recieved",
                value: ideasRecieved,
            },
            {
                title: "Hackathons Conducted",
                value: hackathonsConducted,
            },
            {
                title: "Feedback's Pending",
                value: feedBackPending,
            },
        ];
    };
    useEffect(() => {
        // fetch the details from endpoint according to the role
        setInvestments(30);
        setAmount(20000);
        setReqRecieved(3);
        setFeedBackPending(10);
    });
    const renderValues = (value) => {
        if (value !== null) {
            return <Typography variant="h3">{value}</Typography>;
        }
    };

    const renderProgress = (value) => {
        if (value === null) {
            return <LinearProgress />;
        }
    };

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                {renderCardList().map((item) => (
                    <Grid item xs={12} md={6} lg={3}>
                        {renderProgress(item.value)}
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.title}>
                                {item.title}
                            </Typography>
                            {renderValues(item.value)}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default DashboardCards;
