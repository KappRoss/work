import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {appBarStyles} from "./useStyles"
import {withRouter} from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import XaMiner from "../../assets/svg/XaMiner";
import ScPrimeSVG from "../../assets/svg/ScPrime";

function ButtonAppBar() {
    const classes = appBarStyles()
    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Grid container justify={'space-between'}>
                    <Grid item xs={false} sm={1} md={1} lg={1} xl={2}/>
                    <Grid item xs={12} sm={10} md={10} lg={10} xl={8}>
                        <Toolbar className={classes.toolbar}>
                            {
                                <>
                                    <XaMiner/>
                                    <ScPrimeSVG/>
                                </>
                            }
                        </Toolbar>
                    </Grid>
                    <Grid item xs={false} sm={1} md={1} lg={1} xl={2}/>
                </Grid>
            </AppBar>
        </div>
    )
}

export default withRouter(ButtonAppBar)