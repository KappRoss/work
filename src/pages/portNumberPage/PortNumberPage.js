import React from "react";
import {Button, Container, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {portNumbersPageStyles} from "./useStyles";
import {useHistory} from "react-router-dom";
import Link from "@material-ui/core/Link";

const PortNumberPage = () => {
    const s = portNumbersPageStyles()
    const history = useHistory()
    return (
        <Container className={s.root}>
            <div>
                <Typography variant={'h3'} className={s.title}>
                    Set Port Numbers
                </Typography>
                <Typography variant={'h5'} className={s.subTitle}>
                    Ports identify Xa-Miner on your network and must be forwarded in your Internet router.&nbsp;
                    <Link color={'inherit'} style={{textDecoration: 'underline'}}>Click here</Link> for assistance on how to set up Port Forwarding
                </Typography>
                <form className={s.form}>
                    <TextField
                        className={s.textField}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type={"text"}
                        // value={formState.formControl.password.value}
                        // error={!formState.formControl.password.valid && formState.formControl.password.touched}
                        label={"Hosting Port" }
                        helperText={"(if you have one Xa-Miner, leave at default)"}
                        // onChange={event => onChangeHandler(event, 'password')}
                    />
                    <TextField
                        className={s.textField}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type={"text"}
                        // value={formState.formControl.password.value}
                        // error={!formState.formControl.password.valid && formState.formControl.password.touched}
                        label={"Secondary Port" }
                        helperText={"(if you have one Xa-Miner, leave at default)"}
                        // onChange={event => onChangeHandler(event, 'password')}
                    />
                    <Button
                        // disabled={!formState.isFormValid}
                        fullWidth
                        size="large"
                        variant={'outlined'}
                        color="secondary"
                        className={s.button}
                        onClick={() => history.push('/loader')}
                    >next</Button>
                </form>
            </div>
        </Container>
    )
}

export default PortNumberPage