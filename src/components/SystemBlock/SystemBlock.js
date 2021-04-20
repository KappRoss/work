import {Button, Link, Typography} from "@material-ui/core";
import UpTimer from "../../pages/mainPageAdvanced/components/Uptimer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {useHistory, useLocation} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    systemHealth: {
        gridArea: "systemHealth",
        width: "100%"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    systemBlock: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1),
        flexWrap: 'wrap'
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
    mainNavButton: {
        color: "inherit"
    },
    infoBlockItem: {
        display: "flex"
    },
    changePort: {
        textDecoration: "underline"
    }
}))

const SystemBlock = () => {
    const s = useStyles()
    const location = useLocation()
    const history = useHistory();

    const toPage = () => {
        if (location.pathname === "/main-page") {
            history.push("/main-page-advanced")
        } else {
            history.push("/main-page")

        }
    }

    return (
        <Box justifyContent="space-between" className={s.systemBlock}>
            <div className={s.infoBlock}>
                <div className={s.infoBlockItem}>
                    <div className={s.storageItemsData}>
                        <Typography>Announced Address:</Typography>
                        <Typography variant="h5" color={"secondary"}>195.130.205.91:4282</Typography>
                    </div>
                    <div className={s.storageItemsData}>
                        <Typography>Ports:</Typography>
                        <Typography variant="h5" color={"secondary"}>Open 4282, 4283</Typography>
                    </div>
                    <Link component={'button'}  color={'inherit'} className={s.changePort}>Change Port Number</Link>
                </div>
                <div className={s.infoBlockItem}>
                    <div className={s.storageItemsData}>
                        <Typography>
                            Uptime:
                        </Typography>
                        <UpTimer/>
                    </div>
                    <div className={s.storageItemsData}>
                        <Typography>Block Height:</Typography>
                        <Typography variant="h5" color={"secondary"}>130,000</Typography>
                    </div>
                    <div className={s.storageItemsData}>
                        <Typography>Version:</Typography>
                        <Typography variant="h5" color={"secondary"}>1.5.2</Typography>
                    </div>
                </div>
            </div>
            <div className={s.navButtonBlock}>
                <Button variant={'outlined'}
                        color={"secondary"}
                        className={s.mainNavButton}
                        size={'large'}
                        onClick={toPage}
                >
                    {location.pathname === "/main-page" ? 'advanced settings' : 'basic settings'}
                </Button>
            </div>
        </Box>
    )
}

export default SystemBlock