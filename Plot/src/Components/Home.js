import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Box } from '@material-ui/core'
import Plot from 'react-plotly.js';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    AppBar: {
        width: '100%',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Home({ logout, }) {
    const classes = useStyles();

    return (
        <Grid justifyContent='space-around' container className={classes.root}>
            <AppBar className={classes.AppBar} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Health Status
                    </Typography>
                    <Button onClick={() => {
                        logout()
                    }} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Box p={2}>
                <Grid
                    container
                    item
                    direction="row"
                    spacing={5}
                    justifyContent='space-around'
                    alignItems="center" xs={12}>
                    <Grid item xs={12} lg={6} md={6} sm={8}>
                        <Plot
                            data={[
                                {
                                    x: [1, 2, 3],
                                    y: [2, 6, 3],
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: 'red' },
                                },
                                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                            ]}
                            layout={{ title: 'Glycosylated hemoglobin', colorway: ['#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844'] }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sm={8}>
                        <Plot
                            data={[
                                {
                                    x: [1, 2, 3],
                                    y: [2, 6, 3],
                                    type: 'histogram',
                                    mode: 'lines+markers',
                                    marker: { color: 'red' },
                                },
                                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                            ]}
                            layout={{ title: 'Intense pulsed light', colorway: ['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844'] }}
                        />
                    </Grid>
                </Grid>
                <Grid container
                    item
                    direction="row"
                    justifyContent='space-around'
                    spacing={5}
                    alignItems="center" xs={12}>
                    <Grid item xs={12} md={6} sm={8}>
                        <Plot
                            data={[
                                {
                                    values: [16, 15, 12, 6, 5, 4, 42],
                                    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
                                    domain: { column: 0 },
                                    name: 'GHG Emissions',
                                    hoverinfo: 'label+percent+name',
                                    hole: .4,
                                    type: 'pie'
                                }, {
                                    values: [27, 11, 25, 8, 1, 3, 25],
                                    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
                                    text: 'CO2',
                                    textposition: 'inside',
                                    domain: { column: 1 },
                                    name: 'CO2 Emissions',
                                    hoverinfo: 'label+percent+name',
                                    hole: .4,
                                    type: 'pie'
                                }
                            ]}
                            layout={{ title: 'Alpha cells', colorway: ['#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844'] }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sm={8}>
                        <Plot
                            data={[
                                {
                                    values: [19, 26, 55],
                                    labels: ['Residential', 'Non-Residential', 'Utility'],
                                    type: 'pie'
                                }
                            ]}
                            layout={{ title: 'Age-related macular degeneration', colorway: ['#a262a9', '#9999ff', '#182844'] }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
export default Home