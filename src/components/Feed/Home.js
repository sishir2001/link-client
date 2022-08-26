import React from 'react';
import { makeStyles, Grid, Paper, InputBase, Typography, Link, Box} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating'
import SearchIcon from '@material-ui/icons/Search';
import Tabs from "../Feed/FeedTabs.js"
import profile from "../../svgs/profile.svg";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundImage:
            "linear-gradient(to top, #051937, #002158, #002779, #002a9a, #3028b8);",
    },
    main:{
        marginLeft: theme.spacing(5),
        marginRight:theme.spacing(5),
    },
    grid: {
        padding: 0,
    },
    grid1: {
        backgroundColor: "#F7F7FC",
        height: "80vh",
        marginRight: theme.spacing(5),
   },
   grid2:{
        margin: 0,  
        padding: 0,
    },
   search:{
    display: 'flex',
    alignItems: 'center',
    borderRadius: "15px",
    height: "50px",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: theme.spacing(6),
   },
   input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "#656464",
    fontSize: "2rem",
  },
   mentors: {
    backgroundColor: "#F7F7FC",
    height: "55vh",
    color: "black",
    borderRadius: "30px",
    display: "flex",
    flexDirection: 'column',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(5),
   },
   investors: {
    backgroundColor: "#F7F7FC",
    height: "55vh",
    color: "black",
    borderRadius: "30px",
    display: "flex",
    flexDirection: 'column',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
   },
   header:{
    display: 'flex',
    justifyContent: 'center',
   },
   title:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    color: '#15186D',
    marginRight: "120px",
   },
   title1:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    color: '#15186D',
    marginRight: "80px",
   },
   view: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    color: '#15186D',
   },
   div1:{
    backgroundColor: 'white',
    marginTop: theme.spacing(2),
    borderRadius: '24px',
    padding:theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
   },
   img1: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
   },
   name: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '1.2rem',
    color: '#15186D',
   },
   hashtags:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '0.9rem',
   }
}));
const Home = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(5);
    return(
        <div className= {classes.root}>
            <div className={classes.toolbar}></div>
            <div className={classes.main}>
                <Grid container spacing={0} justifyContent= "center" className={classes.grid}>
                    <Grid item xs={8} className= {classes.grid1}>
                        <Tabs/>
                    </Grid>
                    <Grid item xs={3} className= {classes.grid2}>
                        <Paper component="form" className={classes.search}>
                            <SearchIcon className={classes.iconButton}/>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Ideas, Problem..."
                            inputProps={{ 'aria-label': 'Search Ideas, Problem...' }}
                        />
                        </Paper>
                        {/* mentors */}
                        <div className={classes.mentors}>
                            <div className={classes.header}>
                                <Typography variant="h5" className={classes.title}>
                                    Expert Mentors
                                </Typography>
                                <Typography variant="h5" className={classes.view}>
                                    <Link href="#" color='textPrimary'>
                                        View All
                                    </Link>
                                </Typography>
                            </div>
                            <Paper elevation={2} className={classes.div1}>
                                <img src={profile} alt='profile photo' className={classes.img1}/>
                                <div>
                                    <Typography variant="h5" className={classes.name}>
                                        James Bond
                                    </Typography>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <Typography variant="h5" className={classes.hashtags}>
                                        #Innovation
                                    </Typography>
                                </div>
                            </Paper>
                            <Paper elevation={2} className={classes.div1}>
                                <img src={profile} alt='profile photo' className={classes.img1}/>
                                <div>
                                    <Typography variant="h5" className={classes.name}>
                                        James Bond
                                    </Typography>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <Typography variant="h5" className={classes.hashtags}>
                                        #Innovation
                                    </Typography>
                                </div>
                            </Paper>  
                            <Paper elevation={2} className={classes.div1}>
                                <img src={profile} alt='profile photo' className={classes.img1}/>
                                <div>
                                    <Typography variant="h5" className={classes.name}>
                                        James Bond
                                    </Typography>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <Typography variant="h5" className={classes.hashtags}>
                                        #Innovation
                                    </Typography>
                                </div>
                            </Paper>
                        </div>

                        {/* investors */}
                        <div className={classes.investors}>
                            <div className={classes.header}>
                                <Typography variant="h5" className={classes.title1}>
                                    Potential Investors
                                </Typography>
                                <Typography variant="h5" className={classes.view}>
                                    <Link href="#" color='textPrimary'>
                                        View All
                                    </Link>
                                </Typography>
                            </div>
                            <Paper elevation={2} className={classes.div1}>
                                <img src={profile} alt='profile photo' className={classes.img1}/>
                                <div>
                                    <Typography variant="h5" className={classes.name}>
                                        James Bond
                                    </Typography>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <Typography variant="h5" className={classes.hashtags}>
                                        #Innovation
                                    </Typography>
                                </div>
                            </Paper>
                            <Paper elevation={2} className={classes.div1}>
                                <img src={profile} alt='profile photo' className={classes.img1}/>
                                <div>
                                    <Typography variant="h5" className={classes.name}>
                                        James Bond
                                    </Typography>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <Typography variant="h5" className={classes.hashtags}>
                                        #Innovation
                                    </Typography>
                                </div>
                            </Paper>  
                            <Paper elevation={2} className={classes.div1}>
                                <img src={profile} alt='profile photo' className={classes.img1}/>
                                <div>
                                    <Typography variant="h5" className={classes.name}>
                                        James Bond
                                    </Typography>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <Typography variant="h5" className={classes.hashtags}>
                                        #Innovation
                                    </Typography>
                                </div>
                            </Paper>
                        </div>

                    </Grid>
                </Grid>
            </div>
        </div>
        
    );
};

export default Home;