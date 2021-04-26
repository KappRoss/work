import React, {useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Container, TextareaAutosize, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {seedPageStyles} from "./useStyles";
import is from 'is_js'
import Box from "@material-ui/core/Box";
import CopySnackbar from "../mainPageAdvanced/components/copySnackbar";
import {connect} from "react-redux";
import {getSeedPubKey, postApiRegister} from "../../redux/actions/settings";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2, 2, 2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2, 1, 2, 1),
    },
}))(MuiDialogActions);

const SeedPage = (props) => {
    const s = seedPageStyles()
    const history = useHistory();

    useEffect(() => {
        props.getSeedPubKey()
    })

    const [email, setEmail] = React.useState('')
    const isError = is.email(email)
    const [firstStep, setFirstStep] = React.useState(true)

    const emailHandler = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
        if (event.key === 'Enter') {
            //loginHandler(login, password)
        }
    }

    const kayPressHandler = (event) => {
        if (event.key === 'Enter') {
            // props.auth(login, password)
        }
    }


    const nextHandler = () => {
        if (firstStep) {
            setFirstStep(!firstStep)
        } else {
            props.postApiRegister(email)
            history.push("/set-port")
        }
    }
    return (
        <Container className={s.root}>
            <Box className={s.mainContent}>
                <DialogTitle id="customized-dialog-title">
                    {firstStep ? 'Your Seed' : 'Your Email'}
                </DialogTitle>
                <DialogContent dividers>
                    <div className={s.contentText}>
                        {firstStep && <Typography component={'span'} variant={'button'}>Warning!</Typography>}
                        <Typography gutterBottom>
                            {firstStep
                                ? 'Please do not forget to save the SEED-code for future use of your wallet.'
                                : 'Enter your email to receive notification.'
                            }
                        </Typography>
                    </div>
                    {firstStep
                        ? <div>
                            <div className={s.textareaContainer}>
                                <div className={s.icon}>
                                    <CopySnackbar
                                        text={props.seed}
                                        alertText={'SEED-code copied!'}
                                    />
                                </div>
                                <TextareaAutosize
                                    className={s.textarea}
                                    rowsMin={4}
                                    rowsMax={4}
                                    readOnly
                                    aria-label="seed-code"
                                    placeholder="Seed Code"
                                    defaultValue={props.seed}/>
                            </div>
                        </div>
                        : <form className={s.form}>
                            <TextField
                                className={s.textField}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                error={!isError && email.length >= 1}
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                // autoComplete="current-email"
                                value={email}
                                onChange={emailHandler}
                                onKeyPress={kayPressHandler}
                            />
                        </form>
                    }
                </DialogContent>
                <DialogActions style={{display: 'flex'}}>
                    <Button
                        fullWidth
                        autoFocus
                        variant={'contained'}
                        color="secondary"
                        onClick={nextHandler}
                    >
                        next
                    </Button>
                </DialogActions>
            </Box>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        seed: state.settings.seed
    }
}

export default connect(mapStateToProps, {getSeedPubKey, postApiRegister})(SeedPage)
