import {makeStyles} from "@material-ui/core";

export const createPasswordStyle = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex!important",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 0,
        margin: 0,
        maxWidth: "100%!important"
    },
    textField: {
        marginBottom: theme.spacing(2),
        "& .Mui-focused": {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: theme.palette.secondary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary.main,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.secondary.main,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.secondary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main,
            },
        },
    },
    title: {
        textAlign: "center",
        margin: "0 auto",
        padding: theme.spacing(3, 0)
    },
    subTitle: {
        display: "flex",
        padding: theme.spacing(1, 0, 1),
        '& > p': {
            paddingLeft: 10,
            alignSelf: "center",
            fontWeight: 'bold'
        }
    },
    button: {
        margin: theme.spacing(1, 0, 1),
    },
    registerItems: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: 5,
    },
    form: {
        marginTop: theme.spacing(1),
    },
}))