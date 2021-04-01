import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {appBarStyles} from "./useStyles"
import {Button, Link} from "@material-ui/core"
import {NavLink, withRouter} from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

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
                                props.location.pathname === '/main-page'
                                    ? <SwipeableTemporaryDrawer/>
                                    : <div/>
                            }

                            <Typography variant="h4" className={classes.title} color={'secondary'}>
                                ScPrime
                            </Typography>
                            {
                                props.location.pathname === '/signup'
                                    ? <Link component={NavLink} to={'/'} color={'inherit'}>
                                        <Button variant={'outlined'}>
                                            {'sign in'}
                                        </Button>
                                    </Link>
                                    : props.location.pathname === '/main-page'
                                    ? <div>
                                        <Link component={NavLink} to={'/'}>
                                            {
                                                window.innerWidth > 600 &&
                                                     <Button variant={'outlined'}>
                                                        {'log out'}
                                                    </Button>
                                            }
                                        </Link>
                                    </div>
                                    : <div/>
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