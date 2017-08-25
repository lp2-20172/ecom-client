import React from 'react';
import { Route } from 'react-router'

import MainLayout from './components/MainLayout';

import Home from './components/Home';
import Layout from './components/Layout';
import Counter from './components/Counter';
import User from './components/User';
import ECom from './components/ECom';


export default (
    <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="layouts" component={Layout} />
        <Route path="counters" component={Counter} />
        <Route path="users" component={User} />
        <Route path="ecoms" component={ECom} />
    </Route>
)