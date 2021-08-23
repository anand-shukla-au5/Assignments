import React, { useState } from 'react'
import { Grid, TextField, Checkbox, FormControlLabel, Link, Button, Paper, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paper: {
        height: '45vh',
        width: '23rem',
        padding: '2rem',
        margin: '10% auto'
    }
}));

function Login({ loginCredentials, login }) {
    const [loginCred, setloginCred] = useState({
        user: loginCredentials.user,
        pass: loginCredentials.pass,
    })
    const classes = useStyles()
    return (
        <Grid>
            <Paper className={classes.paper} elevation={5}>
                <Box>
                    <Typography variant='h4'>Login</Typography>
                </Box>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setloginCred((prev) => ({
                            ...prev,
                            user: e.target.value
                        }))}
                        value={loginCredentials.user}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => setloginCred((prev) => ({
                            ...prev,
                            pass: e.target.value
                        }))}
                        value={loginCredentials.pass}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => {
                            login(loginCred)
                        }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}
export default Login