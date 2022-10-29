import React from "react";
import photo from "../../svgs/avatar.svg";
import dot from "../../svgs/maindot.svg";
import { makeStyles, Typography, Link } from "@material-ui/core";
import verticaldots from "../../svgs/verticaldots.svg";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        borderBottomColor: "4px solid #DFE0EB",
        width: "85%",
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "15px",
        filter: "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.25))",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
    },
    header: {
        display: "flex",
    },
    div1: {
        display: "flex",
        flexDirection: "column",
        marginRight: theme.spacing(2),
    },
    div2: {
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing(2),
    },
    avatar: {
        marginRight: theme.spacing(2),
    },
    username: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "1rem",
        color: "black",
        marginBottom: theme.spacing(1),
    },
    role: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "1rem",
        color: "black",
        marginRight: theme.spacing(1),
    },
    time: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "1rem",
        color: "black",
        marginRight: theme.spacing(1),
    },
    dot: {
        marginRight: theme.spacing(1),
    },
    divType: {
        background: "#FFD759",
        padding: theme.spacing(1),
        height: "max-content",
        borderRadius: "12px",
    },
    type: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "1rem",
        height: theme.spacing(2),
        alignItems: "center",
        justifyContent: "center",
    },
    dots: {
        display: "flex",
        justifyContent: "right",
        marginLeft: "auto",
        marginRight: 0,
    },
    div3: {
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        marginTop: theme.spacing(1),
    },
    title: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "1rem",
        fontWeight: "500",
        color: "black",
    },
    description: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "0.9rem",
        fontWeight: "400",
        color: "rgba(0, 0, 0, 0.7)",
    },
    see: {
        fontWeight: "700",
        marginLeft: "auto",
        marginRight: 0,
        marginTop: theme.spacing(1),
    },
    hashtags: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "1rem",
        fontWeight: "400",
        color: "#15186D",
    },
    div4: {
        display: "flex",
        marginTop: theme.spacing(2),
        alignItems: "center",
    },
    like: {
        color: "red",
        marginRight: "5px",
    },
    count: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "1rem",
        fontWeight: "400",
        color: "black",
    },
}));

const Feed = ({
    type,
    title,
    avatar,
    description,
    likesCount,
    username,
    role,
    hashtags,
    time,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.header}>
                    <img src={photo} alt="avatar" className={classes.avatar} />
                    <div className={classes.div1}>
                        <Typography variant="h5" className={classes.usename}>
                            <Link href="#" color="textPrimary">
                                {username}
                            </Link>
                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant="h4" className={classes.role}>
                                {role}
                            </Typography>
                            <img src={dot} alt="dot" className={classes.dot} />
                            {/* <Typography variant="h4" className={classes.time}>
                                {time}
                            </Typography> */}
                        </div>
                    </div>
                    <div className={classes.divType}>
                        <Typography variant="h4" className={classes.type}>
                            {type}
                        </Typography>
                    </div>
                    <img
                        src={verticaldots}
                        alt="dots"
                        className={classes.dots}
                    />
                </div>
                <div className={classes.div3}>
                    <Typography variant="h4" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="h4" className={classes.description}>
                        {description}
                    </Typography>
                </div>
                <Typography
                    variant="h4"
                    className={clsx(classes.description, classes.see)}
                >
                    <Link
                        href="#"
                        className={clsx(classes.description, classes.see)}
                    >
                        See more
                    </Link>
                </Typography>
                <Typography variant="h4" className={classes.hashtags}>
                    {hashtags}
                </Typography>
                <div className={classes.div4}>
                    <FavoriteBorderOutlinedIcon className={classes.like} />
                    <Typography variant="h4" className={classes.count}>
                        {likesCount}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Feed;
