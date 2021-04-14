import React from 'react'
import {Button, Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import {mainPageUseStyle} from "./useStyles";
import Grid from "@material-ui/core/Grid";
import UpTimer from "./components/Uptimer";
import classNames from "classnames";
import DiscMemory from "./components/DiscMemory";

const MainPageView = () => {
    const s = mainPageUseStyle()

    return (
        <Grid container className={s.container}>
            <Grid container item sm={10} md={10} lg={8} xl={8}>
                <Grid item xs={12} md={6} className={s.accounting}>
                    <div className={s.group}>
                        <Typography variant={"button"} component={'p'} className={s.title}>
                            Accounting
                        </Typography>
                        <Grid container xs={12} className={s.groupItems}>
                            <Grid item xs={12} className={s.wallet}>
                                <div className={classNames(s.groupBorderNone, s.walletItems)}>
                                    <Typography>
                                        Wallet:
                                    </Typography>
                                    <div>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                    <Button variant={'contained'} color={'secondary'}>
                                        send coins
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={12} className={s.income}>
                                <div className={classNames(s.groupBorderNone, s.incomeItems)}>
                                    <Typography>
                                        Income:
                                    </Typography>
                                    <div className={s.wallet}>
                                        <Typography>
                                            Last 30 Days
                                        </Typography>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={s.wallet}>
                                        <Typography>
                                            Last 90 Days
                                        </Typography>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={s.wallet}>
                                        <Typography>
                                            Total To Date
                                        </Typography>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} className={s.incentives}>
                                <div className={classNames(s.groupBorderNone, s.incentivesItems)}>
                                    <Typography>
                                        Incentives:
                                    </Typography>
                                    <div className={s.wallet}>
                                        <Typography>
                                            Last 30 Days
                                        </Typography>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={s.wallet}>
                                        <Typography>
                                            Last 90 Days
                                        </Typography>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={s.wallet}>
                                        <Typography>
                                            Total To Date
                                        </Typography>
                                        <div className={s.currency}>
                                            <Typography color={"secondary"}>
                                                11,000
                                            </Typography>
                                            <Typography className={s.time}>
                                                SCP
                                            </Typography>
                                        </div>
                                        <div className={s.currency}>
                                            <Typography color={'secondary'}>
                                                $1,231.45
                                            </Typography>
                                            <Typography className={s.time}>
                                                USD
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} className={s.autoConfiguration}>
                                <div className={classNames(s.groupBorderNone, s.autoConfigurationItems)}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={true}
                                                //onChange={handleChange}
                                                name="checkedB"
                                                color="secondary"
                                            />
                                        }
                                        labelPlacement="start"
                                        label={"Pricing and Incentives Using Auto-configuration"}
                                    />
                                </div>
                            </Grid>
                            <Grid container item xs={12} className={classNames(s.prices, s.groupBorderNone)}>
                                <Grid xs={7} item className={s.pricesTitle}>
                                    <Typography>Storage Price (SCP/TB/Month):</Typography>
                                    <Typography>Collateral Price (SCP/TB/Month):</Typography>
                                    <Typography>Max Collateral (SCP/Contract):</Typography>
                                    <Typography>Download Bandwidth Price (SCP/TB):</Typography>
                                    <Typography>Upload Bandwidth Price (SCP/TB):</Typography>
                                    <Typography>Max Duration:</Typography>
                                    <Typography>Contract Creation Fee (SCP):</Typography>
                                </Grid>
                                <Grid xs={4} item className={s.pricesData}>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            20
                                        </Typography>
                                        <Typography className={s.time}>SCP</Typography>
                                    </div>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            20
                                        </Typography>
                                        <Typography className={s.time}>SCP</Typography>
                                    </div>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            1.103k
                                        </Typography>
                                        <Typography className={s.time}>SCP</Typography>
                                    </div>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            100
                                        </Typography>
                                        <Typography className={s.time}>SCP</Typography>
                                    </div>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            100
                                        </Typography>
                                        <Typography className={s.time}>SCP</Typography>
                                    </div>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            12
                                        </Typography>
                                        <Typography className={s.time}>week</Typography>
                                    </div>
                                    <div className={s.subData}>
                                        <Typography variant="h5" component={'p'} color={'secondary'}>
                                            0.00015
                                        </Typography>
                                        <Typography className={s.time}>SCP</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid container item xs={12} md={6}>
                    <Grid item xs={12} className={s.storageAndNetwork}>
                        <div className={s.group}>
                            <div className={s.groupItems}>
                                <Grid item xs={12} className={classNames(s.card, s.storage,)}>
                                    <Typography variant={"button"} component={'p'}
                                                className={classNames(s.title, s.storageTitle)}>
                                        Storage
                                    </Typography>
                                    <div className={s.discData}>
                                        <Grid container xs={12} className={s.discDataItem}>
                                            <Grid item xs={4}>
                                                <Typography>Disc 1:</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <DiscMemory value={30}/>
                                            </Grid>
                                        </Grid>
                                        <Grid className={s.discDataItem}>
                                            <Grid item xs={4}>
                                                <Typography>Disc 2:</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <DiscMemory value={90}/>
                                            </Grid>
                                        </Grid>
                                        <Grid className={s.discDataItem}>
                                            <Grid item xs={4}>
                                                <Typography>Disc 3:</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <DiscMemory value={54}/>
                                            </Grid>
                                        </Grid>
                                        <Grid className={s.discDataItem}>
                                            <Grid item xs={4}>
                                                <Typography>Disc 4:</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <DiscMemory value={60}/>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div container xs={12} className={s.storageBlock}>
                                        <div item xs={3} className={s.storageBlockItem}>
                                            <Typography>
                                                Used:
                                            </Typography>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                5.63
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                        <div item xs={3} className={s.storageBlockItem}>
                                            <Typography>
                                                Free:
                                            </Typography>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                802.62
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                        <div item xs={6} className={s.storageBlockItem}>
                                            <Typography>
                                                Last 30 Days:
                                            </Typography>
                                            <Typography variant="h5" component={'p'} color={'secondary'}>
                                                802.62
                                            </Typography>
                                            <Typography className={s.time}>GB</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classNames(s.card, s.storage, s.group)}>
                                    <Typography variant={"button"} component={'p'}
                                                className={classNames(s.title, s.storageTitle)} gutterBottom>
                                        Bandwidth
                                    </Typography>
                                    <Grid container className={s.bandwidthContainer}>
                                        <Grid item container xs={6} className={classNames(s.card, s.bandwidth)}>
                                            <Grid item xs={6} className={s.bandwidthTitles}>
                                                <Typography>Sent:</Typography>
                                                <Typography>Received:</Typography>
                                            </Grid>
                                            <Grid item xs={6} className={s.bandwidthData}>
                                                <div className={s.subData}>
                                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                                        5.63
                                                    </Typography>
                                                    <Typography className={s.time}>GB</Typography>
                                                </div>
                                                <div className={s.subData}>
                                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                                        802.62
                                                    </Typography>
                                                    <Typography className={s.time}>GB</Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid item container xs={6} className={classNames(s.card, s.bandwidth)}>
                                            <Grid item xs={6} className={s.bandwidthTitles}>
                                                <Typography>Upload:</Typography>
                                                <Typography>Download:</Typography>
                                            </Grid>
                                            <Grid item xs={6} className={s.bandwidthData}>
                                                <div className={s.subData}>
                                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                                        100
                                                    </Typography>
                                                    <Typography className={s.time}>mbps</Typography>
                                                </div>
                                                <div className={s.subData}>
                                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                                        1000
                                                    </Typography>
                                                    <Typography className={s.time}>mbps</Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={s.contracts}>
                        <div className={s.group} style={{height: "92%"}}>
                            <Typography className={s.title} style={{textAlign: 'left', paddingLeft: 16}}
                                        component={'p'} variant={"button"}>Contracts</Typography>
                            <Grid container className={classNames(s.card)}>
                                <Grid item xs={4} className={s.contractsTitles}>
                                    <Typography>Active:</Typography>
                                    <Typography>Next End Date:</Typography>
                                </Grid>
                                <Grid item xs={3} className={s.contractsData}>
                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                        4
                                    </Typography>
                                    <Typography variant="h5" component={'p'} color={'secondary'}>
                                        23/7/2021
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                </Grid>
                <Grid item className={s.systemHealth}>
                    <div className={s.group}>
                        {/*<Typography variant={"button"} component={'p'} className={s.title}>*/}
                        {/*    System Health*/}
                        {/*</Typography>*/}
                        <div className={classNames(s.groupItems, s.systemBlock)}>
                            <div className={s.infoBlock}>
                                <div className={s.infoBlockItem}>
                                    <div className={s.storageItemsData}>
                                        <Typography>Announced Address:</Typography>
                                        <Typography variant="h5" color={"secondary"}>195.130.205.91:4282</Typography>
                                    </div>
                                    <div className={s.storageItemsData}>
                                        <Typography>Ports:</Typography>
                                        <Typography variant="h5" color={"secondary"}>Open</Typography>
                                    </div>
                                </div>
                                <div className={s.infoBlockItem}>
                                    <div className={s.storageItemsData}>
                                        <Typography>
                                            Uptime
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
                            {/*<div className={s.cardContainer}>*/}
                            {/*    <SystemData classes={{card: s.card, time: s.time}}/>*/}
                            {/*</div>*/}
                            <div className={s.navButtonBlock}>
                                {/*<Button className={s.resetButton} variant={'outlined'} size={'large'}>*/}
                                {/*    <Typography>*/}
                                {/*        system reset*/}
                                {/*    </Typography>*/}
                                {/*    /!*<Typography variant={'caption'} component={'p'} style={{textTransform: "lowercase"}}>*!/*/}
                                {/*    /!*    Use only if instructed*!/*/}
                                {/*    /!*</Typography>*!/*/}
                                {/*</Button>*/}
                                <Button
                                    variant={'outlined'}
                                    color={"secondary"}
                                    className={s.mainNavButton}
                                    size={'large'}
                                >support</Button>
                                <Button variant={'outlined'}
                                        color={"secondary"}
                                        className={s.mainNavButton}
                                        size={'large'}
                                >basic settings</Button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPageView