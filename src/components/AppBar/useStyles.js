import {makeStyles} from "@material-ui/core/styles";

export const appBarStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3)
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
        padding: theme.spacing(1,0)
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