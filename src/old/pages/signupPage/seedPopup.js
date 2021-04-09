// import React from 'react';
// import {withStyles} from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import {makeStyles, TextareaAutosize} from "@material-ui/core";
// import Link from "@material-ui/core/Link";
// import {NavLink} from "react-router-dom";
//
// const styles = (theme) => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(2),
//     },
//     closeButton: {
//         position: 'absolute',
//         right: theme.spacing(1),
//         top: theme.spacing(1),
//         color: theme.palette.grey[500],
//     },
// });
//
// const DialogTitle = withStyles(styles)((props) => {
//     const {children, classes, onClose, ...other} = props;
//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//             <Typography variant="h6">{children}</Typography>
//             {onClose ? (
//                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//                     <CloseIcon/>
//                 </IconButton>
//             ) : null}
//         </MuiDialogTitle>
//     );
// });
//
// const DialogContent = withStyles((theme) => ({
//     root: {
//         padding: theme.spacing(3,2,2,2),
//     },
// }))(MuiDialogContent);
//
// const DialogActions = withStyles((theme) => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(2,1,2,1),
//     },
// }))(MuiDialogActions);
//
// const useStyle = makeStyles(theme => ({
//     container: {
//         backgroundColor: theme.palette.primary.main,
//         padding: theme.spacing(1),
//         boxShadow: " 0px 0px 20px 5px #2074ee",
//     },
//     backdrop: {
//         backgroundColor: 'rgba(0,0,0,0.7)'
//     },
//     textarea: {
//         resize: "none",
//         width: '100%',
//         borderColor: theme.palette.secondary.main,
//         borderRadius: 5,
//         background: theme.palette.primary.main,
//         color: theme.palette.text.secondary,
//         padding: theme.spacing(3)
//     },
//     contentText: {
//         border: '1px solid ',
//         borderColor: theme.palette.secondary.main,
//         borderRadius: 5,
//         padding: theme.spacing(2),
//         marginBottom: theme.spacing(2),
//         "& span": {
//             color: theme.palette.warning.main
//         },
//         "& p": {
//             padding: theme.spacing(1,1,0,1),
//         }
//     }
// }))
//
// export default function SeedDialogs(props) {
//     const s = useStyle()
//
//     return (
//         <div>
//             <Dialog
//                 onClose={props.handleClose}
//                 aria-labelledby="customized-dialog-title"
//                 open={props.open}
//                 classes={{paper: s.container, container: s.backdrop}}
//             >
//                 <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
//                     Your Seed
//                 </DialogTitle>
//                 <DialogContent dividers>
//                     <div className={s.contentText}>
//                         <Typography component={'span'}  variant={'button'}>Warning!</Typography>
//                         <Typography gutterBottom>
//                             Please do not forget to save the SEED-code for future use of your wallet.
//                         </Typography>
//                     </div>
//                     <TextareaAutosize
//                         className={s.textarea}
//                         rowsMin={5}
//                         rowsMax={5}
//                         readOnly={props.mode}
//                         aria-label="seed-code"
//                         placeholder="Enter Seed Code"
//                         defaultValue="seed-code seed-code seed-code seed-code seed-code seed-code"
//                     />
//                 </DialogContent>
//                 <DialogActions style={{display: 'flex'}}>
//                     {/*<Button fullWidth variant={'outlined'} onClick={props.handleClose} color="secondary">*/}
//                     {/*    Cancel*/}
//                     {/*</Button>*/}
//                     <Link style={{width: '100%'}} component={NavLink} to={'/loader'}  color={'secondary'}>
//                         <Button  fullWidth autoFocus variant={'contained'} onClick={props.handleClose} color="secondary">
//                             login witch seed
//                         </Button>
//                     </Link>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }
