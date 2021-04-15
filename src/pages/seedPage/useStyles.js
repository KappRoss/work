import {makeStyles} from "@material-ui/core/styles";

export const seedPageStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 0,
        margin: 0,
        maxWidth: "100%"
    },
    textField: {
        "& .Mui-focused": {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "white",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        padding: theme.spacing(1),
        boxShadow: " 0px 0px 20px 5px #2074ee",
    },
    textarea: {
        resize: "none",
        width: '100%',
        borderColor: theme.palette.secondary.main,
        borderRadius: 5,
        background: theme.palette.primary.main,
        color: theme.palette.text.secondary,
        padding: theme.spacing(3)
    },
    contentText: {
        padding: theme.spacing(1,2,2,2),
        marginBottom: theme.spacing(2),
        "& span": {
            color: theme.palette.warning.main
        },
        "& p": {
            padding: theme.spacing(1, 1, 0, 1),
        }
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        boxShadow: `0px 0px 20px 0px ${theme.palette.secondary.main}`,
        width: 600,
        minHeight: 450,
        justifyContent: 'space-around',
        flexWrap: "wrap"
    }
}))