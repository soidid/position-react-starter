import React from "react";
import { RouteHandler } from "react-router";
import { Link } from "react-router";

import Legislator from 'components/Legislator/Legislator.jsx';
import Records from 'components/Records/Records.jsx';
import Icon from 'components/Icon/Icon.jsx';

import "./PersonIssuePage.css";

export default class PersonIssuePage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	render() {
		var { loading } = this.props;
		return (
		<div className="PersonIssuePage">
		    <div className="PersonIssuePage-back"><Link to="person"><Icon icon={"chevron-left"}/>所有立場</Link></div>
			<Legislator data="尤美女" />
			<Records />
		</div>);
	}
}

PersonIssuePage.contextTypes = {
	stores: React.PropTypes.object
};
