import React from 'react'
import {welcomePageStyles} from "./useStyles";
import {Container, Typography} from "@material-ui/core";
import {useHistory, withRouter} from "react-router-dom";

const WelcomePage = () => {
    const s = welcomePageStyles()
    const history = useHistory();

    const nextStep = () => {
        history.push("/create-supervisor-password")  //supervisor-password
    }

    return (
        <Container className={s.root} onClick={nextStep}>
            <div className={s.mainWelcomeBlock}>
                <Typography variant={"h1"} className={s.welcomeText}>
                    Welcome!
                </Typography>
                <Typography variant={'h4'} color={'secondary'} className={s.continueText}>
                    click to continue
                </Typography>
            </div>
        </Container>
    )
}

export default withRouter(WelcomePage)