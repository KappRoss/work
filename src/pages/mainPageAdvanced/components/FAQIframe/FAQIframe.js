import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    supportButtonsItem: {
        height: '100%'
    },
    closeItem: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export default function FAQIframe() {
    const s = useStyle()
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Button fullWidth variant={'outlined'}
                    color={'secondary'} size={'large'}
                    className={s.supportButtonsItem}
                    onClick={handleClickOpen}
            >FAQ</Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                maxWidth={'lg'}
                aria-labelledby="responsive-dialog-title"
                classes={{paper: s.root}}
            >
                <div className={s.header}>
                    <DialogTitle id="responsive-dialog-title">{"FAQ"}</DialogTitle>
                    <div className={s.closeItem}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon color={"secondary"}/>
                        </IconButton>
                    </div>
                </div>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="100%"
                        height="600"
                        src="https://scpri.me/xaminer/FAQ">
                    </iframe>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </>
    );
}
