import React from "react";
import { Link } from "react-router";
import "./CompareTabs.css";
import classNames from "classnames";
import Icon from "../Icon/Icon.jsx";
export default class CompareTabs extends React.Component {
	
	render() {
		
		var {activeTab, activeSubtab, setActiveTabHandler, setActiveSubtabHandler} = this.props;
		var menu = ["個人簡歷","推薦函","議題立場","野生政見"];
		var submenu = ["勞工","婚姻平權","中國因素","核能"];
		var items = menu.map((value, index)=>{
				var tabClasses = classNames({
		        	"CompareTabs-item" : true,
		        	"is-active" : value === activeTab
		        });
				return(
					<div className={tabClasses}
						 onClick={setActiveTabHandler.bind(this,value)}
						 key={index}>{value}</div>
				)
			});
		var subitems = submenu.map((value, index)=>{
				var tabClasses = classNames({
		        	"CompareTabs-subitem" : true,
		        	"is-active" : value === activeSubtab
		        });
				return(
					<div className={tabClasses}
						 onClick={setActiveSubtabHandler.bind(this,value)}
						 key={index}>{value}</div>
				)
			});
		var subitemClassess = classNames({
			"CompareTabs-subitems" : true,
			"is-show" : activeTab === '議題立場'
		});
		return (
			<div className="CompareTabs">
			    <div className="CompareTabs-items">
			    	<div className="CompareTabs-maxWidth">{items}</div>
				</div>
				<div className={subitemClassess}>
					<div className="CompareTabs-maxWidth">{subitems}</div>
				</div>
			</div>
		)
	}
}
