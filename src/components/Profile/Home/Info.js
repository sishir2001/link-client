import {
    Avatar,
    Grid,
    makeStyles,
    Typography,
    Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import globalUseStyles from "../../../GlobalStyle";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
    },
    avatar: {
        [theme.breakpoints.up("xs")]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
        [theme.breakpoints.up("md")]: {
            width: theme.spacing(17),
            height: theme.spacing(17),
        },
        [theme.breakpoints.up("lg")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        background: "#3D3D3D",
    },
    infoRoot: {
        display: "flex",
        [theme.breakpoints.up("xs")]: {
            justifyContent: "flex-start",
        },
        [theme.breakpoints.up("lg")]: {
            justifyContent: "center",
        },
    },
    infoTypography: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(5),
    },
    infoName: {
        fontWeight: 600,
        [theme.breakpoints.up("xs")]: {
            fontSize: 20,
        },
        [theme.breakpoints.up("md")]: {
            fontSize: 30,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 40,
        },
    },
    infoRole: {
        fontWeight: theme.typography.fontWeightMedium,
        [theme.breakpoints.up("xs")]: {
            fontSize: 10,
        },
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 25,
        },
    },
    infoValidity: {
        [theme.breakpoints.up("xs")]: {
            display: "inherit",
        },
        [theme.breakpoints.up("lg")]: {
            display: "flex",
        },
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    infoTime: {
        fontWeight: 600,
        background: "#B6F5D7",
        [theme.breakpoints.up("xs")]: {
            padding: "1px",
        },
        [theme.breakpoints.up("lg")]: {
            padding: theme.spacing(1),
        },
        borderRadius: 14,
    },
    infoRating: {
        padding: theme.spacing(1),
    },
}));

const Info = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { auth } = useSelector((state) => state);
    const [rating, setRating] = useState(4);
    const [time, setTime] = useState(20);
    const globalClasses = globalUseStyles();

    useEffect(() => {
        // ! fetch rating and investments from the endpoint
        console.log(auth);
    }, []);

    const handleEditProfile = () => {
        console.log("Edit Profile clicked");
        history.push("/profile/edit");
    };

    const renderInfoTime = () => {
        if (auth.role === "investor") {
            return `${time}+ Investments`;
        } else if (auth.role === "mentor") {
            return `${time}+ Sessions`;
        }
    };

    const renderInfoValidity = () => {
        if (auth.role === "investor" || auth.role === "mentor") {
            return (
                <div className={classes.infoValidity}>
                    <Typography variant="body1" className={classes.infoTime}>
                        {renderInfoTime()}
                    </Typography>
                    <Rating
                        className={classes.infoRating}
                        name="read-only"
                        value={rating}
                        readOnly
                    />
                </div>
            );
        }
    };

    return (
        <div className={`${classes.root}`}>
            {/* <Grid container justifyContent="center">
                <Grid item xs={12}> */}
            <div className={classes.infoRoot}>
                <Avatar className={classes.avatar} alt="profile_pic" />
                <div className={classes.infoTypography}>
                    <Typography variant="h4" className={classes.infoName}>
                        {auth.name}
                    </Typography>
                    <Typography variant="h5" className={classes.infoRole}>
                        {/* {`${auth.role[0].toUpperCase()}${auth.role.substring(
                            1
                        )}`} */}
                    </Typography>
                    {renderInfoValidity()}
                </div>
                <div className={classes.infoTypography}>
                    <Button onClick={handleEditProfile} variant="outlined">
                        Edit Profile
                    </Button>
                </div>
            </div>
            {/* </Grid>
            </Grid> */}
        </div>
    );
};
export default Info;
