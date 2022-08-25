import { makeStyles, Typography, Divider } from "@material-ui/core";
import React from "react";
import globalUseStyles from "../../GlobalStyle";
import ideaBulbSVG from "../../svgs/ideaBulb.svg";
import { Pagination } from "antd";
import { useState } from "react";
import FormOne from "./Forms/FormOne";
import FormTwo from "./Forms/FormTwo";
import FormThree from "./Forms/FormThree";
import FormFour from "./Forms/FormFour";
import FormFive from "./Forms/FormFive";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    pagination: {
        borderColor: theme.palette.primary.main,
    },
    HeaderRoot: {
        display: "flex",
        alignItems: "center",
    },
    leftHeader: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    HeaderTitle: {
        paddingLeft: theme.spacing(1),
        fontWeight: 800,
    },
    TitleSpan: {
        color: "#EE5066",
    },
}));

const IdeaForm = (props) => {
    const globalClasses = globalUseStyles();
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const onChange = (pageNo) => {
        setPage(pageNo);
    };

    const formBodyList = [
        <FormOne />,
        <FormTwo />,
        <FormThree />,
        <FormFour />,
        <FormFive />,
    ];
    const renderIdeaFormHeader = () => {
        return (
            <div className={classes.HeaderRoot}>
                <div className={classes.leftHeader}>
                    <img src={ideaBulbSVG} alt="idea bulb logo" />
                    <Typography variant="h4" className={classes.HeaderTitle}>
                        Idea Submission
                        <span className={classes.TitleSpan}>.</span>
                    </Typography>
                </div>
                <Pagination
                    size="large"
                    onChange={onChange}
                    defaultCurrent={1}
                    className={classes.pagination}
                    total={50}
                />
            </div>
        );
    };

    const renderFormBody = () => {
        return formBodyList[page - 1];
    };

    return (
        <div className={`${globalClasses.toolbarMargin} ${classes.root}`}>
            <div className={globalClasses.toolbar}></div>
            <div>{renderIdeaFormHeader()}</div>
            <Divider className={classes.divider} />
            {renderFormBody()}
        </div>
    );
};
export default IdeaForm;
