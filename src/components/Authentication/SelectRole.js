import React, { useState } from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import Dot from "../../svgs/dot.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import _ from "lodash";
import { useSelector } from "react-redux";
import { API, API_HEADER } from "../../global";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        height: "100vh",
        width: "100vw",
        margin: "auto",
        padding: 0,
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        display: "flex",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 800,
        fontStyle: "normal",
        fontSize: "2.20vw",
        color: "White",
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(4),
    },
    img1: {
        marginTop: theme.spacing(6),
    },
    div1: {
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
    },
    role: {
        width: "250px",
        height: "210px",
        background: "#FFFFFF",
        textTransform: "initial",
        boxShawdow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "28px",
        marginRight: "40px",
    },
    roleSelected: {
        background:
            "linear-gradient(93.45deg, #EE5066 0%, #B25A59 99.99%, #B25A59 100%)",
        color: "white",
    },
    roleNotSelected: {
        background: "white",
        color: "#0B2F8A",
    },
    button: {
        color: "white",
        background:
            "linear-gradient(93.45deg, #EE5066 0%, #B25A59 99.99%, #B25A59 100%)",
        textTransform: "initial",
        width: "12ch",
        fontSize: "18px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        marginTop: theme.spacing(3),
        display: "flex",
        marginTop: "60px",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const SelectRole = () => {
    const classes = useStyles();
    // const [value, setSelectedValue] = React.useState();

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    //     console.log(event.target.value);
    // };
    const [role, selectRole] = useState(null);
    const [normalUser, selectNormalUser] = useState(false);
    const [investor, selectInvestor] = useState(false);
    const [organization, selectorganizations] = useState(false);
    const [mentor, selectMentor] = useState(false);
    const history = useHistory();
    const { auth } = useSelector((state) => state);
    const { jwtToken } = auth;

    const handleClick = (check) => (event) => {
        event.preventDefault();
        selectRole(check);
        if (check === "normaluser") {
            selectNormalUser(true);
            selectInvestor(false);
            selectorganizations(false);
            selectMentor(false);
        } else if (check === "investor") {
            selectNormalUser(false);
            selectInvestor(true);
            selectorganizations(false);
            selectMentor(false);
        } else if (check === "organization") {
            selectNormalUser(false);
            selectInvestor(false);
            selectorganizations(true);
            selectMentor(false);
        } else if (check === "mentor") {
            selectNormalUser(false);
            selectInvestor(false);
            selectorganizations(false);
            selectMentor(true);
        }
        // console.log(role);
    };

    const postRoleAPI = async () => {
        const formData = new FormData();
        formData.append("role", role);
        try {
            // post the role to the API
            const res = await fetch(`${API}/settings/set_get_role`, {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: "Bearer " + jwtToken["access"],
                },
            });
            const resJson = await res.json();
            if (_.isUndefined(resJson.response)) {
                // no matching role
                console.log(resJson.detail);
            } else {
                history.push("/feed");
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleNext = () => {
        console.log(role);
        postRoleAPI();
    };

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <div className={classes.heading}>
                <Typography variant="h4" className={classes.title}>
                    Sign in as
                </Typography>
                <img className={classes.img1} src={Dot} alt="dot" />
            </div>
            <div className={classes.div1}>
                <div>
                    <Button
                        className={`${classes.role} ${
                            normalUser
                                ? classes.roleSelected
                                : classes.roleNotSelected
                        }`}
                        variant="contained"
                        onClick={handleClick("normaluser")}
                        style={{ borderRadius: 10 }}
                    >
                        Normal User
                    </Button>
                </div>
                <div>
                    <Button
                        className={`${classes.role} ${
                            investor
                                ? classes.roleSelected
                                : classes.roleNotSelected
                        }`}
                        variant="contained"
                        onClick={handleClick("investor")}
                        style={{ borderRadius: 10 }}
                    >
                        Investor
                    </Button>
                </div>
                <div>
                    <Button
                        className={`${classes.role} ${
                            organization
                                ? classes.roleSelected
                                : classes.roleNotSelected
                        }`}
                        variant="contained"
                        onClick={handleClick("organization")}
                        style={{ borderRadius: 10 }}
                    >
                        organization
                    </Button>
                </div>
                <div>
                    <Button
                        className={`${classes.role} ${
                            mentor
                                ? classes.roleSelected
                                : classes.roleNotSelected
                        }`}
                        variant="contained"
                        style={{ borderRadius: 10 }}
                        onClick={handleClick("mentor")}
                    >
                        Mentor
                    </Button>
                </div>
            </div>
            <Button
                className={classes.button}
                variant="contained"
                style={{ borderRadius: 10 }}
                endIcon={<ArrowForwardIcon />}
                disabled={_.isNull(role)}
                onClick={handleNext}
            >
                Next
            </Button>
        </div>
    );
};

export default SelectRole;
