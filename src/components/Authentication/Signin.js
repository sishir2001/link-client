import React from "react";
import clsx from "clsx";
import { makeStyles, Grid, Typography, Button, Link } from "@material-ui/core";
import {
    Input,
    InputLabel,
    IconButton,
    InputAdornment,
    FormControl,
    Snackbar,
    CircularProgress,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import _ from "lodash";
import Img from "../../svgs/image.svg";
import Dot from "../../svgs/dot.svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { signedIn } from "../../actions/auth";
import { useDispatch } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import { clearErrorMessage } from "../../actions/auth";
import { useEffect } from "react";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
        paddingTop: 0,
        paddingBottom: 0,
        height: "100vh",
        display: "flex",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        alignItems: "center",
    },
    toolbar: theme.mixins.toolbar,
    grid: {
        padding: 0,
        alignItems: "center",
    },
    grid1: {
        paddingRight: 0,
    },
    grid2: {
        background: "white",
        borderRadius: theme.spacing(2),
        height: "30vw",
    },
    heading: {
        display: "flex",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 800,
        fontStyle: "normal",
        fontSize: "2.25vw",
        color: "#0B2F8A",
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(4),
    },
    img1: {
        marginTop: theme.spacing(6),
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "40ch",
        fontSize: "1vw",
        "& .MuiInput-underline:after": {
            borderBottomColor: "20px solid rgba(21, 24, 109, 0.6)",
        },
        "& label.Mui-focused": {
            color: "rgba(21, 24, 109, 0.6)",
            fontSize: "1.25vw",
        },
    },
    button: {
        color: "white",
        background: "linear-gradient(105.5deg, #EE5060 19.57%, #B25A59 78.85%)",
        textTransform: "initial",
        width: "15ch",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        marginTop: theme.spacing(3),
    },
    last: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(3),
    },
    text: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1vw",
        color: "rgba(21, 24, 109, 0.6)",
        marginRight: theme.spacing(1),
    },
    signin: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1vw",
    },
}));

const Signin = (props) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    const [values, setValues] = React.useState({
        username: "",
        password: "",
        showPassword: false,
    });
    const handleUsername = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClose = (snackBarType) => (event, reason) => {
        dispatch(clearErrorMessage());
        // if (reason === "clickaway") {
        //     return;
        // }
        // if (snackBarType === "errorSnackBar") {
        //     // set errorMessage as empty
        //     // setErrorMsgSnackBar("");
        //     // setErrorSnackBar(false);
        //     dispatch(clearErrorMessage());
        // }
    };

    const history = useHistory();
    const { auth } = useSelector((state) => state);
    const { signInError, jwtToken } = auth;
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // check for empty values
        if (_.isEmpty(values.username) || _.isEmpty(values.password)) {
            // show error in filling details
            console.log("Empty fields");
        } else {
            console.log("Calling signedIn action creator");
            dispatch(
                signedIn({
                    username: values.username,
                    password: values.password,
                    history: history,
                })
            );
        }
    };

    // useEffect(() => {
    //     console.log(jwtToken);
    //     if (!_.isEmpty(jwtToken)) {
    //         history.push("/");
    //     }
    // }, jwtToken);

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <Grid
                container
                spacing={1}
                justifyContent="center"
                className={classes.grid}
            >
                <Grid item xs={5} className={classes.grid1}>
                    <img src={Img} alt="Illustration" />
                </Grid>
                <Grid item xs={4} className={classes.grid2}>
                    <div className={classes.heading}>
                        <Typography variant="h4" className={classes.title}>
                            Get Started
                        </Typography>
                        <img className={classes.img1} src={Dot} alt="dot" />
                    </div>
                    <form
                        autoComplete="off"
                        className={classes.form}
                        onSubmit={handleSubmit}
                    >
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel required>Username</InputLabel>
                            <Input
                                id="username"
                                value={values.username}
                                onChange={handleUsername("username")}
                                required
                            />
                        </FormControl>
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel
                                htmlFor="standard-adornment-password"
                                required
                            >
                                Password
                            </InputLabel>
                            <Input
                                required
                                id="standard-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {values.showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            style={{ borderRadius: 50 }}
                        >
                            Signin
                        </Button>
                    </form>
                    <div className={classes.last}>
                        <Typography variant="h6" className={classes.text}>
                            New User?
                        </Typography>
                        <Link
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/signup");
                            }}
                            className={classes.signin}
                        >
                            Sign Up
                        </Link>
                    </div>
                </Grid>
            </Grid>
            {/* // ! error snackbar */}
            <Snackbar
                open={!_.isEmpty(signInError)}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={(e) => {
                    e.preventDefault();
                    dispatch(clearErrorMessage());
                }}
            >
                <Alert
                    onClose={(e) => {
                        e.preventDefault();
                        dispatch(clearErrorMessage());
                    }}
                    severity="error"
                >
                    {signInError}
                </Alert>
            </Snackbar>
        </div>
    );
};
export default Signin;
