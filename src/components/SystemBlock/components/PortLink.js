import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import {connect} from "react-redux";
import {onSave, setPorts} from "../../../redux/actions/settings";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        minHeight: 30,
        // marginRight: 10
    },
    appBar: {
        position: 'relative',
    },
    title: {

        textAlign: "center"
    },
    link: {
        textDecoration: "underline",
        height: '100%',
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1, 0)
    },
    linkBlock: {
        [theme.breakpoints.down('xs')]: {
            // display: "flex",
            // justifyContent: "center",
            paddingTop: theme.spacing(1)
        }
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PortLink = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleSave = () => {
        setOpenSnackbar(false)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const onSaveHandler = () => {
        props.onSave(true)
        setOpenSnackbar(true)
    }

    useEffect(() => {
        return () => {
            props.onSave(false)
        }
    })

    return (
        <div className={classes.container}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSave}
            >
                <Alert onClose={handleSave} severity={props.setPortsError ? 'error' : "success"}>
                    {props.setPortsError ? 'Error while saving ports' : 'Ports saved!'}
                </Alert></Snackbar>
            <div className={classes.linkBlock}>
                <Link component={'button'}
                      color={'inherit'}
                      onClick={handleClickOpen}
                      className={classes.link}
                      variant={'subtitle1'}
                ><Typography className={props.className}
                             variant={props.isMain ? 'h5' : 'h6'}>Ports:</Typography></Link>
            </div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                            <Grid item xs={12} sm={10} md={10} lg={8} xl={6} className={classes.toolbar}>
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon/>
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    Change Port Number
                                </Typography>
                                <Button color="secondary" variant={'contained'} onClick={onSaveHandler}>
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

const mapStateToProps = state => {
    return {
        setPortsError: state.settings.setPortsError
    }
}

export default connect(mapStateToProps, {setPorts, onSave})(PortLink)
