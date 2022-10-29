import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import dashboardSVG from "../../svgs/dashboard.svg";
import ideasSVG from "../../svgs/ideas.svg";
import investorsSVG from "../../svgs/investors.svg";
import mentorsSVG from "../../svgs/mentors.svg";
import problemStatementSVG from "../../svgs/problemStatement.svg";
import successStoriesSVG from "../../svgs/successStories.svg";
import globalUseStyles from "../../GlobalStyle";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#f4f4f4",
        height: `100vh`,
        color: "black",
        paddingTop: theme.spacing(4),
    },
    heading: {
        fontWeight: theme.typography.fontWeightBold,
    },
    grid: {
        marginTop: theme.spacing(4),
    },
    gridItem: {
        display: "flex",
        marginTop: theme.spacing(2),
        "& img": {
            width: "150px",
            height: "150px",
        },
    },
    gridItemTypo: {
        marginTop: theme.spacing(2),
        "& h6": {
            fontWeight: 600,
        },
    },
}));

const About = ({ scrollRef }) => {
    const classes = useStyles();
    const globalClasses = globalUseStyles();
    const headingText = "What is this platform all about?";

    const gridList = [
        {
            svgSrc: problemStatementSVG,
            alt: "problem statement svg",
            title: "Problem Statements",
            body: "Identify problems from various domains through the problem statements on this platform. ",
        },
        {
            svgSrc: investorsSVG,
            alt: "investors svg",
            title: "Investors",
            body: "All your ideas are open to investments from certified investors who are interested.",
        },
        {
            svgSrc: ideasSVG,
            alt: "ideas svg",
            title: "Ideas",
            body: "Draft up your ingenious ideas and show it to the world so that you can avail further resources to continue with them.",
        },
        {
            svgSrc: successStoriesSVG,
            alt: "successn stories svg",
            title: "Success Stories",
            body: "Get inspired from your fellow entrepreneurs success stories and learn from them.",
        },
        {
            svgSrc: mentorsSVG,
            alt: "mentors svg",
            title: "Mentors",
            body: "Struck somewhere or facing a problem you are lacking expertise in - get access to a large variety of seasoned mentors from multiple domains.",
        },
        {
            svgSrc: dashboardSVG,
            alt: "dashboard svg",
            title: "Integrated Dashboard",
            body: "Track your ideas or your investment portfolio through our integrated dashboard  ",
        },
    ];

    return (
        <div className={`${globalClasses.toolbarMargin} ${classes.root}`}>
            {/* Heading */}
            <div className={globalClasses.toolbar}></div>
            <Typography
                ref={scrollRef}
                variant="h4"
                align="center"
                className={classes.heading}
            >
                {headingText}
            </Typography>

            <Grid container spacing={3} className={classes.grid}>
                {gridList.map((item) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={item.alt}
                            className={classes.gridItem}
                        >
                            <img src={item.svgSrc} alt={item.alt} />
                            <div className={classes.gridItemTypo}>
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography variant="body1">
                                    {item.body}
                                </Typography>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};
export default About;
