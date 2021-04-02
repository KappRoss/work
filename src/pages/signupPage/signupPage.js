import React from "react"
import {signUpPageStyles} from "./useStyles";
import Grid from "@material-ui/core/Grid";
import {Box, Button, Icon, Typography} from "@material-ui/core";
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import TextField from "@material-ui/core/TextField";
import SeedDialogs from "./seedPopup";

const SignUpPage = () => {
    const s = signUpPageStyles()
    const [password, setPassword] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleClickOpenCreate = () => {
        setOpen(true);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const passwordHandler = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
        if (event.key === 'Enter') {
            //loginHandler(login, password)
        }
    }

    const kayPressHandler = (event) => {
        if (event.key === 'Enter') {
            // props.auth(login, password)
        }
    }

    return (
        <Grid container className={s.container}>
            {/*<Grid item xs={false} sm={2} md={3} xl={4}/> /!*Empty*!/*/}
            <SeedDialogs open={open} handleClose={handleClose}/>
            <Grid item container xs={12} sm={8} md={7} lg={5} xl={4}>
                <Grid item xs={12} className={s.title}>
                    <Typography variant={'h3'}>
                        Buy Storage and Earn.
                    </Typography>
                    <Typography variant={'h6'} style={{fontWeight: '400'}}>
                        Get Started by Wallet Now.
                    </Typography>

                </Grid>
                <Grid item container xs={12} sm={12} className={s.registerBlock}>
                    <Grid item xs={12} sm={6} className={s.registerBlockItem}>
                        <div className={s.registerItems}>
                            <Box className={s.subTitle}>
                                <AccountBalanceWalletRoundedIcon fontSize={'large'} color={'secondary'}/>
                                <Typography>
                                    Wallet
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisi augue.
                                    Sed ullamcorper neque consectetur, convallis nisl ut, convallis lacus.
                                </Typography>
                            </Box>
                            <form className={s.form}>
                                <TextField
                                    className={s.root}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={passwordHandler}
                                    onKeyPress={kayPressHandler}
                                />
                                <Button
                                    fullWidth
                                    size="large"
                                    variant={'outlined'}
                                    //variant="contained"
                                    color="secondary"
                                    //className={classes.submit}
                                    className={s.button}
                                    onClick={handleClickOpenCreate}
                                >
                                    Create Wallet</Button>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={s.registerBlockItem}>
                        <div className={s.registerItems}>
                            <Box className={s.subTitle}>
                                <LanguageRoundedIcon fontSize={'large'} color={'secondary'}/>
                                <Typography>
                                    Login
                                </Typography>
                            </Box>
                            <Box className={s.description}>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisi augue.
                                    Sed ullamcorper neque consectetur, convallis nisl ut, convallis lacus.
                                </Typography>
                            </Box>
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                color="secondary"
                                className={s.button}
                                endIcon={<Icon>exit_to_app_rounded_icon</Icon>}
                                onClick={handleClickOpen}
                            >Enter Wallet</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            {/*<Grid item xs={false} sm={2} md={3} xl={4}/> /!*Empty*!/*/}
        </Grid>
    )
}

export default SignUpPage