import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import globalUseStyles from "../../GlobalStyle";
import ideaBulbSVG from "../../svgs/ideaBulb.svg";
import { Pagination } from "antd";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
    leftHeader: {
        flexGrow: 1,
    },
}));

const IdeaForm = (props) => {
    const globalClasses = globalUseStyles();
    const classes = useStyles();

    const renderIdeaFormHeader = () => {
        return (
            <div className={classes.root}>
                <div className={classes.leftHeader}>
                    <img src={ideaBulbSVG} alt="idea bulb logo" />
                    <Typography variant="h4">
                        Idea Submission<span>.</span>
                    </Typography>
                </div>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        );
    };

    return (
        <div>
            <div className={globalClasses.toolbar}></div>
            <div>{renderIdeaFormHeader()}</div>
        </div>
    );
};
export default IdeaForm;
