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
    typoHead: {
        fontWeight: 600,
        color: "#15186D",
    },
    typoSub: {
        fontWeight: 400,
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
const FormThree = (props) => {
    const classes = useStyles();
    const { own } = props;
    const [formData, setFormData] = useState({
        two_idea_shortdescription: "",
        two_idea_longdescription: "",
        two_idea_solving: "",
        two_idea_highlights: "",
        two_idea_status: "",
        two_idea_methodology: "",
        two_idea_additionals: "",
    });
    const [ideaContentId, setIdeaContentId] = useState(null);
    const [nextDisable, setNextDisable] = useState(true);

    const { filled, setFilled, setPage, endPoint } = props;
    const [ideaStatus, setideaStatus] = useState({
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
    const [failFillImpSnackBar, setFailFillImpSnackBar] = useState(false);

    const fetchFormDetails = async () => {
        try {
            const res = await fetch(
                `${API}${endPoint}/2?ideaContentId=${ideaContentId}`,
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
                    two_idea_longdescription: data.two_idea_longdescription,
                    two_idea_shortdescription: data.two_idea_shortdescription,
                    two_idea_solving: data.two_idea_solving,
                    two_idea_highlights: data.two_idea_highlights,
                    two_idea_status: data.two_idea_status,
                    two_idea_methodology: data.two_idea_methodology,
                    two_idea_additionals: data.two_idea_additionals,
                });
                return true;
            }
            return false;
        } catch (e) {
            console.log("Error Fetching Form Details : ", e);
            setFailFetchSnackBar(true);
            return false;
        }
    };

    useEffect(() => {
        setIdeaContentId(localStorage.getItem("ideaContentId"));
        if (ideaContentId !== null) {
            const check = fetchFormDetails();
            // using promise
            check.then((res, err) => {
                if (!err) {
                    if (res === true) {
                        handleSavedData();
                    }
                }
            });
        }
    }, [ideaContentId]);

    const handleChange = (type, checkBoxType) => (event) => {
        if (type === "two_idea_status") {
            let res = "";
            if (formData.two_idea_status === "") {
                res = formData.one_problem_type + checkBoxType;
            } else {
                res = formData.one_problem_type + "," + checkBoxType;
            }
            setideaStatus({ ...ideaStatus, [checkBoxType]: true });
            setFormData({ ...formData, [type]: res });
        } else {
            setFormData({ ...formData, [type]: event.target.value });
        }
        console.log(formData);
    };

    const saveOnAPI = async () => {
        const formdata = new FormData();
        for (const key in formData) {
            formdata.append(key, formData[key]);
        }
        try {
            const res = await fetch(
                `${API}${endPoint}/2?ideaContentId=${ideaContentId}`,
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
        aux[3] = true;
        setFilled(aux);
        // set next as abled
        setNextDisable(false);
    };

    const onSave = (e) => {
        e.preventDefault();
        // check for the form details if marked important
        if (
            own &&
            (!formData.two_idea_shortdescription ||
                !formData.two_idea_longdescription ||
                !formData.two_idea_highlights ||
                !formData.two_idea_status)
        ) {
            // ! add snackbar of error to fill the forms
            console.log("Fill the important details");
            return;
        }
        // Save the details in api and in that save it to local
        saveOnAPI();
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
        if (snackBarType === "fail_fill_imp") {
            setFailFillImpSnackBar(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the page to next
        setPage(4);
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
                        Short Description of the idea
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="two_idea_shortdescription"
                        value={formData.two_idea_shortdescription}
                        onChange={handleChange(
                            "two_idea_shortdescription",
                            null
                        )}
                        label="idea_shortdescription"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        What is your idea ?{renderAsterik()}
                    </Typography>
                    <Input
                        id="two_idea_longdescription"
                        rows={4}
                        maxRows={4}
                        multiline
                        value={formData.two_idea_longdescription}
                        onChange={handleChange(
                            "two_idea_longdescription",
                            null
                        )}
                        label="idea_longdescription"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        How do you propose to solve the problem, breakdown
                        answer into points
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="two_idea_solving"
                        rows={8}
                        maxRows={8}
                        multiline
                        value={formData.two_idea_solving}
                        onChange={handleChange("two_idea_solving", null)}
                        label="idea_solving"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    required={own}
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typo}>
                        Highlights of the idea {renderAsterik()}
                    </Typography>
                    <Input
                        id="two_idea_highlights"
                        rows={4}
                        maxRows={4}
                        multiline
                        value={formData.two_idea_highlights}
                        onChange={handleChange("two_idea_highlights", null)}
                        label="idea_highlights"
                    />
                </FormControl>
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
                        How does your Idea works/function? (Similar to
                        methodology)
                        {renderAsterik()}
                    </Typography>
                    <Input
                        id="one_problem_domain"
                        value={formData.two_idea_methodology}
                        onChange={handleChange("two_idea_methodology", null)}
                        label="idea_methodology"
                    />
                </FormControl>
                <FormControl
                    color="primary"
                    fullWidth
                    className={classes.formControl}
                >
                    <Typography variant="h6" className={classes.typoHead}>
                        Other additional details you want to add
                    </Typography>
                    <Typography variant="body1" className={classes.typoSub}>
                        (such as outlook of the platform incase of a website,
                        the flow of the idea, tech stack of the problem etx)
                    </Typography>
                    <Input
                        id="two_idea_additionals"
                        rows={4}
                        maxRows={4}
                        multiline
                        value={formData.two_idea_additionals}
                        onChange={handleChange("two_idea_additionals", null)}
                        label="idea_additionals"
                    />
                </FormControl>
                {renderIdeaStatus()}
            </>
        );
    };

    const renderIdeaStatus = () => {
        return (
            <FormControl
                component="fieldset"
                className={classes.formControl}
                required={own}
            >
                <Typography variant="h6" className={classes.typo}>
                    Current status of your idea
                    {renderAsterik()}
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={ideaStatus.concept}
                                onChange={handleChange(
                                    "two_idea_status",
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
                                checked={ideaStatus.design}
                                onChange={handleChange(
                                    "two_idea_status",
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
                                checked={ideaStatus.patented}
                                onChange={handleChange(
                                    "two_idea_status",
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
                                checked={ideaStatus.mvp}
                                onChange={handleChange(
                                    "two_idea_status",
                                    "mvp"
                                )}
                                name="mvp"
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
            {/* // ! error fill imp details */}
            <Snackbar
                open={failFillImpSnackBar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                onClose={handleClose("fail_fill_imp")}
            >
                <Alert onClose={handleClose("fail_fill_imp")} severity="error">
                    Fill all the important details !
                </Alert>
            </Snackbar>
        </div>
    );
};
export default FormThree;
