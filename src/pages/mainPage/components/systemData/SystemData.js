import React from 'react'
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    resources: {
        display: 'flex',
        flexDirection: 'row',
        height: "100%"
    },
    resourcesTitles: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "end",
        justifyContent: 'space-between'
    },
    resourcesData: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: "end",
        justifyContent: 'space-between'
    },
    subData: {
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: 'baseline',
        "& > p": {
            paddingLeft: theme.spacing(0.5)
        }
    },
    resourcesItem: {
        display: "flex",
        flexDirection: "row"
    },
}))

const SystemData = (props) => {
    const s = useStyles()
    return (
        <Grid item container xs={12} className={classNames(props.classes.card, s.resources)}>
            <Grid item xs={6} className={s.resourcesTitles}>
                <Typography variant="h5">CPU:</Typography>
                <Typography variant="h5">RAM:</Typography>
                <Typography variant="h5">network:</Typography>
            </Grid>
            <Grid item xs={6} className={s.resourcesData}>
                <div className={s.subData}>
                    <Typography variant="h5" component={'p'} color={'secondary'}>
                        7.5
                    </Typography>
                    <Typography className={props.classes.time}>
                        %
                    </Typography>
                </div>
                <div className={s.subData}>
                    <Typography variant="h5" component={'p'} color={'secondary'}>
                        12
                    </Typography>
                    <Typography className={props.classes.time}>
                        GB
                    </Typography>
                </div>
                <div className={s.subData}>
                    <Typography variant="h5" component={'p'} color={'secondary'}>
                        Good
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default SystemData