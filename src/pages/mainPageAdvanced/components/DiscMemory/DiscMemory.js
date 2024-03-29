import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styleForProgress = makeStyles(theme => ({
    root: {
        height: theme.spacing(3)
    }
}))

function LinearProgressWithLabel(props) {
    const s = styleForProgress()
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress classes={{root: props.height || s.root}} color={'secondary'} variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function DiscMemory(props) {
    const classes = useStyles();
    // const [progress, setProgress] = React.useState(60);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={props.value} height={props.height}/>
        </div>
    );
}