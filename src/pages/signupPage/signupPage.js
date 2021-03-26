import React from "react"
import {signUpPageStyles} from "./useStyles";
import Grid from "@material-ui/core/Grid";
import {Box, Button, Icon, Typography} from "@material-ui/core";
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';

const SignUpPage = () => {
    const classes = signUpPageStyles()

    return (
        <Grid container className={classes.container} >
            {/*<Grid item xs={false} sm={2} md={3} xl={4}/> /!*Empty*!/*/}

            <Grid item container xs={12} sm={8} md={7} lg={5} xl={4} >
                <Grid item xs={12} className={classes.title}  >
                    <Typography variant={'h3'}>
                        Buy Storage and Earn.
                    </Typography>
                    <Typography variant={'h6'} style={{fontWeight: '400'}}>
                        Get Started by Signing Up Now.
                    </Typography>

                </Grid>
                <Box  xs={12} sm={12} className={classes.items}>
                    <Grid item xs={12} sm={6} className={classes.wallet} >
                        <Box className={classes.subTitle}>
                            <AccountBalanceWalletRoundedIcon fontSize={'large'} color={'secondary'}/>
                            <Typography >
                                Wallet
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisi augue.
                                Sed ullamcorper neque consectetur, convallis nisl ut, convallis lacus.
                            </Typography>
                        </Box>
                        <Button
                            size="large"
                            variant={'outlined'}
                            color="secondary"
                            className={classes.button}
                        >
                            Create Wallet</Button>
                    </Grid>
                    <Grid  item xs={12} sm={6} className={classes.host}>
                        <Box className={classes.subTitle}>
                            <LanguageRoundedIcon fontSize={'large'}  color={'secondary'}/>
                            <Typography >
                                Host
                            </Typography>
                        </Box>
                        <Box className={classes.description}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisi augue.
                                Sed ullamcorper neque consectetur, convallis nisl ut, convallis lacus.
                            </Typography>
                        </Box>
                        <Button
                            size="large"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            endIcon={<Icon>exit_to_app_rounded_icon</Icon>}
                        >Create Host</Button>
                    </Grid>
                </Box>
            </Grid>

            {/*<Grid item xs={false} sm={2} md={3} xl={4}/> /!*Empty*!/*/}
        </Grid>
    )
}

export default SignUpPage