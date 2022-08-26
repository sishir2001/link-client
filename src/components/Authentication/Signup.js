import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import clsx from "clsx";
import {
    makeStyles,
    Grid,
    Typography,
    Button,
    Link,
    Checkbox,
    Modal,
    Backdrop,
    Fade,
    Input,
    InputLabel,
    IconButton,
    InputAdornment,
    FormControl,
    Snackbar,
    CircularProgress,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import Img from "../../svgs/image.svg";
import Dot from "../../svgs/dot.svg";
import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// import Terms from "./Terms";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
        height: "100vh",
        display: "flex",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        alignItems: "center",
        position: "relative",
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
        // height:"35vw",
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
        paddingTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
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
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
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
    text1: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "0.95vw",
        color: "rgba(21, 24, 109, 0.6)",
        marginRight: theme.spacing(1),
    },
    text2: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "0.95vw",
    },
    terms: {
        display: "flex",
        alignItems: "center",
    },
    bufferColor: {
        colorPrimary: "white",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: "24px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    maindiv: {
        background: "white",
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "Center",
        justifyContent: "center",
        borderRadius: "24px",
        width: "45vw",
    },
    titleterm: {
        color: "#15186D",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "1.5rem",
        marginBottom: theme.spacing(2),
    },
    para: {
        textAlign: "justify",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "0.9rem",
    },
}));

