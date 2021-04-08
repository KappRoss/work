import {makeStyles} from "@material-ui/core";

export const SettingsPageUseStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-around',
        borderTop: '2px solid',
        borderTopColor: theme.palette.secondary.main,
        alignItems: 'center',
        borderBottom: '2px solid',
        borderBottomColor: theme.palette.secondary.main,
        height: '75vh',
        "& > div": {
            flex: 1
        }
    },
    saveButtonDiv: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 150
    },
    buttonCancel: {
        marginRight: theme.spacing(2),
        minWidth: 150
    }
}))