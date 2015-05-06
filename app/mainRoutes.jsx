import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

/* eslint-disable no-multi-spaces */
// Only import from `route-handlers/*`
import Application  from "route-handlers/Application";
import SomePage     from "route-handlers/SomePage";
import TodoListPage from "route-handlers/TodoListPage";
import HomePage     from "route-handlers/HomePage";
import NotFoundPage from "route-handlers/NotFoundPage";
//
import PersonPage from "route-handlers/PersonPage";
import PersonIssuePage from "route-handlers/PersonIssuePage";
import PersonListPage from "route-handlers/PersonListPage";
/* eslint-enable */

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="some-page" path="/some-page" handler={SomePage} />
		
		<Route name="home" path="/home" handler={HomePage} />
		<Route name="personList" path="/list/person" handler={PersonListPage} />
		<Route name="person" path="/person" handler={PersonPage} />
		<Route name="personIssue" path="/person/:issue" handler={PersonIssuePage} />
		
		<DefaultRoute handler={HomePage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);
