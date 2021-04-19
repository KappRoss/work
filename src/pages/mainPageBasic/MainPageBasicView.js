import React from 'react'
import {stylesMainPageBasicView} from "./useStyles";
import {Button, Grid, Typography} from "@material-ui/core";
import SystemBlock from "../../components/SystemBlock";
import DiscMemory from "../mainPageAdvanced/components/DiscMemory";
import IconButton from "@material-ui/core/IconButton";
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import SendCoinsDialog from "../mainPageAdvanced/components/sendCoins";

const MainPageBasicView = () => {
    const s = stylesMainPageBasicView()

    return (
        <Grid container direction="row" justify="center" alignItems="stretch" className={s.container}>
            <Grid container direction="row" justify="center" alignItems="stretch" item sm={10} md={10} lg={8} xl={8}>
                <Grid item xs={12} md={6} className={s.totalEarned}>
                    <Typography variant={'h2'} className={s.title}>
                        Total Earned
                    </Typography>
                    <Grid container className={s.money}>
                        <Grid item xs={6} className={s.forDivider}>
                            <div className={s.walletRight}>
                                <Typography>
                                    To Date
                                </Typography>
                                <div className={s.currencyRight}>
                                    <Typography color={"secondary"}>
                                        11,000
                                    </Typography>
                                    <Typography className={s.time}>
                                        SCP
                                    </Typography>
                                </div>
                                <div className={s.currencyRight}>
                                    <Typography color={'secondary'}>
                                        $1,231.45
                                    </Typography>
                                    <Typography className={s.time}>
                                        USD
                                    </Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <div className={s.walletLeft}>
                                <Typography>
                                    Balance
                                </Typography>
                                <div className={s.currencyLeft}>
                                    <Typography color={"secondary"}>
                                        11,000
                                    </Typography>
                                    <Typography className={s.time}>
                                        SCP
                                    </Typography>
                                </div>
                                <div className={s.currencyLeft}>
                                    <Typography color={'secondary'}>
                                        $1,231.45
                                    </Typography>
                                    <Typography className={s.time}>
                                        USD
                                    </Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={6} className={s.forDivider}>
                            <div className={s.walletRight}>
                                <Typography>
                                    Last 30 Days
                                </Typography>
                                <div className={s.currencyRight}>
                                    <Typography color={"secondary"}>
                                        11,000
                                    </Typography>
                                    <Typography className={s.time}>
                                        SCP
                                    </Typography>
                                </div>
                                <div className={s.currencyRight}>
                                    <Typography color={'secondary'}>
                                        $1,231.45
                                    </Typography>
                                    <Typography className={s.time}>
                                        USD
                                    </Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <div className={s.walletLeft}>
                                <Typography>
                                    Last 30 Days
                                </Typography>
                                <div className={s.currencyLeft}>
                                    <Typography color={"secondary"}>
                                        11,000
                                    </Typography>
                                    <Typography className={s.time}>
                                        SCP
                                    </Typography>
                                </div>
                                <div className={s.currencyLeft}>
                                    <Typography color={'secondary'}>
                                        $1,231.45
                                    </Typography>
                                    <Typography className={s.time}>
                                        USD
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <SendCoinsDialog text={'Send Coins\n' +
                    'to Outside Wallet'}/>
                    <div className={s.copyText}>
                        <span
                            className={s.input}>30641e79f42b4166cf3f4dca53a9e98e252bd62a9be8e73a0174dd70f28e522a</span>
                        <span className={s.iconButton}>
                            <IconButton type="submit" aria-label="search"
                                        onClick={() => {
                                            navigator.clipboard.writeText("30641e79f42b4166cf3f4dca53a9e98e252bd62a9be8e73a0174dd70f28e522a")
                                        }}>
                            <FileCopyTwoToneIcon/>
                        </IconButton></span>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant={'h2'} className={s.title}>
                        Storage Use
                    </Typography>
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
                    </div>
                    <div className={s.discData}>
                        <Grid container className={s.discDataItem}>
                            <Grid item xs={2}>
                                <Typography>Disc 1:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <DiscMemory value={30} height={s.discHeight}/>
                            </Grid>
                        </Grid>
                        <Grid className={s.discDataItem}>
                            <Grid item xs={2}>
                                <Typography>Disc 2:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <DiscMemory value={90} height={s.discHeight}/>
                            </Grid>
                        </Grid>
                        <Grid className={s.discDataItem}>
                            <Grid item xs={2}>
                                <Typography>Disc 3:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <DiscMemory value={54} height={s.discHeight}/>
                            </Grid>
                        </Grid>
                        <Grid className={s.discDataItem}>
                            <Grid item xs={2}>
                                <Typography>Disc 4:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <DiscMemory value={60} height={s.discHeight}/>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} className={s.system}>
                    <div className={s.group}>
                        <SystemBlock/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPageBasicView