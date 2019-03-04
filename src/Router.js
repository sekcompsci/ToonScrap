import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Name from './components/Name';

// Route Components
// use component with path url
const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/:name" component={Name} />
		</Switch>
	</BrowserRouter>
);

export default Router;
