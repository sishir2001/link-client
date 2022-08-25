import {
    Typography,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Button,
    makeStyles,
    Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { API } from "../../../global";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        // margin: "auto",
        textAlign: "center",
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    typo: {
        fontWeight: 600,
        color: "#15186D",
        paddingBottom: theme.spacing(3),
    },
    radioGroup: {
        paddingBottom: theme.spacing(3),
    },
    btnGroup: {
        display: "flex",
        justifyContent: "flex-end",
    },
    spanTypo: {
        color: "red",
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormOne = (props) => {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    const [nextDisable, setNextDisable] = useState(true);
    const [ideaContentId, setIdeaContentId] = useState(null);

    const [successSnackBar, setSuccessSnackBar] = useState(false);
    const [failSaveSnackBar, setFailSaveSnackBar] = useState(false);
    const [failFetchSnackBar, setFailFetchSnackBar] = useState(false);

    const { filled, setFilled, setOwn, setPage, endPoint } = props;
    const { auth } = useSelector((state) => state);
    const accessToken = auth.jwtToken;
    const apiHeaders = {
        Authorization: "Bearer " + accessToken,
    };

    const fetchFormDetails = async () => {
        // GET request from endpoint
        try {
            const res = await fetch(
                `${API}${endPoint}/0?ideaContentId=${ideaContentId}`,
                {
                    method: "GET",
                    headers: apiHeaders,
                }
            );
            const resJson = await res.json();
            setValue("" + resJson.details.main_problem_type);
        } catch (e) {
            // TODO : add a snackbar saying couldnt restore the state
            console.log("Error Fetching Form Details : ", e);
            setFailFetchSnackBar(true);
        }
    };

    useEffect(() => {
        // getItem from localStorage
        setIdeaContentId(localStorage.getItem("ideaContentId"));
        console.log(ideaContentId);
        if (ideaContentId !== null) {
            fetchFormDetails();
            handledSavedData();
        }
    }, [ideaContentId]);

    // use useEffect to call the saved values from api endpoint or know how to use localstorage
    const saveOnAPI = async () => {
        // create using formdata
        const formdata = new FormData();
        formdata.append("main_problem_type", value);
        try {
            const res = await fetch(`${API}${endPoint}/0`, {
                method: "POST",
                body: formdata,
                headers: apiHeaders,
            });
            const resJson = await res.json();
            if (resJson.response) {
                // * add a snackbar for saving successful
                setSuccessSnackBar(true);
                // TODO : store the idea in localstorage
                localStorage.setItem("ideaContentId", resJson.ideaContentId);
                setIdeaContentId(resJson.ideaContentId);
            } else {
                console.log(resJson);
                setFailSaveSnackBar(true);
            }
            console.log(resJson);
        } catch (e) {
            console.log(e);
            // TODO : add snackbars here for error
            setFailSaveSnackBar(true);
            // Reason : couldnt save the data
        }
    };

    const handledSavedData = () => {
        // TODO : able the next button
        setNextDisable(false);
        // TODO: update the filled array
        let aux = [...filled];
        aux[1] = true;
        setFilled(aux);
    };

    const onSave = (e) => {
        // call the api
        e.preventDefault();
        console.log(ideaContentId);
        if (ideaContentId === null) {
            if (value === "") {
                setError(true);
            } else {
                // TODO : update setOwn to false if value is 2
                if (value === "1") {
                    setOwn(true);
                }

                // TODO: call the api endpoint
                saveOnAPI();
                console.log(localStorage.getItem("ideaContentId"));
            }
        }
        handledSavedData();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the page to next
        setPage(2);
    };

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
        setError(false);
    };

    const handleClose = (snackBarType) => (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        if (snackBarType === "save_success") {
            setSuccessSnackBar(false);
        }
        if (snackBarType === "fail_fetch") {
            setFailFetchSnackBar(false);
        }
        if (snackBarType === "fail_save") {
            setFailSaveSnackBar(false);
        }
    };

    const helperText = "Choose any one option";

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <FormControl
                    required
                    color="primary"
                    error={error}
                    component="fieldset"
                    className={classes.formControl}
                >
                    <Typography variant="h4" className={classes.typo}>
                        What kind of problem are you solving
                        <span className={classes.spanTypo}>*</span>
                    </Typography>
                    <RadioGroup
                        aria-label="Idea Type"
                        name="ideaType"
                        value={value}
                        onChange={handleRadioChange}
                        className={classes.radioGroup}
                    >
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="Problem Statement of my own"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="Organisations Problem Statement"
                        />
                    </RadioGroup>
                    {error ? (
                        <FormHelperText>{helperText}</FormHelperText>
                    ) : null}
                    <div className={classes.btnGroup}>
                        <Button
                            className={classes.button}
                            color="primary"
                            variant="contained"
                            onClick={onSave}
                        >
                            Save
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={nextDisable}
                            className={classes.button}
                        >
                            Next
                        </Button>
                    </div>
                </FormControl>
            </form>
            {/* // * success snackbar */}
            <Snackbar
                open={successSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                onClose={handleClose("save_success")}
            >
                <Alert onClose={handleClose("save_success")} severity="success">
                    Successfully Saved !
                </Alert>
            </Snackbar>
            {/* // ! error save snackbar */}
            <Snackbar
                open={failSaveSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                onClose={handleClose("fail_save")}
            >
                <Alert onClose={handleClose("fail_save")} severity="error">
                    Failed to Save !
                </Alert>
            </Snackbar>
            {/* // ! error fetch snackbar */}
            <Snackbar
                open={failFetchSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                onClose={handleClose("fail_fetch")}
            >
                <Alert onClose={handleClose("fail_fetch")} severity="error">
                    Failed to load the saved data !
                </Alert>
            </Snackbar>
        </div>
    );
};
export default FormOne;
