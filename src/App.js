import './App.css'
import {Switch, Route} from 'react-router-dom'
import SignUpPage from "./pages/signupPage";
import AppBar from "../src/components/AppBar";
import {Container, CssBaseline, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Copyright from "./components/Copyright";
import React from "react";
import SettingsPage from './pages/settingsPage';
import MainPageView from "./pages/mainPage";
import LoaderPage from "./pages/loaderPage";

const useStyle = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    content: {
        backgroundColor: theme.palette.primary.main,
        // height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1,0,1,0),
    },
    app: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
}))

const App = () => {
    const classes = useStyle()

    return (
        <div className={classes.app}>
            <CssBaseline/>
            <AppBar/>
            <main style={{display: "contents"}}>
                <div className={classes.content}>
                    <Container maxWidth="xl">
                        <Switch>
                            <Route exact path={'/'} component={SignUpPage}/>
                            <Route exact path={'/settings'} component={SettingsPage}/>
                            <Route exact path={'/loader'} component={LoaderPage}/>
                            <Route exact path={'/main-page'} component={MainPageView}/>
                        </Switch>
                    </Container>
                </div>
            </main>
            <footer>
                <div className={classes.footer}>
                    <Box mt={2}>
                        <Copyright/>
                    </Box>
                </div>
            </footer>
        </div>
    )
}

export default App
