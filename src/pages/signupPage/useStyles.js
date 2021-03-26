import {makeStyles} from "@material-ui/core/styles"

export const signUpPageStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'center'
    },
    title: {
        textAlign: "center",
        margin: "0 auto",
        padding: theme.spacing(3,0)
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
      margin: theme.spacing(1,0,1,0)
    },
    button: {
        margin: theme.spacing(1, 0, 1),
    },
    items: {
        display: 'flex',
        '& > div': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: theme.spacing(2),
            margin: theme.spacing(1),
            border: '2px solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: 5
        }
    },
    wallet: {

    },
    host: {

    }
}))