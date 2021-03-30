import { makeStyles } from "@material-ui/core";

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
        height: '75vh'
    },
    saveButtonDiv: {

    }
}))