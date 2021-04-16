import React from "react";
import {Grid, Typography} from "@material-ui/core";
import SystemBlock from "../../components/SystemBlock";
import {supportPageStyles} from "./useStyles";

const SupportPage = () => {
    const s = supportPageStyles()

    return (
        <Grid container className={s.container}>
            <Grid container item alignItems={'stretch'} spacing={2} sm={10} md={10} lg={8} xl={8}>
                <Grid item  xs={12} md={6}>
                    <div className={s.group}>
                        <Typography>
                            settings
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div className={s.group}>
                        <Typography>
                            reset
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} className={s.system}>
                    <div className={s.group}>
                        <SystemBlock/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SupportPage