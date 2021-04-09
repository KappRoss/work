import {makeStyles} from "@material-ui/core/styles";

export const welcomePageStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "black",
        zIndex: 10000,
        padding: 0,
        margin: 0,
        maxWidth: "100%"
    },
    mainWelcomeBlock: {

    },
    continueText: {
        display: 'block',
        animation: '$pulse 1.5s ease-in-out 0.5s infinite',
        cursor: 'pointer'
    },
    welcomeText: {
        color: theme.palette.primary.contrastText,
        marginTop: theme.spacing(1),
        cursor: 'pointer'
    },
    '@keyframes pulse': {
        '0%': {
            opacity: 1
        },
        '50%': {
            opacity: 0.4
        },
        '100%': {
            opacity: 1
        }
    },
}))