import React from "react";
import { List } from "antd";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
    },
    headerTitle: {
        flexGrow: 1,
        fontWeight: 600,
        marginLeft: theme.spacing(3),
    },
    list: {
        display: "flex",
        width: "100%",
    },
    listMessage: {
        flexGrow: 1,
    },
    spanId: {
        color: theme.palette.primary.main,
        textDecoration: "underline",
    },
}));

const TimeInvestetedList = (props) => {
    const classes = useStyles();
    const dataList = [
        {
            message: "Invested in XY with",
            id: "6788",
            amount: "20000",
        },
        {
            message: "Invested in XY with",
            id: "6788",
            amount: "20000",
        },
        {
            message: "Invested in XY with",
            id: "6788",
            amount: "20000",
        },
        {
            message: "Invested in XY with",
            id: "6788",
            amount: "20000",
        },
    ];

    const { auth } = useSelector((state) => state);

    const renderHeader = () => {
        let headerTitle = "";
        if (auth.role === "investor") {
            headerTitle = "My Investments";
        } else if (auth.role === "mentor") {
            headerTitle = "Mentorships";
        } else if (auth.role === "user") {
            headerTitle = "My Ideas";
        } else {
            headerTitle = "My Problem Statements";
        }
        return (
            <div className={classes.header}>
                <Typography variant="h5" className={classes.headerTitle}>
                    {headerTitle}
                </Typography>
                <Button color="primary">View All</Button>
            </div>
        );
    };
    const renderListBody = (item) => {
        return (
            <div className={classes.list}>
                <Typography variant="body1" className={classes.listMessage}>
                    {item.message}{" "}
                    <span className={classes.spanId}>
                        {" "}
                        Idea {`ID:${item.id}`}
                    </span>
                </Typography>
                <Typography variant="body2">{`₹${item.amount}`}</Typography>
            </div>
        );
    };

    return (
        <List
            size="large"
            header={renderHeader()}
            dataSource={dataList}
            renderItem={(item) => <List.Item>{renderListBody(item)}</List.Item>}
        />
    );
};
export default TimeInvestetedList;
