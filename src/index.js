import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router'
import Footer from './components/Footer';
import Layout from './components/Layout';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Footer}/>
            <Route path="/users" component={Layout}/>
        </Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
