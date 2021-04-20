import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Checkbox, FormControlLabel, makeStyles, Typography} from "@material-ui/core";
import classNames from "classnames";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

const useStyle = makeStyles(theme => ({
    container: {
      display: "grid",
        // width: "95%"
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
      // border: `2px solid ${theme.palette.secondary.main}`,
      //   border: '2px solid',
      //   borderColor: theme.palette.secondary.main,
      //   borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        boxShadow: `0px 0px 20px 10px black`,
        // ${theme.palette.secondary.main}
    },
    title: {
      textAlign: "center"
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

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default function SendCoinsDialog(props) {
    const s = useStyle()

    const [open, setOpen] = React.useState(false);

    const [values, setValues] = React.useState({
        numberformat: '1231',
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={s.container} style={{width: props.width}}>
            <Button variant={'contained'} color={'secondary'} size={'large'} onClick={handleClickOpen}>
                {props.text || 'send coins'}
            </Button>
            <Dialog open={open} onClose={handleClose} classes={{paper: s.border}}  aria-labelledby="form-dialog-title">
                <Box>
                    <DialogTitle id="form-dialog-title" className={s.title}>Send Coins To</DialogTitle>
                    <DialogContent className={classNames(s.content )}>
                        <DialogContentText>
                        </DialogContentText>
                        <Typography>
                            Amount:
                        </Typography>
                        <TextField
                            className={s.textField}
                            required
                            variant="outlined"
                            // value={}
                            // error={!valid && value.length >= 1}
                            // helperText={'Not a valid XLM address'}
                            // onChange={event => onChangeHandler(event)}
                            autoFocus
                            margin="dense"
                            // label="Amount"
                            value={values.numberformat}
                            onChange={handleChange}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                            fullWidth
                        />
                        <Typography>
                            Wallet Address:
                            {/*///wallet-address-validator*/}
                        </Typography>
                        <TextField
                            className={s.textField}
                            required
                            variant="outlined"
                            margin="dense"
                            type="text"
                            // error={!valid && value.length >= 1}
                            // helperText={'Not a valid XLM address'}
                            // label="Wallet Address"
                            fullWidth
                        />
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
                            label={"Save Address for Auto-configuration"}
                            classes={{root: s.label}}
                        />
                    </DialogContent>
                    <DialogActions className={s.buttonBlock}>
                        <Button size={'large'} onClick={handleClose} variant={'contained'} color="secondary">
                            send
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}
