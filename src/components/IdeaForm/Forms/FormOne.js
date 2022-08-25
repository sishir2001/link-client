import {
    Typography,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Button,
    makeStyles,
} from "@material-ui/core";

import React from "react";
import { useState } from "react";

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
}));

const FormOne = (props) => {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    const [nextDisable, setNextDisable] = useState(true);
    const { filled, setFilled } = props;

    // use useEffect to call the saved values from api endpoint or know how to use localstorage
    const onSave = (e) => {
        // call the api
        e.preventDefault();
        if (value === "") {
            setError(true);
        } else {
            // TODO: update the filled array
            let aux = [...filled];
            aux[1] = true;
            setFilled(aux);
            // able the next button
            setNextDisable(false);
            // TODO: call the api endpoint
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the page to next
    };

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
        setError(false);
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
        </div>
    );
};
export default FormOne;
