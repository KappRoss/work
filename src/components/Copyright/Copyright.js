import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import XaMiner from "../../assets/svg/XaMiner";
import ScPrimeSVG from "../../assets/svg/ScPrime";
import {Box, Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "flex-end",
    }
}))

function Copyright() {
    const s = useStyles()
    return (
        <Container maxWidth={'lg'} className={s.container}>
            <div>
                <XaMiner/>
            </div>

            <Typography variant="body2"  align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <div>
                <ScPrimeSVG/>
            </div>

        </Container>

    );
}

export default Copyright