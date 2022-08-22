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
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        [theme.breakpoints.down("xs")]: {
            width: theme.spacing(14),
            height: theme.spacing(14),
        },
        background: "#3D3D3D",
    },
    infoRoot: {
        display: "flex",
        justifyContent: "center",
    },
    infoTypography: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(5),
    },
    infoName: {
        fontWeight: 600,
    },
    infoRole: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    infoValidity: {
        display: "flex",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    infoTime: {
        fontWeight: 600,
        background: "#B6F5D7",
        padding: theme.spacing(1),
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
    const [investments, setInvestments] = useState(20);
    const globalClasses = globalUseStyles();

    useEffect(() => {
        // ! fetch rating and investments from the endpoint
    }, []);

    const handleEditProfile = () => {
        console.log("Edit Profile clicked");
        // history.push("/profile/edit");
    };

    return (
        <div className={`${globalClasses.toolbarMargin} ${classes.root}`}>
            {/* <Grid container justifyContent="center">
                <Grid item xs={12}> */}
            <div className={classes.infoRoot}>
                <Avatar className={classes.avatar} alt="profile_pic" />
                <div className={classes.infoTypography}>
                    <Typography variant="h4" className={classes.infoName}>
                        {auth.name}
                    </Typography>
                    <Typography variant="h5" className={classes.infoRole}>
                        {auth.role}
                    </Typography>
                    <div className={classes.infoValidity}>
                        <Typography
                            variant="body1"
                            className={classes.infoTime}
                        >
                            {investments}+ Investments
                        </Typography>
                        <Rating
                            className={classes.infoRating}
                            name="read-only"
                            value={rating}
                            readOnly
                        />
                    </div>
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
