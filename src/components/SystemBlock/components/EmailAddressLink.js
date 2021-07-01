import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IconButton, makeStyles} from "@material-ui/core";
import classNames from "classnames";
import Box from "@material-ui/core/Box";
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link";
import {connect} from "react-redux";
import is from 'is_js'
import {changeEmail} from "../../../redux/actions/settings";

const useStyle = makeStyles(theme => ({
    container: {
        display: "flex",
        minHeight: 30,
        // [theme.breakpoints.down('xs')]: {
        //     display: "flex",
        //     width: '100%',
        //     justifyContent: 'center'
        // }
    },
    closeItem: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    buttonBlock: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: "400px",
    },
    border: {
        padding: theme.spacing(1),
        boxShadow: `0px 0px 20px 10px black`,
    },
    title: {
        textAlign: "center",
    },
    label: {
        marginRight: 0,
    },
    textField: {
        paddingBottom: theme.spacing(2),
        "& .MuiOutlinedInput-input": {
            textOverflow: 'ellipsis',
        },
        "& .Mui-focused": {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "white",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    link: {
        textDecoration: "underline",
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    currentEmail: {
        color: theme.palette.secondary.main,
        textDecoration: "underline"
    },
    emailLinkBlock: {
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: "center",
            paddingTop: theme.spacing(1),
        }
    }
}))


const EmailAddressLink = (props) => {
    const s = useStyle()
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveNewEmail = () => {
        props.changeEmail(email)
        setOpen(false);
    };

    return (
        <div className={s.container} style={{width: props.width}}>
            <div className={s.emailLinkBlock}>
                <Link component={'button'} variant={'subtitle1'} color={'inherit'} className={s.link}
                      onClick={handleClickOpen}>
                    Contact Info
                </Link>
            </div>
            <Dialog open={open} onClose={handleClose} classes={{paper: s.border}} aria-labelledby="form-dialog-title">
                <Box>
                    <div className={s.closeItem}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <DialogTitle id="form-dialog-title" className={s.title}>Change Email Address</DialogTitle>
                    <DialogContent className={classNames(s.content)}>
                        <DialogContentText>
                            Current Email: <span className={s.currentEmail}>{props.email || 'not entered'}</span>&nbsp;
                            <br/>
                            Please, enter your New Email:
                        </DialogContentText>
                        <TextField
                            className={s.textField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            error={!is.email(email) && email.length >= 1}
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            // autoComplete="current-email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            // onKeyPress={kayPressHandler}
                        />
                    </DialogContent>
                    <DialogActions className={s.buttonBlock}>
                        <Button disabled={!is.email(email)} size={'large'} onClick={saveNewEmail} variant={'contained'}
                                color="secondary">
                            Save
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        email: state.settings.email
    }
}

export default connect(mapStateToProps, {changeEmail})(EmailAddressLink)




