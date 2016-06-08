import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layout/App.jsx';
import { Index } from '../../ui/components/Index.jsx';
import { One } from '../../ui/pages/One.jsx';
import { Two } from '../../ui/pages/Two.jsx';
import { NotFound } from '../../ui/pages/NotFound.jsx';
import { Hello } from '../../ui/pages/Hello.jsx';

export const renderRoutes = () =>(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Index }/>
            <Route path="/one" component={ One }/>
            <Route path="/two" component={ Two }/>
            <Route path="/hello/:name" component={ Hello } />
        </Route>
        <Route path="*" component={ NotFound }/>
    </Router>
);