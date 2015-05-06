import React from "react";
import { RouteHandler } from "react-router";
import { Link } from "react-router";
import lyData from './ly-position.js';
import OverviewWall from "components/OverviewWall/OverviewWall.jsx";

import "./IssueVotePage.css";

//import lyData from './ly-info.js';

export default class IssueVotePage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
 
	render() {
    
		return (
      <div className="IssueVotePage">
          <OverviewWall data={lyData.data}/>
      </div>
    )

	}
}

IssueVotePage.contextTypes = {
	stores: React.PropTypes.object
};
