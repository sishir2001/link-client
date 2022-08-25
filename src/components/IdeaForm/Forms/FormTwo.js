import {
    FormControl,
    Grid,
    Typography,
    Input,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button,
    Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { API } from "../../../global";
import { useSelector } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        // textAlign: "center",
        width: "100%",
        marginRight: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    formControl: {
        margin: theme.spacing(3),
    },
    typo: {
        fontWeight: 600,
        color: "#15186D",
        paddingBottom: theme.spacing(3),
    },
    spanTypo: {
        color: "red",
    },
    btnGroup: {
        display: "flex",
        justifyContent: "flex-end",
    },
}));
const FormTwo = (props) => {
    const classes = useStyles();
    const { own } = props;
    const [formData, setFormData] = useState({
        one_problem_title: "",
        one_problem_shortdescription: "",
        one_problem_theme: "",
        one_problem_longdescription: "",
        one_problem_type: "",
        one_problem_domain: "",
        one_problem_occurence: "",
        one_problem_beginning: "",
        one_problem_need: "",
    });
    const [ideaContentId, setIdeaContentId] = useState(null);
    const [nextDisable, setNextDisable] = useState(true);

    const { filled, setFilled, setPage, endPoint } = props;
    const [probType, setProbType] = useState({
        concept: false,
        design: false,
        patented: false,
        mvp: false,
    });

    const { auth } = useSelector((state) => state);
    const accessToken = auth.jwtToken;
    const apiHeaders = {
        Authorization: "Bearer " + accessToken,
    };

    const [successSnackBar, setSuccessSnackBar] = useState(false);
    const [failSaveSnackBar, setFailSaveSnackBar] = useState(false);
    const [failFetchSnackBar, setFailFetchSnackBar] = useState(false);

    const fetchFormDetails = async () => {
        try {
            const res = await fetch(
                `${API}${endPoint}/1?ideaContentId=${ideaContentId}`,
                {
                    method: "GET",
                    headers: apiHeaders,
                }
            );
            const resJson = await res.json();
            const { data } = resJson;
            console.log(resJson);
            if (data !== undefined) {
                setFormData({
                    ...formData,
                    one_problem_title: data.one_problem_title,
                    one_problem_shortdescription:
                        data.one_problem_shortdescription,
                    one_problem_longdescription:
                        data.one_problem_longdescription,
                    one_problem_theme: data.one_problem_theme,
                    one_problem_type: data.one_problem_type,
                    one_problem_domain: data.one_problem_domain,
                    one_problem_beginning: data.one_problem_beginning,
                    one_problem_need: data.one_problem_need,
                });
            }
        } catch (e) {
            console.log("Error Fetching Form Details : ", e);
            setFailFetchSnackBar(true);
        }
    };

    useEffect(() => {
        setIdeaContentId(localStorage.getItem("ideaContentId"));
        if (ideaContentId !== null) {
            console.log(ideaContentId);
            fetchFormDetails();
            handleSavedData();
        }
    }, [ideaContentId]);

    const handleChange = (type, checkBoxType) => (event) => {
        if (type === "one_problem_type") {
            let res = "";
            if (formData.one_problem_type === "") {
                res = formData.one_problem_type + checkBoxType;
            }
            res = formData.one_problem_type + "," + checkBoxType;
            setProbType({ ...probType, [checkBoxType]: true });
            setFormData({ ...formData, [type]: res });
        } else {
            setFormData({ ...formData, [type]: event.target.value });
        }
    };

    const saveOnAPI = async () => {
        const formdata = new FormData();
        for (const key in formData) {
            formdata.append(key, formData[key]);
        }
        // formData.append("one_problem_title",)
        // : "",
        // one_problem_shortdescription: "",
        // one_problem_theme: "",
        // one_problem_longdescription: "",
        // one_problem_type: "",
        // one_problem_domain: "",
        // one_problem_need: "",
        // one_problem_occurence: "",
        // one_problem_beginning: "",
        try {
            const res = await fetch(
                `${API}${endPoint}/1?ideaContentId=${ideaContentId}`,
                {
                    method: "POST",
                    body: formdata,
                    headers: apiHeaders,
                }
            );
            const resJson = await res.json();
            console.log(resJson);
            if (resJson.response) {
                // * add a snackbar for saving successful
                setSuccessSnackBar(true);
            } else {
                // ! add snackbar for error saving
                setFailSaveSnackBar(true);
            }
        } catch (e) {
            console.log("error in post api ", e);
            setFailSaveSnackBar(true);
        }
    };
    const handleSavedData = () => {
        // update the filled array
        let aux = [...filled];
        aux[2] = true;
        setFilled(aux);
        // set next as abled
        setNextDisable(false);
    };

    const onSave = (e) => {
        e.preventDefault();
        // check for the form details if marked important
        if (
            own &&
            (!formData.one_problem_title ||
                !formData.one_problem_shortdescription ||
                !formData.one_problem_longdescription ||
                !formData.one_problem_type ||
                !formData.one_problem_domain)
        ) {
            // ! add snackbar of error to fill the forms
            console.log("Fill the important details");
        }
        if (ideaContentId === null) {
            // Save the details in api and in that save it to local
            saveOnAPI();
        }
        handleSavedData();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the page to next
        setPage(3);
    };

    const renderForm1 = () => {
        return (
            <>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Title of the problem statement
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="one_problem_title"
                        value={formData.one_problem_title}
                        onChange={handleChange("one_problem_title", null)}
                        label="prob_title"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Short Description of Problem Statement
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="one_problem_shortdescription"
                        rows={4}
                        maxRows={4}
                        multiline
                        value={formData.one_problem_shortdescription}
                        onChange={handleChange(
                            "one_problem_shortdescription",
                            null
                        )}
                        label="prob_shordescription"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Complete Description of the Problem
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="one_problem_longdescription"
                        rows={8}
                        maxRows={8}
                        multiline
                        value={formData.one_problem_longdescription}
                        onChange={handleChange(
                            "one_problem_longdescription",
                            null
                        )}
                        label="prob_completedescription"
                    />
                </FormControl>
                {renderProblemType()}
            </>
        );
    };

    const renderForm2 = () => {
        return (
            <>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Domain problem belongs to
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="one_problem_domain"
                        value={formData.one_problem_domain}
                        onChange={handleChange("one_problem_domain", null)}
                        label="prob_domain"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Background of the problem
                    </Typography>
                    <Input
                        id="one_problem_theme"
                        rows={4}
                        maxRows={4}
                        multiline
                        value={formData.one_problem_theme}
                        onChange={handleChange("one_problem_theme", null)}
                        label="prob_theme"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        When did the problem begin
                    </Typography>
                    <Input
                        id="one_problem_domain"
                        value={formData.one_problem_beginning}
                        onChange={handleChange("one_problem_beginning", null)}
                        label="prob_begining"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Is there a need in the market to solve the problem ?{" "}
                        <br />
                        Describe how crucial it is ?
                    </Typography>
                    <Input
                        id="one_problem_need"
                        rows={4}
                        maxRows={4}
                        multiline
                        value={formData.one_problem_need}
                        onChange={handleChange("one_problem_need", null)}
                        label="prob_occurence"
                    />
                </FormControl>
            </>
        );
    };

    const renderProblemType = () => {
        return (
            <FormControl
                component="fieldset"
                className={classes.formControl}
                required={own}
            >
                <Typography variant="h6" className={classes.typo}>
                    Type of Problem
                    {renderAsterik()}
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={probType.concept}
                                onChange={handleChange(
                                    "one_problem_type",
                                    "concept"
                                )}
                                name="concept"
                            />
                        }
                        label="Concept"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={probType.design}
                                onChange={handleChange(
                                    "one_problem_type",
                                    "design"
                                )}
                                name="design"
                            />
                        }
                        label="Design"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={probType.patented}
                                onChange={handleChange(
                                    "one_problem_type",
                                    "patented"
                                )}
                                name="patented"
                            />
                        }
                        label="Patented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={probType.mvp}
                                onChange={handleChange(
                                    "one_problem_type",
                                    "mvp"
                                )}
                                name="patented"
                            />
                        }
                        label="Minimum Viable Product"
                    />
                </FormGroup>
            </FormControl>
        );
    };

    const renderAsterik = () => {
        if (own) {
            return <span className={classes.spanTypo}>*</span>;
        }
    };

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    className={classes.root}
                    spacing={10}
                    justifyContent="center"
                >
                    <Grid item xs={12} lg={6}>
                        {renderForm1()}
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {renderForm2()}
                    </Grid>
                </Grid>
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
export default FormTwo;
