import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {appBarStyles} from "./useStyles"
import {withRouter} from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import XaMiner from "../../assets/svg/XaMiner";
import ScPrimeSVG from "../../assets/svg/ScPrime";

function ButtonAppBar(props) {
    const classes = appBarStyles()
    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Grid container justify={'space-between'}>
                    <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                    <Grid item xs={12} sm={10} md={10} lg={8} xl={6}>
                        <Toolbar className={classes.toolbar}>
                            {
                                props.location.pathname === '/main-page' &&
                                <>
                                    <XaMiner/>
                                    <ScPrimeSVG/>
                                </>
                            }
                        </Toolbar>
                    </Grid>
                    <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                </Grid>
            </AppBar>
        </div>
    )
}

export default withRouter(ButtonAppBar)