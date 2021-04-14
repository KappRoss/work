import './animateSwitсher.css'
import {Switch, Route, useLocation} from 'react-router-dom'
import SupervisorPassPage from "./pages/supervisorPassPage";
import AppBar from "../src/components/AppBar";
import {Container, CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import SettingsPage from './pages/settingsPage';
import MainPageView from "./pages/mainPage";
import LoaderPage from "./pages/loaderPage";
import WelcomePage from "./pages/welcomePage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import SeedPage from "./pages/seedPage";

const useStyle = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    content: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    },
    app: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
    }
}))

const App = () => {
    const classes = useStyle()
    let location = useLocation()

    let currLocation = location.pathname

    return (
        <div className={classes.app}>
            <CssBaseline/>
            {currLocation === '/loader' && <AppBar/>} {/*temporary solution*/}
            {currLocation === '/main-page' && <AppBar/>}
            <main>
                <div className={classes.content}>
                    <Container maxWidth="xl">
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                in={true}
                                appear={true}
                                timeout={1000}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route exact path={'/'} component={WelcomePage}/>
                                    <Route exact path={'/supervisor-password'} component={SupervisorPassPage}/>
                                    <Route exact path={'/seed'} component={SeedPage}/>
                                    <Route exact path={'/settings'} component={SettingsPage}/>
                                    <Route exact path={'/loader'} component={LoaderPage}/>
                                    <Route exact path={'/main-page'} component={MainPageView}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </Container>
                </div>
            </main>
            {/*{currLocation === '/loader' && <Footer footerStyle={classes.footer}/>}*/}
            {/*{currLocation === '/main-page' && <Footer footerStyle={classes.footer}/>}*/}
        </div>
    )
}

export default App
