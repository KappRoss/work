import {makeStyles} from "@material-ui/core/styles";

export const mainPageUseStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& > div > div": {
            textAlign: 'center'
        }
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


    ////start systemHealth block////
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    systemBlock: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1, 2, 1, 2)
    },
    storageItemsData: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
        paddingRight: theme.spacing(3),
        "& p": {
            paddingRight: 3,
        },
    },
    resetButton: {
        display: 'block',
        color: theme.palette.error.main,
        borderColor: theme.palette.secondary.main
    },
    infoBlock: {
        display: "flex",
        flexDirection: 'column'
    },
    navButtonBlock: {
        '& > *': {
            margin: theme.spacing(0, 1),
        },
    },
    mainNavButton:{
        color: "inherit"
    },
    infoBlockItem: {
        display: "flex"
    },
    ////end systemHealth block//////


    //////start accounting block/////////
    wallet: {
        textAlign: 'end',
        marginBottom: theme.spacing(1)
    },
    walletItems: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    income: {},
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
        border: `2px solid `,
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1, 2, 2, 2),
        minWidth: 260,
        margin: theme.spacing(1)
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
        "& > p": {
            textAlign: 'left'
        }
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
        // paddingRight: theme.spacing(3)
    },
    bandwidth: {
        display: 'flex',
        flexDirection: 'row',
        height: "100%"
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
        textAlign: 'start'
    },

    // gridContainer: {
    //     display: "grid",
    //     gridTemplateColumns: "1fr 1fr",
    //     gridTemplateRows: "2fr 1fr 0.51fr",
    //     gap: "0px 0px",
    //     gridTemplateAreas: `
    //         "accounting storageAndNetwork"
    //         "accounting contracts"
    //         "systemHealth systemHealth"
    //     `
    // },
    accounting: {
        gridArea: "accounting"
    },
    contracts: {
        gridArea: "contracts",
        height: 224
    },
    storageAndNetwork: {
        gridArea: "storageAndNetwork"
    },
    systemHealth: {
        gridArea: "systemHealth",
        width: "100%"
    }

}))