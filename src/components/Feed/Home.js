import React from 'react';
import { makeStyles, Grid, Paper, InputBase, Typography, Link} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Tabs from "../Feed/FeedTabs.js"

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
    height: "50vh",
    color: "black",
    borderRadius: "30px",
    display: "flex",
    padding: theme.spacing(3),
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
   view: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    color: '#15186D',
   },
}));
const Home = () => {
    const classes = useStyles();
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

                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        
    );
};

export default Home;