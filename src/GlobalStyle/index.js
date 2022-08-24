import { makeStyles } from "@material-ui/core/styles";

const globalUseStyles = makeStyles((theme) => ({
    toolbarMargin: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
    },
    toolbar: theme.mixins.toolbar,
}));

export default globalUseStyles;
