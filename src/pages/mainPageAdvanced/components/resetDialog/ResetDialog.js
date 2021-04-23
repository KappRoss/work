import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Divider, IconButton, makeStyles, Typography} from "@material-ui/core";
import classNames from "classnames";
import Box from "@material-ui/core/Box";
import CloseIcon from '@material-ui/icons/Close';

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
        // flexDirection: 'column',
        justifyContent: 'flex-end',
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
        color: 'red',
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
}))


export default function ResetDialog(props) {
    const s = useStyle()

    const [open, setOpen] = React.useState(false);
    const [stepTwo, setStepTwo] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (stepTwo === true) {
            setStepTwo(!stepTwo)
        }

    };

    return (
        <div className={s.container} style={{width: props.width, height: "100%"}}>
            <Button fullWidth variant={'outlined'}
                    color={'secondary'} size={'large'}
                    className={classNames(props.redButton, props.supportButtonsItem)}
                    onClick={handleClickOpen}
            >
                <div className={props.redButtonSubText}>
                    System Reset
                    <span style={{fontSize: '0.5rem'}}>Use only if instructed, risk of entire wallet loss</span>
                </div>
            </Button>
            <Dialog open={open} onClose={handleClose} classes={{paper: s.border}} aria-labelledby="form-dialog-title">
                <Box>
                    <div className={s.closeItem}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <DialogTitle id="form-dialog-title" className={s.title}>SYSTEM RESET</DialogTitle>
                    <br/>
                    <DialogContent className={classNames(s.content)}>
                        <DialogContentText>
                            {
                                stepTwo
                                    ? 'This action is irreversible! Apply or decline?'
                                    : 'Are you sure you want to reset the system? This action is irreversible!'
                            }
                        </DialogContentText>
                        <br/>
                        <br/>
                        {stepTwo ? null : <Divider/>}

                        {stepTwo && <>
                            <Typography>
                                Password:
                            </Typography>
                            <TextField
                                className={s.textField}
                                required
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                // error={!valid && value.length >= 1}
                                // helperText={'Not a valid XLM address'}
                                // label="Amount"
                                // value={values.numberformat}
                                // onChange={handleChange}
                                // name="numberformat"
                                // id="formatted-numberformat-input"
                                // InputProps={{
                                //     inputComponent: NumberFormatCustom,
                                // }}
                            />
                        </>
                        }
                    </DialogContent>
                    <DialogActions className={s.buttonBlock}>
                        {
                            stepTwo
                                ? <>
                                    <Button fullWidth size={'large'} onClick={handleClose} variant={'outlined'}
                                            color="secondary">
                                        Cancel
                                    </Button>
                                    <Button fullWidth disabled size={'large'} onClick={handleClose} variant={'contained'} color="secondary">
                                        Reset
                                    </Button>
                                </>
                                : <>
                                    <Button fullWidth size={'large'} onClick={handleClose} variant={'outlined'}
                                            color="secondary">
                                        Cancel
                                    </Button>
                                    <Button fullWidth size={'large'} onClick={() => setStepTwo(!stepTwo)} variant={'contained'}
                                            color="secondary">
                                        Yes
                                    </Button>
                                </>
                        }
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}
