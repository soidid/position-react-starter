import React from "react";
import { RouteHandler } from "react-router";

import AppBar from "components/AppBar/AppBar.jsx";
import Profile from "components/Profile/Profile.jsx";
import "./PersonPage.css";

export default class PersonPage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	render() {
		var { loading } = this.props;
		return (
		<div className="PersonPage">
			<Profile />
		</div>);
	}
}

PersonPage.contextTypes = {
	stores: React.PropTypes.object
};
