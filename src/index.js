import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router'
import Home from './components/Home';
import Layout from './components/Layout';
import Counter from './components/Counter';
import User from './components/User';
import ECom from './components/ECom';


import { Provider } from 'react-redux'
import store from './store'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { green, red } from 'material-ui/colors';
import purple from 'material-ui/colors/purple';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// Create a theme instance.
const theme1 = createMuiTheme({
    palette: createPalette({
        primary: green,
        accent: red,
        type: 'light',
    }),
});
const themedark = createMuiTheme({
  palette: createPalette({
    type: 'dark', // Switching the dark mode on is a single property value change.
  }),
});

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple, // Purple and green play nicely together.
    accent: {
      ...green,
      A400: '#00e677',
    },
    error: red,
    
  }),
});

ReactDOM.render(
    
        <Provider store={store} >
            <MuiThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <Route component={MainLayout}>
                    <Route path="/" component={Home} />
                    <Route path="layouts" component={Layout} />
                    <Route path="counters" component={Counter} />
                    <Route path="users" component={User} />
                    <Route path="ecoms" component={ECom} />
                </Route>
            </Router>
            </MuiThemeProvider>
        </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
