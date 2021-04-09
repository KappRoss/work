// import React from "react"
// import {signUpPageStyles} from "./useStyles";
// import Grid from "@material-ui/core/Grid";
// import {Box, Button, Icon, Typography} from "@material-ui/core";
// import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
// import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
// import TextField from "@material-ui/core/TextField";
// import SeedDialogs from "./seedPopup";
// import Link from "@material-ui/core/Link";
// import {NavLink} from "react-router-dom";
//
// const SupervisorPassPage = () => {
//     const s = signUpPageStyles()
//     const [open, setOpen] = React.useState(false);
//     const [createMode, setMode] = React.useState(false)
//     const [formState, setFormControl] = React.useState({
//         isFormValid: false,
//         formControl: {
//             password: {
//                 value: '',
//                 type: 'password',
//                 label: 'Password',
//                 errorMessage: 'must have 8-16 characters',
//                 valid: false,
//                 touched: false,
//                 validation: {
//                     required: true,
//                     minLength: 7, //8
//                     maxLength: 17 //16
//                 }
//             },
//             // passwordRepeat: {
//             //     value: '',
//             //     type: 'password',
//             //     label: 'Password',
//             //     errorMessage: '', //Password mismatch
//             //     valid: false,
//             //     touched: false,
//             //     validation: {
//             //         required: true,
//             //         minLength: 7,
//             //         maxLength: 17
//             //     }
//             // }
//         }
//     })
//
//     const handleClickOpenCreate = () => {
//         setOpen(true);
//         setMode(prevState => !prevState)
//     };
//     const handleClickOpen = () => {
//         setOpen(true);
//         setMode(prevState => !prevState)
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     const validateControl = (value, validation) => {
//         if (!validation) {
//             return true
//         }
//         let isValid = true
//
//         if (validation.required) {
//             isValid = value.trim() !== '' && isValid
//         }
//         if (validation.minLength) {
//             isValid = (value.trim().length >= validation.minLength && value.trim().length <= validation.maxLength) && isValid
//         }
//
//         return isValid
//     }
//
//     const onChangeHandler = (event, controlName) => {
//         const forms = {...formState}
//         const control = {...forms.formControl[controlName]}
//         control.value = event.target.value.trim().toLowerCase()
//         control.touched = true
//         control.valid = validateControl(control.value, control.validation)
//         forms.formControl[controlName] = control
//         let isFormValid = true
//         Object.keys(forms.formControl).forEach(name => {
//             isFormValid = forms.formControl[name].valid
//         })
//         forms.isFormValid = isFormValid
//         setFormControl(forms)
//     }
//
//     // const renderPasswordInput = () => {
//     //     return Object.keys(formState.formControl).map((controlName, index) => {
//     //         const control = formState.formControl[controlName]
//     //         return (<>
//     //                     <TextField
//     //                         key={index}
//     //                         className={s.root}
//     //                         required
//     //                         fullWidth
//     //                         variant="outlined"
//     //                         margin="normal"
//     //                         type={control.type}
//     //                         value={control.value}
//     //                         error={!control.valid && index === 0 && control.touched}
//     //                         label={control.label}
//     //                         helperText={!control.valid && control.errorMessage}
//     //                         onChange={event => onChangeHandler(event, controlName)}
//     //                     />
//     //                 {/*{index === 0*/}
//     //                 {/*&& <Typography*/}
//     //                 {/*    className={s.repeatText}*/}
//     //                 {/*    variant={'caption'}*/}
//     //                 {/*    component={'p'}*/}
//     //                 {/*>Please, repeat your password</Typography>}*/}
//     //             </>
//     //         )
//     //     })
//     // }
//
//     return (
//         <Grid container className={s.container}>
//             <Grid item container xs={12} sm={8} md={7} lg={5} xl={4}>
//                 <Grid item xs={12} className={s.title}>
//                     <Typography variant={'h3'}>
//                         Buy Storage and Earn.
//                     </Typography>
//                     <Typography variant={'h6'} style={{fontWeight: '400'}}>
//                         Get Started by Wallet Now.
//                     </Typography>
//                 </Grid>
//                 <Grid item container  xs={12} sm={12} className={s.registerBlock}>
//                     <Grid item xs={12} sm={12} md={6} className={s.registerBlockItem}>
//                         <div className={s.registerItems}>
//                             <Box className={s.subTitle}>
//                                 <AccountBalanceWalletRoundedIcon fontSize={'large'} color={'secondary'}/>
//                                 <Typography>
//                                     Wallet
//                                 </Typography>
//                             </Box>
//                             <Box>
//                                 <Typography>
//                                     Lorem ipsum dolor sit amet
//                                 </Typography>
//                             </Box>
//                             <form className={s.form}>
//                                 {/*{renderPasswordInput()}*/}
//                                 <TextField
//                                     className={s.root}
//                                     required
//                                     fullWidth
//                                     variant="outlined"
//                                     margin="normal"
//                                     type={formState.formControl.password.type}
//                                     value={formState.formControl.password.value}
//                                     error={!formState.formControl.password.valid && formState.formControl.password.touched}
//                                     label={formState.formControl.password.label}
//                                     helperText={!formState.formControl.password.valid && formState.formControl.password.errorMessage}
//                                     onChange={event => onChangeHandler(event, 'password')}
//                                 />
//                                 <Button
//                                     disabled={!formState.isFormValid}
//                                     fullWidth
//                                     size="large"
//                                     variant={'outlined'}
//                                     color="secondary"
//                                     //className={classes.submit}
//                                     className={s.button}
//                                     onClick={handleClickOpenCreate}
//                                 >
//                                     Create Wallet</Button>
//                             </form>
//                         </div>
//                     </Grid>
//                     <Grid item xs={12} sm={12} md={6} className={s.registerBlockItem}>
//                         <div className={s.registerItems}>
//                             <Box className={s.subTitle}>
//                                 <LanguageRoundedIcon fontSize={'large'} color={'secondary'}/>
//                                 <Typography>
//                                     Login
//                                 </Typography>
//                             </Box>
//                             <Box className={s.description}>
//                                 <Typography>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisi augue.
//                                     Sed ullamcorper neque consectetur, convallis nisl ut, convallis lacus.
//                                 </Typography>
//                             </Box>
//                             <Button
//                                 fullWidth
//                                 size="large"
//                                 variant="contained"
//                                 color="secondary"
//                                 className={s.button}
//                                 endIcon={<Icon>exit_to_app_rounded_icon</Icon>}
//                                 onClick={handleClickOpen}
//                             >Enter Wallet</Button>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Link component={NavLink} to={'/'} color={"secondary"}>to welcome</Link>
//             <SeedDialogs open={open} mode={createMode} handleClose={handleClose}/>
//         </Grid>
//     )
// }
//
// export default SupervisorPassPage