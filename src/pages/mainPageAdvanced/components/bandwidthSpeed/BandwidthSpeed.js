import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const BandwidthSpeed = props => {
    return <>
        <Grid item xs={6} className={props.bandwidthTitles}>
            <Typography>Upload:</Typography>
            <Typography>Download:</Typography>
        </Grid>
        <Grid item xs={6} className={props.bandwidthData}>
            <div className={props.subData}>
                <Typography variant="h5" component={'p'} color={'secondary'}>
                    100
                </Typography>
                <Typography className={props.time}>mbps</Typography>
            </div>
            <div className={props.subData}>
                <Typography variant="h5" component={'p'} color={'secondary'}>
                    1000
                </Typography>
                <Typography className={props.time}>mbps</Typography>
            </div>
        </Grid>
    </>
}

export default BandwidthSpeed