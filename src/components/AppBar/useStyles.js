import {makeStyles} from "@material-ui/core/styles";

export const appBarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center"
    },
}));