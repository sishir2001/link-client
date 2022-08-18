import { createTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";

function App() {
    const theme = createTheme({
        typography: {
            // fontFamily: ["Roboto", "Poppins", "Lora"].join(","),
            h1: {
                fontFamily: '"Poppins"',
            },
            h2: {
                fontFamily: '"Poppins"',
            },
            h3: {
                fontFamily: '"Poppins"',
            },
            h4: {
                fontFamily: '"Poppins"',
            },
            h5: {
                fontFamily: '"Poppins"',
            },
            h6: {
                fontFamily: '"Poppins"',
            },
            subtitle1: {
                fontFamily: '"Poppins"',
            },
            subtitle2: {
                fontFamily: '"Poppins"',
            },
            body1: {
                fontFamily: '"Lora"',
            },
            body2: {
                fontFamily: '"Lora"',
            },
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
        },
        palette: {
            primary: {
                light: "#342bd6",
                main: "#322ABF",
                dark: "#2720a1",
                contrastText: "#fff",
            },
            secondary: {
                light: "#c96463",
                main: "#B25A59",
                dark: "#964c4b",
                contrastText: "#fff",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    );
}

export default App;
