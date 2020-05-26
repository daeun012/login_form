import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Container, Tab, Typography, Tabs, AppBar, Toolbar, Button, Link } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MyTabs = withStyles({
    indicator: {
        backgroundColor: '#fbc02d',
    },
    flexGrow: '1',
})((props) => <Tabs centered textColor="#fff" {...props} />);

const MyTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 80,
        fontSize: '15px',
        fontWeight: theme.typography.fontWeightRegular,
        margin: theme.spacing(0, 1),

        '&:hover': {
            color: '#fbc02d',
            opacity: 1,
        },
        '&$selected': {
            color: '#fbc02d',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#fbc02d',
        },
    },
    selected: {},
}))((props) => <Tab {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },

    appbar: {
        backgroundColor: '#000',
        color: '#fff',
    },
    title: { flexGrow: '1' },
    sign: {
        textAlign: 'end',
        flexGrow: '1',
    },

    button: {
        fontSize: '15px',
        margin: theme.spacing(0, 0, 0, 1),
    },
}));

function Navigator() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const preventDefault = (event) => event.preventDefault();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar className={classes.appbar}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Dcrew
                        </Typography>
                        <Typography className={classes.root}>
                            <Link to="/" onClick={preventDefault}>
                                Link
                            </Link>
                            <Link to="/crew/체육분과" onClick={preventDefault} color="inherit">
                                {'color="inherit"'}
                            </Link>
                            <Link href="#" onClick={preventDefault} variant="body2">
                                {'variant="body2"'}
                            </Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fbcc57',
            main: '#fbc02d',
            dark: '#af861f',
            contrastText: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        h4: {
            fontWeight: 500,
        },
    },
});

export default Navigator;
