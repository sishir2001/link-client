import React from 'react';
import { makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainroot: {
        padding: theme.spacing(10),
        paddingTop:0,
        paddingBottom: 0,
        display:"none",
        alignItems: "center",
        position: 'absolute',
        width:'45vw',
        left: 0, 
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto', 
    },
    maindiv: {
        background:"white",
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'Center',
        justifyContent: 'center',
        borderRadius: '24px',
    },
    titleterm: {
        color: "#15186D",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "1.5rem",
        marginBottom: theme.spacing(2),
    },
    para: {
        textAlign: "justify",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: "0.9rem",
    },
}));

const Terms = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainroot}>
            <div className={classes.main}>
                <Typography variant="h4" className={classes.title}>
                    Terms and Conditions
                </Typography>
                <Typography variant="p" className={classes.para}>
                PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.
                This Terms of Service Agreement the "Agreement" governs your use of this website, link.com the "Link", Link ("Business Name") offer of products for purchase on this Website, or your purchase of products available on this Website. This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. Link reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. Link will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions. Link encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with Link for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website. If you would like to print this Agreement, please click the print button on your browser toolbar.
                </Typography>
            </div>
        </div>
    )
}

export default Terms;