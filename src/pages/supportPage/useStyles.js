import {makeStyles} from "@material-ui/core/styles";

export const supportPageStyles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    system: {
        marginTop: theme.spacing(5),
        height: 'max-content'
    },
    group: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1)
    },
}))