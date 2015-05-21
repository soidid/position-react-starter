import React from "react";
import { Link } from "react-router";
import "./CompareTabs.css";
import classNames from "classnames";
import Icon from "../Icon/Icon.jsx";
export default class CompareTabs extends React.Component {
	constructor(props){ super(props)
		this.state = {
			scrolling : false
		}
	}
	_onScroll(){
		//console.log("scrolling: ");
		//console.log(pageYOffset)
		// if(pageYOffset >= 150 && !this.state.scrolling){
		// 	this.setState({
		// 		scrolling: true
		// 	})
		// }
		// if(pageYOffset < 150 && this.state.scrolling){
		// 	this.setState({
		// 		scrolling: false
		// 	})
		// }
		
	}
	componentDidMount () {
        window.addEventListener('scroll', this._onScroll.bind(this,null), false);
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this._onScroll.bind(this,null), false);
    }
	render() {
		
		var {activeTab, activeSubtab, setActiveTabHandler, setActiveSubtabHandler, showSub} = this.props;
		var menu = ["野生履歷","推薦函","國會徵信社"];
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
			"is-show" : activeTab === '國會徵信社' && showSub === true
		});
		var compareTabsClasses = classNames({
			"CompareTabs" : true,
			"is-scrolling" : this.state.scrolling
		})
		return (
			<div className={compareTabsClasses}>
			    <div className="CompareTabs-items">
			    	<div className="CompareTabs-maxWidth">{items}</div>
				</div>
				
			</div>
		)
	}
}

// <div className={subitemClassess}>
// 	<div className="CompareTabs-maxWidth">{subitems}</div>
// </div>
