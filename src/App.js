import React, { useEffect } from "react";
import {
    Container,
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AuthCheck from "./components/Landing/index";
import Landing from "./components/Landing/Landing";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "Poppins", "Lora"].join(","),
        h1: {
            fontFamily: '"Poppins",Roboto',
            color: "white",
        },
        h2: {
            fontFamily: '"Poppins",Roboto',
            color: "white",
        },
        h3: {
            fontFamily: '"Poppins",Roboto',
        },
        h4: {
            fontFamily: '"Poppins",Roboto',
        },
        h5: {
            fontFamily: '"Poppins",Roboto',
        },
        h6: {
            fontFamily: '"Poppins",Roboto',
        },
        subtitle1: {
            fontFamily: '"Poppins",Roboto',
        },
        subtitle2: {
            fontFamily: '"Poppins",Roboto',
        },
        body1: {
            fontFamily: '"Lora",Roboto',
        },
        body2: {
            fontFamily: '"Lora",Roboto',
        },
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    palette: {
        primary: {
            light: "#1a309e",
            main: "#1028a1",
            dark: "#0922a0",
            contrastText: "#fff",
        },
        secondary: {
            light: "#e55e67",
            main: "#e6535f",
            dark: "#db3f49",
            contrastText: "#fff",
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <AuthCheck />
                        </Route>
                        <Route exact path="/landing">
                            <Landing />
                        </Route>
                        <Route exact path="/feed">
                            <Feed />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
