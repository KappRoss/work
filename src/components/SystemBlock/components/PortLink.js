import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Link} from "@material-ui/core";
import PortNumberPage from "../../../pages/portNumberPage";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        // marginLeft: theme.spacing(2),
        flex: 1,
        textAlign: "center"
    },
    link: {
        textDecoration: "underline"
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1,0)
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PortLink() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link component={'button'}
                  color={'inherit'}
                  onClick={handleClickOpen}
                  className={classes.link}
            >Change Port Number</Link>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                            <Grid item xs={12} sm={10} md={10} lg={8} xl={6} className={classes.toolbar}>
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    Change Port Number
                                </Typography>
                                <Button autoFocus color="secondary" variant={'contained'} onClick={handleClose}>
                                    save
                                </Button>
                            </Grid>
                            <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <PortNumberPage/>
            </Dialog>
        </div>
    );
}
