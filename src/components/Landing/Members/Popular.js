import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
    Avatar,
    Paper,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@material-ui/core/";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        marginTop: theme.spacing(10),
    },
    paper: {
        // padding: theme.spacing(4),
        // textAlign: "center",
        // // display: "flex",
        // // justifyContent: "center",
        // flexDirection: "column",
        color: theme.palette.text.secondary,
        borderRadius: "14px",
    },
    paperName: {
        fontWeight: "600",
        color: "#0A093D",
        marginTop: theme.spacing(1),
    },
    avatar: {
        // marginTop: theme.spacing(5),
        // marginLeft: theme.spacing(10),
        // width: theme.spacing(14),
        // // // height: theme.spacing(14),
        // // filter: "drop-shadow(0px -10px 50px rgba(17, 50, 101, 0.08))",
        // borderRadius: "50%",
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
}));

const Popular = (props) => {
    const classes = useStyles();
    const users = [
        {
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/60/Warikoo_profile.jpg",
            name: "Ankur Warikoo",
            twitterId: "@warikoo",
        },
        {
            imgSrc: "",
            name: "Aman Guptha",
            twitterId: "@aman",
        },
        {
            imgSrc: "",
            name: "Namitha Thapar",
            twitterId: "@namitha",
        },
        {
            imgSrc: "",
            name: "Anupam Mittal",
            twitterId: "@anupam",
        },
    ];
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {users.map((user, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.paper}>
                                <CardMedia
                                    image={user.imgSrc}
                                    className={classes.avatar}
                                />
                                <CardContent>
                                    {/* <Avatar
                                        src={user.imgSrc}
                                        className={classes.avatar}
                                    /> */}
                                    <Typography
                                        variant="h5"
                                        className={classes.paperName}
                                        align="center"
                                    >
                                        {user.name}
                                    </Typography>
                                    <Typography
                                        align="center"
                                        variant="body1"
                                        // className={classes.paperName}
                                    >
                                        {user.twitterId}
                                    </Typography>
                                </CardContent>
                            </Card>
                            {/* <Paper
                                className={classes.paper}
                                elevation={1}
                            ></Paper> */}
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};
export default Popular;
