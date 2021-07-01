import {Button, CircularProgress, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {useHistory, useLocation} from "react-router-dom";
import PortLink from "./components/PortLink";
import EmailAddressLink from "./components/EmailAddressLink";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
    systemHealth: {
        gridArea: "systemHealth",
        width: "100%"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    systemBlock: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1),
        flexWrap: 'wrap',
    },
    storageItemsData: {
        display: "flex",
        // alignItems: "baseline",
        paddingRight: theme.spacing(3),
        "& p": {
            paddingRight: 3,
        },
        [theme.breakpoints.down('xs')]: {
            paddingRight: theme.spacing(0),
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
            // justifyContent: "space-around",
        }
    },
    resetButton: {
        display: 'block',
        color: theme.palette.error.main,
        borderColor: theme.palette.secondary.main
    },
    infoBlock: {
        display: "flex",
        flexDirection: 'column',
    },
    navButtonBlock: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flexEnd",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            // margin: theme.spacing(2, 1, 0, 1),
        },
        '& > *': {
            // margin: theme.spacing(0, 1, 0, 1),
        },
    },
    mainNavButton: {
        color: "inherit",
    },
    mainDashButton: {
        fontSize: '1.2rem',
        color: "inherit",
    },
    infoBlockItem: {
        display: "flex",
        flexWrap: 'wrap',
        // [theme.breakpoints.up('md')]: {
        //     // justifyContent: 'space'
        // }
    },
    changePort: {
        textDecoration: "underline"
    },
    announced: {
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    ports: {
        display: 'flex'
    },
    portsBlock: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            width: '100%',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            padding: theme.spacing(1, 0, 2, 0),
            margin: theme.spacing(1, 0, 1, 0),
        }
    },
    borderButton: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 0, 2, 0),
            borderBottom: '1px solid grey'
        }
    },
    gridBottom: {
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(1)
        }
    },
    portsWord: {
        [theme.breakpoints.up('xs')]: {
            display: "none"
        }
    },
    container: {
        alignItems: 'center',
        // justifyContent: 'inherit'
        justifyContent: "center"
    },
    portsItem: {
        paddingRight: theme.spacing(1)
    },
    infoSubItem: {
        display: "flex",
        flexDirection: 'column',
        // flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            flexDirection: 'column',
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    },
    atribute: {
        paddingRight: theme.spacing(1)
    },
    advBlock: {
        display: "flex",
        // alignItems: 'baseline',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            '& > div': {
                justifyContent: 'center',
                margin: 0
            }
        }
    },
    infoSubItemRight: {
        paddingLeft: theme.spacing(0),
        [theme.breakpoints.up(1550)]: {
            paddingLeft: theme.spacing(10),
        }
    },
    advBlockLast: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(2),
        }
    },
    buttonMainXS: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    hostingPort: {
        textDecoration: 'underline'
    }
}))

const SystemBlock = (props) => {
    const s = useStyles()
    const location = useLocation()
    const history = useHistory();
    const isMain = location.pathname === '/main-page'

    const toPage = () => {
        if (location.pathname === "/main-page") {
            history.push("/main-page-advanced")
        } else {
            history.push("/main-page")
        }
    }

    return (
        <Box justifyContent="space-between" className={s.systemBlock}>
            <Grid container className={s.container}>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                    <div className={s.infoBlock}>
                        <div className={s.infoBlockItem}>
                            <div className={s.infoSubItem}>
                                <div className={s.storageItemsData}>
                                    <Typography className={s.atribute} variant={'h5'}>
                                        <span className={s.announced}>Announced</span> Address:
                                    </Typography>
                                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
                                        <Typography variant={'h5'} color={"secondary"}>
                                            {props.ip}:
                                        </Typography>
                                        <Typography variant={'h5'} component={'div'}
                                                    color={'secondary'}>
                                            {typeof props.hosting_port === "undefined"
                                                ? <CircularProgress color={'secondary'} size={18}/>
                                                : props.hosting_port
                                            }
                                        </Typography>
                                    </div>
                                </div>
                                <div className={s.portsBlock}>
                                    <div className={s.storageItemsData}>
                                        <PortLink className={s.atribute} isMain={isMain}/>
                                        <div className={s.ports}>
                                            <Typography color={props.hosting_port_opened ? "secondary" : 'error'}
                                                        variant={'h5'}
                                                        className={s.portsItem}
                                                        component={'div'}>
                                                {typeof props.hosting_port === "undefined"
                                                    ? <CircularProgress color={'secondary'} size={18}/>
                                                    : props.hosting_port
                                                }
                                            </Typography>
                                            <Typography color={props.secondary_port_opened ? "secondary" : 'error'}
                                                        component={'div'} variant={'h5'}>
                                                {typeof props.secondary_port === "undefined"
                                                    ? <CircularProgress color={'secondary'} size={18}/>
                                                    : props.secondary_port
                                                }
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={s.storageItemsData}>
                                        <Typography className={s.atribute} variant={'h5'}><span
                                            className={s.portsWord}>Ports</span> Status:</Typography>
                                        <Typography
                                            variant={'h5'}
                                            color={props.hosting_port_opened && props.secondary_port_opened ? "secondary" : "error"}>
                                            {props.hosting_port_opened || props.secondary_port_opened ? "Open" : 'Error'}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={classNames(s.infoSubItem, s.infoSubItemRight)}>
                                <div className={s.storageItemsData}>
                                    <Typography className={s.atribute} variant={'h5'}>Blockchain
                                        Height:</Typography>
                                    <Typography variant={'h5'} component={'div'}
                                                color={"secondary"}>{props.block_height ||
                                    <CircularProgress color={'secondary'} size={18}/>}</Typography>
                                </div>
                                <div className={s.storageItemsData}>
                                    <Typography className={s.atribute} variant={'h5'}>Provider
                                        Version:</Typography>
                                    <Typography variant={'h5'} component={'div'}
                                                color={"secondary"}>{props.spd_version ||
                                    <CircularProgress color={'secondary'} size={18}/>}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2} className={s.gridBottom}>
                    <div className={s.navButtonBlock}>
                        <Grid container>
                            <Grid item xs={6} className={classNames(s.advBlock, s.advBlockLast)}>
                                <EmailAddressLink/>
                            </Grid>
                            <Grid item xs={6} className={s.buttonMainXS}>
                                <Button variant={'outlined'}
                                        color={"secondary"}
                                        className={s.mainNavButton}
                                        size={'large'}
                                        onClick={toPage}
                                >
                                    {location.pathname === "/main-page" ? 'advanced' : 'basic'}
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}
const mapStateToProps = state => {
    return {
        block_height: state.auth.block_height,
        hosting_port: state.advPage.ports.hosting_port,
        secondary_port: state.advPage.ports.secondary_port,
        ip: state.settings.ip_address,
        spd_version: state.advPage.spd_version,
        hosting_port_opened: state.advPage.ports.hosting_port_opened,
        secondary_port_opened: state.advPage.ports.secondary_port_opened
    }
}
export default connect(mapStateToProps, {})(SystemBlock)