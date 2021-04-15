import {makeStyles} from "@material-ui/core/styles";

export const stylesMainPageBasicView = makeStyles(theme => ({
    container: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // container direction="row" justify="center" alignItems="stretch"
    },
    group: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1)
    },
    title: {
        textAlign: 'center',
        padding: theme.spacing(2, 0, 5, 0)
    },
    totalEarned: {
        // justifyContent: "center",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    discDataItem: {
        display: "flex",
        padding: theme.spacing(2, 0),
        "& > div > p": {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
        }
    },
    discHeight: {
        height: theme.spacing(5)
    },
    storageBlock: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1, 0),
        "& p": {
            paddingRight: 3,
        },
    },
    storageBlockItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'baseline'
    },
    time: {
        color: theme.palette.secondary.dark
    },
    money: {
        margin: theme.spacing(1, 0, 5, 0),
        padding: theme.spacing(1, 1, 1, 1),
        '& > div': {
            padding: theme.spacing(1, 5, 1, 5),
        }
    },
    walletLeft: {
        textAlign: ' start',
        // marginBottom: theme.spacing(1)
    },
    walletRight: {
        textAlign: 'end',
        // marginBottom: theme.spacing(1),
    },
    forDivider: {
        borderRight: `1px solid ${theme.palette.secondary.dark}`,
    },
    walletItems: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    currencyLeft: {
        display: "flex",
        justifyContent: "flex-start",
        "& > p": {
            paddingRight: 5
        }
    },
    currencyRight: {
        display: "flex",
        justifyContent: "flex-end",
        "& > p": {
            paddingLeft: 5
        }
    },
    ////// copyText
    copyText: {
        marginTop: theme.spacing(4),
        display: "flex",
        minWidth: 0,
        alignItems: "center",
        maxWidth: '-webkit-fill-available'
    },
    input: {
        marginLeft: theme.spacing(1),
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    iconButton: {
        flexShrink: 0
    },
    /////
    system: {
        marginTop: theme.spacing(5)
    }
}))