import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Chat, Join } from '../containers';

const Routes = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
);

export default Routes;