const Signup = (props) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const [checked, setChecked] = useState(false);
    const [successSnackBar, setSuccessSnackBar] = useState(false);
    const [errorSnackBar, setErrorSnackBar] = useState(false);
    const [successMsgSnackBar, setSuccessMsgSnackBar] = useState("");
    const [errorMsgSnackBar, setErrorMsgSnackBar] = useState("");
    const [signUpBuffer, setSignUpBuffer] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleClose = (snackBarType) => (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        if (snackBarType === "successSnackBar") {
            setSuccessMsgSnackBar("");
            setSuccessSnackBar(false);
        }
        if (snackBarType === "errorSnackBar") {
            setErrorMsgSnackBar("");
            setErrorSnackBar(false);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        passwordAgain: "",
        showPassword: false,
        showPasswordAgain: false,
    });
    const [checks, setchecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,
    });
    const handleForm = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleClickShowPasswordAgain = () => {
        setValues({ ...values, showPasswordAgain: !values.showPasswordAgain });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const history = useHistory();

    const handleOnKeyUp = (event) => {
        const { value } = event.target;
        const capsLetterCheck = /[A-Z]/.test(value);
        const numberCheck = /[0-9]/.test(value);
        const pwdLengthCheck = value.length > 5;
        const specialCharCheck = /[!@#$%^&*]/.test(value);
        setchecks({
            capsLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck,
        });
    };

    const saveFormData = async (event) => {
        console.log("username", values.username);
        console.log("password", values.password);
        console.log("email", values.email);

        const formdata = new FormData();
        formdata.append("username", values.username);
        formdata.append("email", values.email);
        formdata.append("password", values.password);
        if (
            checks.capsLetterCheck === true &&
            checks.numberCheck === true &&
            checks.pwdLengthCheck === true &&
            checks.specialCharCheck === true
        ) {
            if (values.password === values.passwordAgain) {
                const response = await fetch(
                    "https://theprojectlink.herokuapp.com/auth/signup",
                    {
                        method: "POST",
                        body: formdata,
                    }
                );
                if (response.ok) {
                    const res_json = await response.json();
                    console.log(res_json);
                    if (!res_json.response) {
                        throw new Error(`Request failed: ${res_json.message}`);
                    } else {
                        // alert("");
                        setSuccessMsgSnackBar(
                            "Your registration was successfully submitted!"
                        );
                        setSuccessSnackBar(true);
                    }
                } else {
                    // alert(``);
                    setErrorMsgSnackBar(`Error ${response.status}`);
                    setErrorSnackBar(true);
                }
            } else {
                // alert("");
                setErrorMsgSnackBar(
                    "password and confirm password do not match"
                );
                setErrorSnackBar(true);
            }
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            setSignUpBuffer(true);
            await saveFormData();
            setSignUpBuffer(false);
        } catch (e) {
            // alert(``);
            setSignUpBuffer(false);
            setErrorMsgSnackBar(`Registration failed! ${e.message}`);
            setErrorSnackBar(true);
        }
    };

    const renderLoading = () => {
        if (signUpBuffer) {
            return (
                <CircularProgress
                    color="primary"
                    className={classes.bufferColor}
                />
            );
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                className={classes.grid}
            >
                <Grid item xs={5} className={classes.grid1}>
                    <img src={Img} alt="Illustration" />
                </Grid>
                <Grid item xs={4} className={classes.grid2}>
                    {/* <LinearProgress color="primary" /> */}
                    <div className={classes.heading}>
                        <Typography variant="h4" className={classes.title}>
                            Register
                        </Typography>
                        <img className={classes.img1} src={Dot} alt="dot" />
                    </div>
                    <form
                        onSubmit={onSubmit}
                        autoComplete="off"
                        className={classes.form}
                    >
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel required>Username</InputLabel>
                            <Input
                                id="username"
                                type="text"
                                value={values.username}
                                onChange={handleForm("username")}
                                required
                            />
                        </FormControl>
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel required>Email</InputLabel>
                            <Input
                                id="email"
                                type="email"
                                value={values.email}
                                onChange={handleForm("email")}
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
                                id="password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleForm("password")}
                                onKeyUp={handleOnKeyUp}
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
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel
                                htmlFor="standard-adornment-password"
                                required
                            >
                                Confirm Password
                            </InputLabel>
                            <Input
                                required
                                id="confirmpassword"
                                type={
                                    values.showPasswordAgain
                                        ? "text"
                                        : "password"
                                }
                                value={values.passwordAgain}
                                onChange={handleForm("passwordAgain")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={
                                                handleClickShowPasswordAgain
                                            }
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {values.showPasswordAgain ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <PasswordChecklist
                            rules={[
                                "minLength",
                                "specialChar",
                                "number",
                                "capital",
                                "match",
                            ]}
                            minLength={6}
                            value={values.password}
                            valueAgain={values.passwordAgain}
                            onChange={(isValid) => {}}
                        />
                        <div className={classes.terms}>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{
                                    "aria-label": "secondary checkbox",
                                }}
                                required
                            />
                            <Typography variant="h6" className={classes.text1}>
                                I agree to the
                            </Typography>
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOpen();
                                }}
                                className={classes.text2}
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            style={{ borderRadius: 50 }}
                        >
                            Sign Up
                            {renderLoading()}
                        </Button>
                    </form>
                    <div className={classes.last}>
                        <Typography variant="h6" className={classes.text}>
                            Already have an account?
                        </Typography>
                        <Link
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/signin");
                            }}
                            className={classes.signin}
                        >
                            Sign in
                        </Link>
                    </div>
                </Grid>
            </Grid>

            {/* // * success snackbar */}
            <Snackbar
                open={successSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={handleClose("successSnackBar")}
            >
                <Alert
                    onClose={handleClose("successSnackBar")}
                    severity="success"
                >
                    {successMsgSnackBar}
                </Alert>
            </Snackbar>
            {/* // ! error snackbar */}
            <Snackbar
                open={errorSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={handleClose("errorSnackBar")}
            >
                <Alert onClose={handleClose("errorSnackBar")} severity="error">
                    {errorMsgSnackBar}
                </Alert>
            </Snackbar>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.maindiv}>
                            <h2
                                id="transition-modal-title"
                                className={classes.titleterm}
                            >
                                Terms and Conditions
                            </h2>
                            <p
                                id="transition-modal-description"
                                className={classes.para}
                            >
                                PLEASE READ THIS TERMS OF SERVICE AGREEMENT
                                CAREFULLY. BY USING THIS WEBSITE OR ORDERING
                                PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND
                                BY ALL OF THE TERMS AND CONDITIONS OF THIS
                                AGREEMENT. This Terms of Service Agreement the
                                "Agreement" governs your use of this website,
                                link.com the "Link", Link ("Business Name")
                                offer of products for purchase on this Website,
                                or your purchase of products available on this
                                Website. This Agreement includes, and
                                incorporates by this reference, the policies and
                                guidelines referenced below. Link reserves the
                                right to change or revise the terms and
                                conditions of this Agreement at any time by
                                posting any changes or a revised Agreement on
                                this Website. Link will alert you that changes
                                or revisions have been made by indicating on the
                                top of this Agreement the date it was last
                                revised. The changed or revised Agreement will
                                be effective immediately after it is posted on
                                this Website. Your use of the Website following
                                the posting any such changes or of a revised
                                Agreement will constitute your acceptance of any
                                such changes or revisions. Link encourages you
                                to review this Agreement whenever you visit the
                                Website to make sure that you understand the
                                terms and conditions governing use of the
                                Website. This Agreement does not alter in any
                                way the terms or conditions of any other written
                                agreement you may have with Link for other
                                products or services. If you do not agree to
                                this Agreement (including any referenced
                                policies or guidelines), please immediately
                                terminate your use of the Website. If you would
                                like to print this Agreement, please click the
                                print button on your browser toolbar.
                            </p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
export default Signup;
