import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, makeStyles, Typography} from "@material-ui/core";
import classNames from "classnames";
import Box from "@material-ui/core/Box";
import CloseIcon from '@material-ui/icons/Close';
import {useLocation} from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyle = makeStyles(theme => ({
    container: {
        display: "grid",
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
        textDecoration: "underline"
    },
    currentEmail: {
        color: theme.palette.secondary.main,
        textDecoration: "underline"
    }
}))


export default function EmailAddressLink(props) {
    const s = useStyle()
    const location = useLocation()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={s.container} style={{width: props.width, height: "100%"}}>
            {location.pathname === "/main-page" &&
            <Link component={'button'} color={'inherit'} className={s.link} onClick={handleClickOpen}>
                Change Email Address
            </Link>}
            <Dialog open={open} onClose={handleClose} classes={{paper: s.border}}  aria-labelledby="form-dialog-title">
                <Box>
                    <div className={s.closeItem}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <DialogTitle id="form-dialog-title" className={s.title} >Change Email Address</DialogTitle>
                    <DialogContent className={classNames(s.content )}>
                        <Typography>

                        </Typography>
                        <DialogContentText>
                            Current Email:  <span className={s.currentEmail}>test1@gmail.com</span>&nbsp;
                            Please, enter your New Email:
                        </DialogContentText>
                        <TextField
                            className={s.textField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            // error={!isError && email.length >= 1}
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            // autoComplete="current-email"
                            // value={email}
                            // onChange={emailHandler}
                            // onKeyPress={kayPressHandler}
                        />
                        <Typography>
                            Password:
                        </Typography>
                        <TextField
                            className={s.textField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            // error={!isError && email.length >= 1}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            // autoComplete="current-email"
                            // value={email}
                            // onChange={emailHandler}
                            // onKeyPress={kayPressHandler}
                        />
                    </DialogContent>
                    <DialogActions className={s.buttonBlock}>
                        <Button disabled size={'large'} onClick={handleClose} variant={'contained'} color="secondary">
                            Save
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}



