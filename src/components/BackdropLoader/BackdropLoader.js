import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function BackdropLoader({isButton, isOpen}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            {
                isButton &&
                <Button variant="outlined" color="primary" onClick={handleToggle}>
                    Show backdrop
                </Button>
            }
            <Backdrop className={classes.backdrop} open={isButton ? open : isOpen} onClick={handleClose}>
                <CircularProgress size={80} color="secondary" />
            </Backdrop>
        </div>
    );
}
BackdropLoader.propTypes = {
    isButton: PropTypes.bool,
    isOpen: PropTypes.bool,
}