import React from 'react'
import {Button, Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import {mainPageUseStyle} from "./useStyles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import DiscMemory from "./components/DiscMemory";
import SystemBlock from "../../components/SystemBlock";
import SendCoinsDialog from "./components/sendCoins";
import BandwidthSpeed from "./components/bandwidthSpeed";
import IconButton from "@material-ui/core/IconButton";
import FileCopyTwoToneIcon from "@material-ui/icons/FileCopyTwoTone";
import Link from "@material-ui/core/Link";

const MainPageAdvancedView = () => {
    const s = mainPageUseStyle()

    return (
        <Grid container className={s.container}>
            <Grid container item sm={10} md={10} lg={8} xl={8}>
                <Grid item xs={12} md={6} className={s.accounting}>
                    <div className={s.group}>
                        <Typography variant={"button"} component={'p'} className={s.title}>
                            Accounting
                        </Typography>
                        <Grid container className={s.groupItems}>
                            <Grid item xs={12} className={classNames(s.wallet, s.borderBottom)}>
                                <Grid container className={classNames(s.groupBorderNone, s.walletItems)}>
                                    <Grid xs={12} md={6} item>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography variant={'h5'} className={s.walletTitle}>
                                                    Wallet
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={s.walletData}>
                                                    <div className={s.walletTitles}>
                                                        <Typography>
                                                            Balance
                                                        </Typography>
                                                        <Typography>
                                                            Locked Collateral
                                                        </Typography>
                                                        <Typography>
                                                            Risked Collateral
                                                        </Typography>
                                                        {/*<Typography color={"secondary"}>*/}
                                                        {/*    11,000*/}
                                                        {/*</Typography>*/}
                                                        {/*<Typography className={s.time}>*/}
                                                        {/*    SCP*/}
                                                        {/*</Typography>*/}
                                                    </div>
                                                    <div className={s.walletValue}>
                                                        <div className={s.currency}>
                                                            <Typography color={'secondary'}>
                                                                11,000
                                                            </Typography>
                                                            <Typography color={'secondary'}>
                                                                $432
                                                            </Typography>
                                                            {/*<Typography className={s.time}>*/}
                                                            {/*    USD*/}
                                                            {/*</Typography>*/}
                                                        </div>
                                                        <div className={s.currency}>
                                                            <Typography color={'secondary'}>
                                                                500
                                                            </Typography>
                                                        </div>
                                                        <div className={s.currency}>
                                                            <Typography color={'secondary'}>
                                                                2000
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={6} item>
                                        <div className={s.coinsBlock}>
                                            <SendCoinsDialog width={'95%'}/>
                                            <Typography className={s.coinsText}>
                                                Add Coins to Your Xa-Miner:
                                            </Typography>
                                            <div className={s.copyText}>
                                        <span className={s.input}>
                                            30641e79f42b4166cf3f4dca53a9e98e252bd62a9be8e73a0174dd70f28e522a
                                        </span>
                                                <span className={s.iconButton}>
                                            <IconButton type="submit" aria-label="search"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText("30641e79f42b4166cf3f4dca53a9e98e252bd62a9be8e73a0174dd70f28e522a")
                                                        }}><FileCopyTwoToneIcon/>
                                            </IconButton>
                                        </span>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className={classNames(s.income)}>
                                <div className={classNames(s.groupBorderNone, s.incomeItems)}>
                                    <div>
                                        <Typography variant={'h5'}>
                                            Income
                                        </Typography>
                                    </div>
                                    <div className={s.incomeData}>
                                        <div className={classNames(s.wallet, s.itemWallet)}>
                                            <Typography>
                                                Previous Month
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
                                        <div className={classNames(s.wallet, s.itemWallet)}>
                                            <Typography>
                                                Expected
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
                                        <div className={classNames(s.wallet, s.itemWallet)}>
                                            <Typography>
                                                Total
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

                                </div>
                            </Grid>
                            <Grid item xs={12} className={classNames(s.incentives, s.borderBottom)}>
                                <div className={classNames(s.groupBorderNone, s.incentivesItems)}>
                                    <div>
                                        <Typography variant={'h5'}>
                                            Incentives
                                        </Typography>
                                    </div>
                                    <div className={s.incentivesData}>
                                        <div className={classNames(s.wallet, s.itemWallet)}>
                                            <Typography>
                                                Previous Month
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
                                        <div className={classNames(s.wallet, s.itemWallet)}>
                                            <Typography>
                                                Expected
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
                                        <div className={classNames(s.wallet, s.itemWallet)}>
                                            <Typography>
                                                Total
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
                            <Grid item xs={12} className={classNames(s.prices, s.groupBorderNone)}>
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
                <Grid item md={6}>
                    <Grid container >
                        <Grid item xs={12} className={s.storageAndNetwork}>
                            <div className={s.group}>
                                <div className={s.groupItems}>
                                    <Grid item xs={12} className={classNames(s.storage, s.borderBottom, s.discBlock)}>
                                        <Typography variant={"button"} component={'p'}
                                                    className={classNames(s.title, s.storageTitle)}>
                                            Storage
                                        </Typography>
                                        <div className={s.discData}>
                                            <Grid container className={s.discDataItem}>
                                                <Grid item xs={4}>
                                                    <Typography>Disc 1</Typography>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <DiscMemory value={30}/>
                                                </Grid>
                                            </Grid>
                                            <Grid className={s.discDataItem}>
                                                <Grid item xs={4}>
                                                    <Typography>Disc 2</Typography>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <DiscMemory value={90}/>
                                                </Grid>
                                            </Grid>
                                            <Grid className={s.discDataItem}>
                                                <Grid item xs={4}>
                                                    <Typography>Disc 3</Typography>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <DiscMemory value={54}/>
                                                </Grid>
                                            </Grid>
                                            <Grid className={s.discDataItem}>
                                                <Grid item xs={4}>
                                                    <Typography>Disc 4</Typography>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <DiscMemory value={60}/>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className={s.storageBlock}>
                                            <div className={s.storageBlockItem}>
                                                <Typography>
                                                    Used:
                                                </Typography>
                                                <Typography variant="h5" component={'p'} color={'secondary'}>
                                                    5.63
                                                </Typography>
                                                <Typography className={s.time}>GB</Typography>
                                            </div>
                                            <div className={s.storageBlockItem}>
                                                <Typography>
                                                    Free:
                                                </Typography>
                                                <Typography variant="h5" component={'p'} color={'secondary'}>
                                                    802.62
                                                </Typography>
                                                <Typography className={s.time}>GB</Typography>
                                            </div>
                                            <div className={s.storageBlockItem}>
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
                                    <Grid item xs={12} className={classNames(s.storage, s.borderBottom)}>
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
                                            <Grid item container xs={6} className={classNames(s.bandwidth)}>
                                                <BandwidthSpeed bandwidthTitles={s.bandwidthTitles}
                                                                bandwidthData={s.bandwidthData}
                                                                subData={s.subData} time={s.time}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} className={classNames(s.storage, s.contracts)}>
                                        <div className={s.contractsSubData}>
                                            <Typography className={s.title} style={{textAlign: 'left', paddingLeft: 16}}
                                                        component={'p'} variant={"button"}>Contracts/Expiration
                                            </Typography>
                                            <div className={s.contractsStatus}>
                                                <div className={s.statusItem}>
                                                    <Typography>Active:</Typography>
                                                    <Typography variant="h5" component={'p'} color={'secondary'}>4</Typography>
                                                </div>
                                                <div className={s.statusItem}>
                                                    <Typography>Successful:</Typography>
                                                    <Typography variant="h5" component={'p'} color={'secondary'}>200</Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={s.contractsSubData}>
                                            <Typography style={{textAlign: 'left', paddingLeft: 16}}>
                                                Next Three End Dates
                                            </Typography>
                                            <div className={s.contractsStatus}>
                                                <div className={s.statusItem}>
                                                    <Typography  component={'p'} color={'secondary'}>
                                                        23/7/2021
                                                    </Typography>
                                                </div>
                                                <div className={s.statusItem}>
                                                    <Typography  component={'p'} color={'secondary'}>
                                                        23/7/2021
                                                    </Typography>
                                                </div>
                                                <div className={s.statusItem}>
                                                    <Typography  component={'p'} color={'secondary'}>
                                                        23/7/2021
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={s.contractsSubData}>
                                            <Typography style={{textAlign: 'left', paddingLeft: 16}}>
                                                <Link color={'inherit'} className={s.viewContractsLink}>View Contracts in Navigator</Link>
                                            </Typography>
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classNames(s.group, s.supportButtons)}>
                                <Button fullWidth variant={'outlined'}
                                        color={'secondary'} size={'large'}
                                >Tech Support/RMA</Button>
                                <Button fullWidth variant={'outlined'}
                                        color={'secondary'} size={'large'}
                                >FAQ</Button>
                                <Button fullWidth variant={'outlined'}
                                        color={'secondary'} size={'large'}
                                        className={s.redButton}
                                >
                                    <div className={s.redButtonSubText}>
                                        System Reset
                                        <span style={{fontSize: '0.5rem'}}>Use only if instructed, risk of entire wallet loss</span>
                                    </div>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={s.systemHealth}>
                    <div className={s.group}>
                        <SystemBlock/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPageAdvancedView