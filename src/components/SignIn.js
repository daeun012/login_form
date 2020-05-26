import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { TextField, Button, Container, Typography, Avatar, Grid, Box, Link, IconButton } from '@material-ui/core';

// material-ui 라는 UI Framework 사용
const useStyles = makeStyles((theme) => ({
    frame: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    findinfo: {
        padding: theme.spacing(3, 0, 0),
        borderTopColor: '#e4e4e5',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
    },
    bar: {
        margin: theme.spacing(0, 2, 0),
        display: 'inline-block',
        height: '13px',
        color: '#e4e4e5',
    },
    submit: {
        margin: theme.spacing(3, 0, 4),
    },
    find_info: {
        float: 'center',
    },
    social: {
        padding: theme.spacing(5, 0, 3),
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9bc0ff',
            main: '#82b1ff',
            dark: '#5b8bb2',
            contrastText: '#fff',
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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Dcrew
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const SignIn = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs">
                <div className={classes.frame}>
                    <Typography variant="h4">로그인</Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            size="medium"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="id"
                            label="아이디"
                            name="id"
                            autoFocus
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="비밀번호"
                            type="password"
                            variant="outlined"
                            size="medium"
                            margin="normal"
                            name="password"
                            fullWidth
                        />
                    </form>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} size="large">
                        로그인
                    </Button>
                    <Grid container justify="center" className={classes.findinfo}>
                        <Grid>
                            <Link href="#" variant="body2">
                                아이디 찾기
                            </Link>
                        </Grid>
                        <span className={classes.bar} aria-hidden="true">
                            |
                        </span>
                        <Grid>
                            <Link href="#" variant="body2">
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <span className={classes.bar} aria-hidden="true">
                            |
                        </span>
                        <Grid item>
                            <Link href="#" variant="body2">
                                회원가입
                            </Link>
                        </Grid>
                    </Grid>
                    <Typography className={classes.social} component="h1" variant="body2">
                        or Sign in with:
                    </Typography>
                    <Grid spacing={2} container justify="center">
                        <Grid item>
                            <IconButton aria-label="facebook">
                                <Avatar className={classes.large} alt="Remy Sharp" src="/images/facebook.png" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="naver">
                                <Avatar className={classes.large} alt="Remy Sharp" src="/images/naver.png" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="facebook">
                                <Avatar className={classes.large} alt="Remy Sharp" src="/images/카카오톡.png" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="google">
                                <Avatar className={classes.large} alt="Remy Sharp" src="/images/구글.png" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default SignIn;
