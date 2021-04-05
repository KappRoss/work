import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Redirect} from 'react-router';
import {makeStyles} from "@material-ui/core/styles";

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" style={{fontSize: 40}} component="div" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
const useStyles = makeStyles(theme => ({
    loaderContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '88.2vh',
        flexDirection: "column",
        "& p": {
            paddingTop: theme.spacing(3)
        }
    }
}))

export default function LoaderPage() {
    const s = useStyles()

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={s.loaderContainer}>

            <CircularProgressWithLabel value={progress} color={'secondary'} size={150}/>
            <Typography component={'p'}>
                Wait, please. Loading data...
            </Typography>
            {
                progress === 100 && <Redirect to={'/main-page'}/>
            }
        </div>
    )
}
