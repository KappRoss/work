import React, {useEffect} from 'react';
//import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {getAppliance, getApplianceStatus} from "../../redux/actions/auth";

const useStyles = makeStyles(theme => ({
    loaderContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        "& p": {
            paddingTop: theme.spacing(3)
        }
    }
}))

const LoaderPage = (props) => {
    const s = useStyles()

    // useEffect(() => {
    //     props.getAppliance()  // error ? firstTime - true : firstTime - false
    // })

    useEffect(() => {
        if (props.isFirstTime) {
            // while (!props.synced) {
            props.getApplianceStatus() // synced: true or false
            // }
        }
    })  /// until synced gets true.  default: false

    return (
        <div className={s.loaderContainer}>
            {props.loading || !props.synced
                ? <>
                    <CircularProgress color="secondary" size={150}/>
                    <Typography component={'p'}>
                        Wait, please. Loading data...
                    </Typography>
                </>
                : <>
                    {props.synced && props.isFirstTime && <Redirect to={'/seed'}/>}
                    {props.synced && (props.isFirstTime === false) && <Redirect to={'/main-page'}/>}
                </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFirstTime: state.auth.isFirstTime,
        synced: state.auth.synced,
        loading: state.auth.loading
    }
}

// LoaderPage.propTypes = {
//     isFirstTime: PropTypes.bool.isRequired,
//     synced: PropTypes.bool.isRequired,
//     loading: PropTypes.bool.isRequired,
// }

export default connect(mapStateToProps, {getAppliance, getApplianceStatus})(LoaderPage)