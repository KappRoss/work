// import React, {useEffect} from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Typography from '@material-ui/core/Typography';
// import {Redirect} from 'react-router';
// import {makeStyles} from "@material-ui/core/styles";
// import {connect} from "react-redux";
// import {getAppliance, getApplianceStatus, isApiRegistered} from "../../redux/actions/auth";
// import {dashboardInfo} from "../../redux/actions/advPage";
//
//
// const useStyles = makeStyles(theme => ({
//     loaderContainer: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         display: "flex",
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: "column",
//         "& p": {
//             paddingTop: theme.spacing(3)
//         }
//     }
// }))
//
// const LoaderPage = ({
//                         getAppliance, getApplianceStatus, synced, error, isRegistered, isApiRegistered,
//                         emailSaved, status, settingsCompleted, isAppSent, applianceError
//                     }) => {
//     const s = useStyles()
//
//     //1.getAppliance() if error -> seedPage; else -> mainDashboard;
//     //2.getApplianceStatus() if synced true -> next page; else -> repeat request
//     //3.
//
//     useEffect(() => {
//         let intervalId;
//         getAppliance()
//             .then(() => getApplianceStatus())
//             .then(() => {
//                 intervalId = setInterval(() => {
//                     !synced && getApplianceStatus()
//                 }, 1000 * 10)
//             })
//         return () => clearInterval(intervalId)
//     }, [])
//
//     // useEffect(() => {
//     //     if (synced && !emailSaved) {
//     //         isApiRegistered()
//     //     }
//     // }, [synced])  /// until synced gets true.  default: false
//
//     // useEffect(() => {
//     //     let intervalId = setInterval(() => {
//     //         if (emailSaved === true) {
//     //             getAppliance()
//     //         }
//     //         if ((error || synced) && !emailSaved) {
//     //             getApplianceStatus()
//     //         }
//     //     }, 1000 * 10) // in milliseconds
//     //     return () => clearInterval(intervalId)
//     // })
//     return (
//         <div className={s.loaderContainer}>
//             {synced    //(emailSaved? !status : (settingsCompleted ? !status : !synced))
//                 ? <>
//                     {applianceError && synced && !settingsCompleted && <Redirect to={'/seed'}/>}
//                     {!applianceError && synced && settingsCompleted && <Redirect to={'/main-page'}/>}
//                     {/*на проде заменить settingsCompleted на emailSaved */}
//                     {/*isRegistered  !dash_error &&*/}
//                     {/*!isRegistered*/}
//                     {/*{emailSaved && status && <Redirect to={'/set-port'}/>}*/}
//                     {/*{!settingsCompleted && synced && isRegistered &&  <Redirect to={'/main-page'}/>}   /!*isRegistered  !dash_error &&*!/*/}
//                     {/*//(isFirstTime === false)*/}
//                 </>
//                 : <>
//                     <CircularProgress color="secondary" size={150}/>
//                     <Typography component={'p'}>
//                         Wait, please. Data synchronization...
//                     </Typography>
//                 </>
//
//
//             }
//         </div>
//     )
// }
//
// const mapStateToProps = state => {
//     return {
//         synced: state.auth.synced,
//         // synced: true,
//         loading: state.auth.loading,
//         settingsCompleted: state.settings.settingsCompleted,
//         isAppSent: state.auth.isAppSent,
//         status: state.settings.status,
//         error: state.auth.error,
//         isRegistered: state.auth.isRegistered,
//         // isRegistered: true,
//         dash_error: state.advPage.dash_error,
//         emailSaved: state.settings.emailSaved,
//         applianceError: state.auth.applianceError
//     }
// }
//
// export default connect(mapStateToProps, {getAppliance, getApplianceStatus, dashboardInfo, isApiRegistered})(LoaderPage)