import React from "react";
import { RouteHandler } from "react-router";

import AppBar from "components/AppBar/AppBar.jsx";
import SideBar from "components/SideBar/SideBar.jsx";
import classNames from "classnames";
import styles from "./Application.css";

export default class Application extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	constructor(props) { super(props)
        this.state = { showSideBar: false }
    }
   
     _onToggleShowSideBar(){
        this.setState({ 
           showSideBar: !this.state.showSideBar
        });
     }

	render() {
		var { loading } = this.props;
		var { showSideBar } = this.state;
		var applicationClasses = classNames({
			"Application-content" : true,
			"with-sidebar" : showSideBar
		});
		var mainClasses = classNames({
			"Application-main" : true,
			"with-sidebar" : showSideBar
		});
		var sidebarItem = (showSideBar) ? <SideBar /> : "";
		return (
		    <div>
		    	<div className="Application-sidebar">
		    		{sidebarItem}
		    	</div>
		    	<div className={applicationClasses}>
		    	    <AppBar toggleSideBar={this._onToggleShowSideBar.bind(this,null)}/>
		    		<div className={mainClasses}>
		    			<RouteHandler />
		    		</div>
		    	</div>
		    </div>
		);
	}
}

Application.contextTypes = {
	stores: React.PropTypes.object
};
