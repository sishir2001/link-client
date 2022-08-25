import {
    Grid,
    makeStyles,
    TextField,
    Typography,
    IconButton,
    Button,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../../global";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    typo: {
        color: "#15186D",
        paddingBottom: theme.spacing(3),
    },
    spanTypo: {
        fontWeight: theme.typography.fontWeightBold,
    },
    btnGroup: {
        display: "flex",
    },
    addBtn: {
        flexGrow: 1,
        margin: theme.spacing(1, 1, 0, 0),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

const FormFour = (props) => {
    const classes = useStyles();
    const [ideaContentId, setIdeaContentId] = useState(null);
    const { auth } = useSelector((state) => state);
    const accessToken = auth.jwtToken;

    const [nextDisable, setNextDisable] = useState(true);
    const { filled, setFilled, setPage, endPoint } = props;

    const [successSnackBar, setSuccessSnackBar] = useState(false);
    const [failSaveSnackBar, setFailSaveSnackBar] = useState(false);
    const [failFetchSnackBar, setFailFetchSnackBar] = useState(false);
    const [failFillImpSnackBar, setFailFillImpSnackBar] = useState(false);

    const apiHeaders = {
        Authorization: "Bearer " + accessToken,
    };

    const [formValues, setFormValues] = useState([
        {
            resource: "",
            link: "",
        },
    ]);

    useEffect(() => {
        setIdeaContentId(localStorage.getItem("ideaContentId"));
    }, [ideaContentId]);

    const handleChange = (idx, e, key) => {
        let newFormValues = [...formValues];
        console.log(key);
        console.log(e.target.value);
        newFormValues[idx][key] = e.target.value;
        setFormValues(newFormValues);
        console.log(newFormValues);
    };

    let addFormFields = () => {
        setFormValues([...formValues, { resource: "", link: "" }]);
    };

    const handleSavedData = () => {
        // update the filled array
        let aux = [...filled];
        aux[4] = true;
        setFilled(aux);
        // set next as abled
        setNextDisable(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the page to next
        setPage(5);
    };

    const saveOnAPI = async () => {
        const formdata = new FormData();
        formdata.append("noOfUrls", formValues.length);
        for (let i = 0; i < formValues.length; i++) {
            formdata.append(
                `three_url_resourcename${i + 1}`,
                formValues[i]["resource"]
            );
            formdata.append(
                `three_url_resourcelink${i + 1}`,
                formValues[i]["link"]
            );
        }

        try {
            const res = await fetch(
                `${API}${endPoint}/3?ideaContentId=${ideaContentId}`,
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

    const onSave = (e) => {
        e.preventDefault();
        // Save the details in api and in that save it to local
        saveOnAPI();
        handleSavedData();
    };

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="h6" className={classes.typo}>
                    <span className={classes.spanTypo}>Idea Links</span> <br />{" "}
                    (Please provide the required URLs for the innovation you
                    have made, please upload all of them into your google drive
                    or GitHub and provide the URLs. More on how)
                </Typography>
                <Typography variant="h6" className={classes.typo}>
                    Add the URL along with the name of the URL you are
                    providing. The URLs can include video pitch url, video url
                    for explanining the idea, image urls, resources urls such as
                    kaggle datasets, word documents, pdf links, website links,
                    and other prototype links such as figma link, autocad
                    models, illustrations, google drive links etc.
                </Typography>
            </div>
            {/* ! input fields */}
            <div>
                <form onSubmit={handleSubmit}>
                    {formValues.map((element, idx) => (
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    name="resource"
                                    variant="outlined"
                                    value={element.resource}
                                    onChange={(e) =>
                                        handleChange(idx, e, "resource")
                                    }
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name="link"
                                    variant="outlined"
                                    fullWidth
                                    value={element.link}
                                    onChange={(e) =>
                                        handleChange(idx, e, "link")
                                    }
                                />
                            </Grid>
                        </Grid>
                    ))}

                    <div className={classes.btnGroup}>
                        <div className={classes.addBtn}>
                            <IconButton
                                onClick={addFormFields}
                                color="primary"
                                aria-label="add field"
                            >
                                <AddCircleIcon />
                            </IconButton>
                        </div>

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
            </div>
        </div>
    );
};
export default FormFour;
