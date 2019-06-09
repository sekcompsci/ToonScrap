import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Name from './components/Name';
import Chapter from './components/Chapter';

// Route Components
// use component with path url
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:name" component={Name} />
            <Route exact path="/:name/:chapter" component={Chapter} />
        </Switch>
    </BrowserRouter>
);

export default Router;
