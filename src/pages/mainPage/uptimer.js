import React from 'react'
import Timer from "react-compound-timer"
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useClasses = makeStyles(theme => ({
    time: {
        color: theme.palette.secondary.dark
    }
}))

const UpTimer = () => {
    const s = useClasses()

    return (
        <Timer
            initialTime={600000000}
        >
            <Timer.Days formatValue={value =>
                <Typography variant="h5" component={'p'} color={'secondary'}>{value}</Typography>
            }/><Typography className={s.time}>D</Typography>

            <Timer.Hours formatValue={value =>
                <Typography variant="h5" component={'p'} color={'secondary'}>{value}</Typography>
            }/><Typography className={s.time}>H</Typography>

            <Timer.Minutes formatValue={value =>
                <Typography variant="h5" component={'p'} color={'secondary'}>{value}</Typography>
            }/><Typography className={s.time}>M</Typography>
        </Timer>
    )
}

export default UpTimer