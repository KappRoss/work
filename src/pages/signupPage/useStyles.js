import {makeStyles} from "@material-ui/core/styles"

export const signUpPageStyles = makeStyles((theme) => ({
    root: {

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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '88.2vh'
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
    description: {
        margin: theme.spacing(1, 0, 1, 0)
    },
    button: {
        margin: theme.spacing(1, 0, 1),
    },
    registerBlock: {
        display: 'flex',
        '& > div ': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }
    },
    registerBlockItem: {},
    registerItems: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: 5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    repeatText: {
        paddingTop: theme.spacing(1),
    },
}))