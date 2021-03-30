import {makeStyles} from "@material-ui/core/styles";

export const mainPageUseStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        "& div": {
            padding: theme.spacing(2)
        }
    },
    storage: {
        border: '1px solid red'
    },
    wallet: {
        border: '1px solid red'
    },
    configuration: {
        border: '1px solid red'
    },
    blockchainStatus: {
        border: '1px solid red'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        minWidth: 275,
        maxWidth: "max-content"
    },
}))