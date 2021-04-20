import {makeStyles} from "@material-ui/core/styles";

export const mainPageUseStyle = makeStyles(theme => ({
    container: {
        position: 'absolute',
        top: theme.spacing(10),
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 0,
        maxWidth: "100%",
        "& > div > div": {
            textAlign: 'center'
        },
    },
    title: {
        padding: theme.spacing(1, 0)
    },
    group: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1)
    },
    itemWallet: {
        paddingLeft: theme.spacing(2)
    },
    groupBorderNone: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    groupItems: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    time: {
        color: theme.palette.secondary.dark
    },

    ////// copyText
    copyText: {
        // marginTop: theme.spacing(1),
        display: "flex",
        minWidth: 0,
        alignItems: "center",
        maxWidth: '-webkit-fill-available'
    },
    input: {
        // marginLeft: theme.spacing(1),
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: theme.palette.secondary.main
    },
    iconButton: {
        flexShrink: 0
    },

    //////start accounting block/////////
    wallet: {
        textAlign: 'end',
        // marginBottom: theme.spacing(1)
    },
    walletTitle: {
        textAlign: "left"
    },
    coinsBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
    },
    coinsText: {
        paddingTop: theme.spacing(2)
    },
    walletItems: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    walletTitles: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "flex-end"
    },
    income: {
        textAlign: "end"
    },
    incomeData: {
        display: 'flex',
        flexDirection: 'row'
    },
    incomeItems: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    incentives: {},
    incentivesItems: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    incentivesData: {
        display: 'flex',
        flexDirection: 'row'
    },
    autoConfiguration: {},
    autoConfigurationItems: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
    },
    prices: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: "100%"
    },
    pricesTitle: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "end",
        justifyContent: 'space-between',
        "& > p": {
            height: '100%',
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
        }
    },
    pricesData: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "end",
        justifyContent: 'space-between'
    },
    walletDataContainer: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    walletData: {
        display: "flex",
        justifyContent: 'space-between',
        padding: theme.spacing(1,3,0,1)
    },
    walletValue: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        "& > div > p": {
            width: '100%',
            textAlign: 'start'
        }
    },
    walletDataItem: {},
    currency: {
        display: "flex",
        justifyContent: "flex-end",
        "& > p": {
            paddingLeft: 5
        }
    },
    ////end accounting block ////


    ///start storageAndNetwork block

    storageNetContainer: {
        display: "flex",
        "& > div": {
            padding: 0,

        },
        margin: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1)
    },
    storage: {
        display: 'flex',
        flexDirection: "column",
        marginBottom: theme.spacing(2),
        "& > p": {
            textAlign: 'left'
        }
    },
    borderBottom: {
        borderBottom: '2px solid'
    },
    storageTitle: {
        paddingLeft: theme.spacing(2)
    },
    storageBlock: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
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
    discDataItem: {
        display: "flex",
        padding: theme.spacing(2, 0)
        // height: theme.spacing(2)
    },
    bandwidthContainer: {
        paddingBottom: theme.spacing(2)
        // paddingRight: theme.spacing(3)
    },
    bandwidth: {
        display: 'flex',
        flexDirection: 'row',
        height: "100%",
    },
    bandwidthTitles: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "end",
        justifyContent: 'space-between',
        "& > p": {
            height: '100%',
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
        }
    },
    bandwidthData: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "end",
        justifyContent: 'space-between'
    },
    subData: {
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: 'baseline',
        "& > p": {
            paddingLeft: theme.spacing(0.5)
        }
    },
    ////end storageAndNetwork block

    ///contracts////
    contractsTitles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "end",
        justifyContent: 'space-between',
        "& > p": {
            display: 'flex',
            alignItems: 'flex-end',
            height: "100%",
            width: '100%',
            justifyContent: 'flex-end',
            paddingRight: theme.spacing(1)
        }
    },
    contractsData: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'start',
        marginBottom: theme.spacing(1),
        "& > div": {
            display: 'flex',
            alignItems: 'baseline'
        },
        "& > div > p": {
            paddingLeft: theme.spacing(1)
        }
    },

    accounting: {
        gridArea: "accounting"
    },
    contracts: {
        gridArea: "contracts",
    },
    storageAndNetwork: {
        gridArea: "storageAndNetwork"
    },
    systemHealth: {
        gridArea: "systemHealth",
        width: "100%"
    },
    supportButtons: {
        display: 'flex',
        justifyContent: "space-between",
        "& > button": {
            margin: theme.spacing(1),

        }
    },
    redButton: {
        color: theme.palette.error.main,

    },
    redButtonSubText: {
        display: "flex",
        flexDirection: 'column',
    }

}))