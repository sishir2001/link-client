import {
    FormControl,
    Grid,
    Typography,
    Input,
    Checkbox,
    FormGroup,
    FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        // textAlign: "center",
        width: "100%",
        marginRight: theme.spacing(2),
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
        one_problem_need: "",
    });

    const [probType, setProbType] = useState({
        concept: false,
        design: false,
        patented: false,
        mvp: false,
    });

    const handleChange = (type, checkBoxType) => (event) => {
        console.log(type);
        console.log(type === "one_problem_type");
        if (type === "one_problem_type") {
            let res = formData.one_problem_type + "," + checkBoxType;
            setProbType({ ...probType, [checkBoxType]: true });
            setFormData({ ...formData, [type]: res });
        } else {
            setFormData({ ...formData, [type]: event.target.value });
        }
    };

    useEffect(() => {
        console.log(formData);
    }, [formData.one_problem_type]);

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

    const renderProblemType = () => {
        return (
            <FormControl component="fieldset" className={classes.formControl}>
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
            <Grid
                container
                className={classes.root}
                spacing={2}
                justifyContent="center"
            >
                <Grid item xs={12} lg={6}>
                    {renderForm1()}
                </Grid>
                <Grid item xs={12} lg={6}>
                    {renderForm2()}
                </Grid>
            </Grid>
        </div>
    );
};
export default FormTwo;
