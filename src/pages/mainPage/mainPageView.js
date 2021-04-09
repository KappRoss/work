import React from 'react'
import {Button, Typography} from "@material-ui/core";
import {mainPageUseStyle} from "./useStyles";
import Grid from "@material-ui/core/Grid";
import UpTimer from "./uptimer";
import Divider from "@material-ui/core/Divider";

const MainPageView = () => {
    const s = mainPageUseStyle()

    return (
        <Grid container className={s.container}>
            <Grid container item sm={10} md={10} lg={8} xl={8}>
                <Grid item className={s.storage}>
                    <Typography variant={'button'}>
                        State Of Storage Volumes
                    </Typography>
                    <div className={s.storageItems}>
                        <div className={s.cardContainer}>
                            <Grid item className={s.card}>
                                <Typography className={s.title}>
                                    Uptime
                                </Typography>
                                <div className={s.storageItemsData}>
                                    <UpTimer/>
                                </div>
                            </Grid>
                        </div>
                        <div className={s.cardContainer}>
                            <Grid item className={s.card}>
                                <Typography className={s.title} gutterBottom>
                                    Storage Delta (Last 30 Days)
                                </Typography>
                                <Grid item className={s.storageItemsData}>
                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                        5.61
                                    </Typography>
                                    <Typography className={s.time}>GB</Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={s.cardContainer}>
                            <Grid item className={s.card}>
                                <Typography className={s.title} gutterBottom>
                                    Storage Usage
                                </Typography>
                                <Grid container item className={s.storageItemsData}>
                                    <Grid item style={{marginRight: 50}} className={s.storageSubItem}>
                                        <div>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                5.63
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                        <Typography color={'textSecondary'}>
                                            Used
                                        </Typography>
                                    </Grid>
                                    <Grid item className={s.storageSubItem}>
                                        <div>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                802.62
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                        <Typography color={'textSecondary'}>
                                            Total
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={s.cardContainer}>
                            <Grid item className={s.card}>
                                <Typography className={s.title} gutterBottom>
                                    Bandwidth Usage (Last 30 Days)
                                </Typography>
                                <Grid container item className={s.storageItemsData}>
                                    <Grid item style={{marginRight: 50}} className={s.storageSubItem}>
                                        <div>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                5.63
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                        <Typography color={'textSecondary'}>
                                            Sent
                                        </Typography>
                                    </Grid>
                                    <Grid item className={s.storageSubItem}>
                                        <div>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                802.62
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                        <Typography color={'textSecondary'}>
                                            Received
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <Button style={{marginBottom: 22}} variant={'outlined'} color={'secondary'}>DETAILED INFO</Button>
                    <Divider/>
                </Grid>
                <Grid item xs={12} className={s.wallet}>
                    <Typography variant={'button'}>
                        Accounting Of The Crypto Wallet
                    </Typography>
                    <div className={s.calendar}>
                        <Typography style={{margin: 8}} component={'p'} variant={'textSecondary'}>
                            {'< Select data (calendar) >'}
                        </Typography>
                    </div>
                    <div className={s.walletDataContainer}>
                        <div className={s.walletData}>
                            <div className={s.walletDataItem}>
                                <Typography className={s.title}>
                                    01 May 2021
                                </Typography>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Earned Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Potential Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        New Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Successful Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.walletData}>
                            <div className={s.walletDataItem}>
                                <Typography className={s.title}>
                                    May 2021
                                </Typography>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Earned Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Potential Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        New Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Successful Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.walletData}>
                            <div className={s.walletDataItem}>
                                <Typography className={s.title}>
                                    2021
                                </Typography>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Earned Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Potential Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        New Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Successful Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.walletData}>
                            <div className={s.walletDataItem}>
                                <Typography className={s.title}>
                                    Total
                                </Typography>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Earned Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $0.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Potential Revenue
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            5
                                        </Typography>
                                        <Typography className={s.time}>
                                            SC
                                        </Typography>
                                    </div>
                                    <div className={s.currency}>
                                        <Typography color={'secondary'}>
                                            $400.00
                                        </Typography>
                                        <Typography color={'textSecondary'}>
                                            USD
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Active Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.info}>
                                    <Typography color={'textSecondary'}>
                                        Successful Contracts
                                    </Typography>
                                    <div className={s.currency}>
                                        <Typography color={"secondary"}>
                                            0
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={s.configuration}>
                    <div>
                        <Typography>
                            Configuration screen for when a drive is replaced
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={s.blockchainStatus}>
                    <div>
                        <Typography>
                            Simple blockchain status
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPageView