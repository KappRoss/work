import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import MuiAlert from '@material-ui/lab/Alert';
import FileCopyTwoToneIcon from "@material-ui/icons/FileCopyTwoTone";
import {makeStyles} from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyle = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.secondary.main
    }
}))

export default function CopySnackbar(props) {
    const s = useStyle()

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(props.text)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <IconButton type="submit" aria-label="search" onClick={handleClick}>
                <FileCopyTwoToneIcon/>
            </IconButton>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                // message=""
                // action={
                //     <React.Fragment>
                //
                //         {/*<div className={s.container}>*/}
                //         {/*    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>*/}
                //         {/*        <CloseIcon fontSize="small" />*/}
                //         {/*    </IconButton>*/}
                //         {/*</div>*/}
                //     </React.Fragment>
                // }
            >
                <Alert onClose={handleClose} severity="success">
                    {props.alertText || 'Xa-Miner address copied!'}
                </Alert></Snackbar>
        </>
    );
}