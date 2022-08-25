import React from 'react';
import { makeStyles, Button, Typography} from "@material-ui/core";
import Dot from "../../svgs/dot.svg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        height: "100vh",
        width: "100vw",
        margin: 'auto',
        padding: 0,
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        display: "flex",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 800,
        fontStyle: "normal",
        fontSize: "2.20vw",
        color: "White",
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(4),
    },
    img1: {
        marginTop: theme.spacing(6),
    },
    div1:{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
    },
    role: {
        width: '250px',
        height: '210px',
        background: '#FFFFFF',
        textTransform: "initial",
        boxShawdow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '24px',
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0B2F8A",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "28px",
        marginRight: "40px",
    },
    button: {
        color: "white",
        background: "linear-gradient(93.45deg, #EE5066 0%, #B25A59 99.99%, #B25A59 100%)",
        textTransform: "initial",
        width: "12ch",
        fontSize: "18px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        marginTop: theme.spacing(3),
        display: "flex",
        marginTop: "60px",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const SelectRole = () => {
    const classes = useStyles();
    // const [value, setSelectedValue] = React.useState();

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    //     console.log(event.target.value);
    // };

    return(
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <div className={classes.heading}>
                <Typography variant="h4" className={classes.title}>
                    Sign in as
                </Typography>
                <img className={classes.img1} src={Dot} alt="dot" />
            </div>
            <div className={classes.div1}>
                <div >
                    <Button
                        className={classes.role}
                        variant="contained"
                        style={{ borderRadius: 10 }}
                    >
                        Normal User
                    </Button>
                </div>
                <div>
                    <Button
                        className={classes.role}
                        variant="contained"
                        style={{ borderRadius: 10 }}
                    >
                        Investor
                    </Button>
                </div>
                <div>
                    <Button
                        className={classes.role}
                        variant="contained"
                        style={{ borderRadius: 10 }}
                    >
                        Organisations
                    </Button>
                </div>
                <div>
                    <Button
                        className={classes.role}
                        variant="contained"
                        style={{ borderRadius: 10 }}
                    >
                        Mentor
                    </Button>
                </div>
            </div>
            <Button
                className={classes.button}
                variant="contained"
                style={{ borderRadius: 10 }}
                endIcon={<ArrowForwardIcon/>}
            >
                Next
            </Button>
        </div>
    )
}

export default SelectRole;