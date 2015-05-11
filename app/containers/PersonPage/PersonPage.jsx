import React from "react";
import { RouteHandler } from "react-router";

import Profile from "components/Profile/Profile.jsx";
import Legislator from 'components/Legislator/Legislator.jsx';
import Tabs from "components/Tabs/Tabs.jsx";
import RecordList from "components/RecordList/RecordList.jsx";

import "./PersonPage.css";

export default class PersonPage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition,
			params: params
		};
	}
	render() {
		var { loading, params } = this.props;
		var { issue } = params;
		
		var content = (issue)? <RecordList /> : <Profile/>;
		var currentTab = (issue)? "婚姻平權":"立場總覽";
		return (
		<div className="PersonPage">
			<div className="PersonPage-person">
				<Legislator data="尤美女" />
			</div>
			<Tabs currentTab={currentTab}/>
			<div className="PersonPage-content">
				{content}
			</div>
			
		</div>);
	}
}

PersonPage.contextTypes = {
	stores: React.PropTypes.object
};
