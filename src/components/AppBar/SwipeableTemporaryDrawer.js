import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import {IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles( theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuIcon: {

    }
}))

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({left: false});

    const menuItems = [
        {text: 'status', icon: <GradeRoundedIcon color={'secondary'} fontSize={'large'}/>},
        {text: 'wallet', icon: <AccountBalanceWalletRoundedIcon color={'secondary'} fontSize={'large'}/>},
        {text: 'support', icon: <ContactSupportRoundedIcon color={'secondary'} fontSize={'large'}/>},
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={item.text}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                <Link component={NavLink} to={'/settings'} color={'inherit'}>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsApplicationsRoundedIcon color={'secondary'} fontSize={'large'}/>
                        </ListItemIcon>
                        <ListItemText primary={'Settings'}/>
                    </ListItem>
                </Link>
                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon color={'secondary'} fontSize={'large'}/>
                    </ListItemIcon>
                    <ListItemText primary={'Log Out'}/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div style={{zIndex: '10'}}>
            <React.Fragment>
                <IconButton className={classes.menuIcon} onClick={toggleDrawer('left', true)}>
                    <MenuIcon fontSize={'large'}/>
                </IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
