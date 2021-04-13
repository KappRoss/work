import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Container, TextareaAutosize} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {seedPageStyles} from "./useStyles";

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

    return (
        <Container className={s.root} >
            <div className={s.mainContent}>
                <DialogTitle id="customized-dialog-title">
                    Your Seed
                </DialogTitle>
                <DialogContent dividers>
                    <div className={s.contentText}>
                        <Typography component={'span'} variant={'button'}>Warning!</Typography>
                        <Typography gutterBottom>
                            Please do not forget to save the SEED-code for future use of your wallet.
                        </Typography>
                    </div>
                    <TextareaAutosize
                        className={s.textarea}
                        rowsMin={5}
                        rowsMax={5}
                        readOnly
                        aria-label="seed-code"
                        placeholder="Enter Seed Code"
                        defaultValue="seed-code seed-code seed-code seed-code seed-code seed-code"
                    />
                </DialogContent>
                <DialogActions style={{display: 'flex'}}>
                    <Button
                        fullWidth
                        autoFocus
                        variant={'contained'}
                        color="secondary"
                        onClick={() =>  history.push("/loader")}
                    >
                        login witch seed
                    </Button>
                </DialogActions>
            </div>
        </Container>
    )
}

export default SeedPage
