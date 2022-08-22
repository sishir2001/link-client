import React, {useState} from "react";
import PasswordChecklist from "react-password-checklist"
import clsx from 'clsx';
import { makeStyles, Grid, Typography, TextField, Button, Link} from "@material-ui/core";
import { Input,  InputLabel, IconButton, InputAdornment, FormControl} from "@material-ui/core";
import {Visibility,VisibilityOff} from '@material-ui/icons';
import Img from "../../svgs/image.svg";
import Dot from "../../svgs/dot.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
        height: "100vh",
        display:"flex",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
        alignItems: "center",
    },
    toolbar: theme.mixins.toolbar,
    grid: {
        padding:0,
        alignItems:"center",
    },
    grid1:{
        paddingRight: 0,
    },
    grid2:{
        background: "white",
        borderRadius: theme.spacing(2),
        // height:"35vw",
    },
    heading:{
        display:"flex",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: 800,
        fontStyle: "normal",
        fontSize: "2.25vw",
        color: "#0B2F8A",
        display: "flex",
        justifyContent: "center",
        paddingTop:theme.spacing(4),
    },
    img1: {
        marginTop:theme.spacing(6),
    },
    form: {
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
        paddingTop: theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '40ch',
        fontSize: '1vw',
        '& .MuiInput-underline:after': {
            borderBottomColor: '20px solid rgba(21, 24, 109, 0.6)',
          },
        '& label.Mui-focused': {
            color: 'rgba(21, 24, 109, 0.6)',
            fontSize: '1.25vw',
        },     
    },
    button: {
        color: "white",
        background: "linear-gradient(105.5deg, #EE5060 19.57%, #B25A59 78.85%)",
        textTransform: "initial",
        width: '15ch',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        marginTop: theme.spacing(3),
    },
    last: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(3),
    },
    text:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1vw",
        color: "rgba(21, 24, 109, 0.6)",
        marginRight: theme.spacing(1),
    },
    signin: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '1vw',
    },

}));

const Signup = (props) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    const [values, setValues] = React.useState({
        password: '',
        passwordAgain: '',
        showPassword: false,
        showPasswordAgain: false
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value);
    };
    const handleChangeAgain = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPasswordAgain(event.target.value);
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleClickShowPasswordAgain = () => {
        setValues({ ...values, showPasswordAgain: !values.showPasswordAgain });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        
        <div className={classes.root}>
            <div className={classes.toolbar}></div>
            <Grid container spacing={3} justifyContent="center" className={classes.grid}>
                <Grid item xs={5} className= {classes.grid1}>
                    <img src={Img} alt = "Illustration"/>
                </Grid>
                <Grid item xs={4} className= {classes.grid2}>
                    <div className={classes.heading}>
                        <Typography variant="h4" className={classes.title}>
                            Register
                        </Typography>
                        <img className={classes.img1} src={Dot} alt='dot'/>
                    </div>
                    <form noValidate autoComplete="off" className={classes.form}>
                        <TextField id="standard-basic" label="Username" className={clsx(classes.margin, classes.textField)}/>
                        <TextField id="standard-basic" label="Email" className={clsx(classes.margin, classes.textField)}/>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password') }
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPasswordAgain ? 'text' : 'password'}
                                value={values.passwordAgain}
                                onChange={handleChangeAgain('passwordAgain')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility" 
                                    onClick={handleClickShowPasswordAgain}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPasswordAgain ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <PasswordChecklist
                            rules={["minLength","specialChar","number","capital","match"]}
                            minLength={5}
                            value={password}
                            valueAgain={passwordAgain}
                            onChange={(isValid) => {}}
                        />
                        <Button className={classes.button} variant="contained" style={{ borderRadius: 50}}>
                            Sign Up
                        </Button>
                    </form>
                    <div className={classes.last}>
                        <Typography variant="h6" className={classes.text}>
                            Already have an account?
                        </Typography>
                        <Link href="/" onClick={preventDefault} className={classes.signin}>
                            Sign in
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default Signup;
