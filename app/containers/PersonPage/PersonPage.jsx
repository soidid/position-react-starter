import React from "react";
import { RouteHandler, Link } from "react-router";

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
	constructor(props){ super(props)
		this.state = {
			activeTab: "國會徵信社",
			activeSubtab: "勞工"
		}
	}
	_setActiveTab(value, event){
		this.setState({
			activeTab: value
		})
	}
	_setActiveSubtab(value, event){
		this.setState({
			activeSubtab: value
		})
	}
	render() {
		var { loading, params } = this.props;
		var { issue } = params;
		var { activeTab, activeSubtab } = this.state;
		
		var content = "";
		if(activeTab === "國會徵信社")
			content = <div>
                <Link to="personIssue" params={{issue: "issue"}}>贊成.公司獲利盈餘重新分配</Link>
			</div> ;
		
		if(activeTab === "野生履歷"){
			content = (
				<div><Profile /></div>
			)
		}

		if( issue ){
			content = <RecordList opinion="贊成" subject="公司獲利盈餘重新分配" />;
		}

		return (
		<div className="PersonPage">
			<div className="PersonPage-person">
				<Legislator data="賴士葆" />
			</div>
			<Tabs activeTab={activeTab}
		   	        	 activeSubtab={activeSubtab}
		   	        	 setActiveTabHandler={this._setActiveTab.bind(this)}
		   	        	 setActiveSubtabHandler={this._setActiveSubtab.bind(this)}/>
			<div className="PersonPage-content">
				{content}
				
			</div>

			
		</div>);
	}
}

PersonPage.contextTypes = {
	stores: React.PropTypes.object
};
