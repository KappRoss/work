import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#0b0c0e',
        },
        secondary: {
            main: '#2074ee',
            dark: '#3062a8'
        },
        background: {
            paper: '#0b0c0e',
            default: '#0b0c0e'
        }
    },
});