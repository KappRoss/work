import React from 'react'
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {mainPageUseStyle} from "./useStyles";
import Grid from "@material-ui/core/Grid";

const MainPageView = () => {
    const s = mainPageUseStyle()
    const bull = <span className={s.bullet}>•</span>;

    return (
        <Grid container className={s.container}>
            <Grid container item sm={10} md={10} lg={8} xl={8}>
                <Grid item xs={12} className={s.storage}>
                    <Typography>
                        State Of Storage Volumes
                    </Typography>

                    <Card className={s.root} variant="outlined">
                        <CardContent>
                            <Typography className={s.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                be{bull}nev{bull}o{bull}lent
                            </Typography>
                            <Typography className={s.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    <Button variant={'outlined'} color={'secondary'}>DETAILED INFO</Button>
                </Grid>
                <Grid item xs={12} className={s.wallet}>
                    <Typography>
                        Accounting Of The Crypto Wallet
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={s.configuration}>
                    <Typography>
                        Configuration screen for when a drive is replaced
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={s.blockchainStatus}>
                    <Typography>
                        Simple blockchain status
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPageView