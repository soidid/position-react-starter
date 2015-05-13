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
import Profile from "components/Profile/Profile.jsx";
import CandidatesPage from "route-handlers/CandidatesPage";

import IssueListPage from "route-handlers/IssueListPage";
import IssuePage from "route-handlers/IssuePage";
import IssueVotePage from "route-handlers/IssueVotePage";
/* eslint-enable */

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="home" path="/" handler={HomePage} />
		
		<Route name="personList" path="/person-list" handler={PersonListPage} />
		<Route name="person" path="/person" handler={PersonPage} />
		<Route name="personIssue" path="/person/:issue" handler={PersonPage} />

		<Route name="candidates" path="/candidates" handler={CandidatesPage} />
		
		<Route name="issueList" path="/issue-list" handler={IssueListPage} />
		<Route name="issue" path="/issue" handler={IssuePage} />
		<Route name="issueVote" path="/issue/:issue" handler={IssueVotePage} />

		<DefaultRoute handler={HomePage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);
