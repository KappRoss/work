// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import {registerPageStyles} from "./useStyles";
// import { connect } from 'react-redux';
// import {auth} from '../../../redux/actions/auth'
// import {NavLink, withRouter} from "react-router-dom";
//
// const SignIn = (props) => {
//     const classes = registerPageStyles();
//
//     const [password, setPassword] = React.useState('')
//
//
//
//     const passwordHandler = (event) => {
//         event.preventDefault()
//         setPassword(event.target.value)
//         if (event.key === 'Enter') {
//             //loginHandler(login, password)
//         }
//     }
//
//     const kayPressHandler = (event) => {
//         if (event.key === 'Enter') {
//             // props.auth(login, password)
//         }
//     }
//
//     return (
//         <Container  maxWidth="xs">
//             <div className={classes.paper}>
//                 <Typography component="h1" variant="h5" className={classes.title}>
//                     Sign in to ScPrime
//                 </Typography>
//                 <form className={classes.form}>
//                     <TextField
//                         className={classes.root}
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                         value={password}
//                         onChange={passwordHandler}
//                         onKeyPress={kayPressHandler}
//                     />
//                     <Link component={NavLink} to={'/settings'}>
//                         <Button
//                             fullWidth
//                             variant="contained"
//                             color="secondary"
//                             className={classes.submit}
//                             //onClick={() => props.auth(login, password)}
//                         >
//                             Sign In
//                         </Button>
//                     </Link>
//                         <Grid item xs>
//                             <Link href="#" variant="body2" color={'inherit'}>
//                                 Forgot password?
//                             </Link>
//                         </Grid>
//                 </form>
//             </div>
//         </Container>
//     );
// }
//
// export default withRouter(connect(null, {auth})(SignIn))