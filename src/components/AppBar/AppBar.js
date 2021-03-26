import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {appBarStyles} from "./useStyles"
import {Button, Link} from "@material-ui/core"
import {NavLink} from "react-router-dom"
import Grid from "@material-ui/core/Grid";

export default function ButtonAppBar() {
    const classes = appBarStyles()

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Grid container justify={'space-between'}>
                    <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                    <Grid item xs={12} sm={10} md={10} lg={8} xl={6}>
                        <Toolbar>
                            <Typography variant="h4" className={classes.title} color={'secondary'}>
                                ScPrime
                            </Typography>
                            <Link component={NavLink} to={'/signup'} color={'inherit'}>
                                <Button variant={'outlined'}>
                                    Sign Up
                                </Button>
                            </Link>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={false} sm={1} md={1} lg={2} xl={2}/>
                </Grid>


            </AppBar>
        </div>
    )
}