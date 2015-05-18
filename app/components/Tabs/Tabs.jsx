import React from "react";
import { Link } from "react-router";
import "./Tabs.css";
import classNames from "classnames";
import Icon from "../Icon/Icon.jsx";
export default class Tabs extends React.Component {
	constructor(props){ super(props)
		this.state = {
			scrolling : false,
			showSubitems: false
		}
	}
	_onScroll(){
		//console.log("scrolling: ");
		//console.log(pageYOffset)
		if(pageYOffset >= 230 && !this.state.scrolling){
			this.setState({
				scrolling: true
			})
		}
		if(pageYOffset < 230 && this.state.scrolling){
			this.setState({
				scrolling: false
			})
		}
		
	}
	_toggleSubitems(){
		this.setState({
			showSubitems: !this.state.showSubitems
		})
	}
	componentDidMount () {
        window.addEventListener('scroll', this._onScroll.bind(this,null), false);
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this._onScroll.bind(this,null), false);
    }
	render() {
		// "立場總覽" ??

		var {activeTab, activeSubtab, setActiveTabHandler, setActiveSubtabHandler} = this.props;
		var menu = ["野生履歷","推薦函","國會徵信社"];
		var submenu = ["勞工","婚姻平權","中國因素","核能"];
		var items = menu.map((value, index)=>{
				var tabClasses = classNames({
		        	"Tabs-item" : true,
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
		        	"Tabs-subitem" : true,
		        	"is-active" : value === activeSubtab
		        });
				return(
					<div className={tabClasses}
						 onClick={setActiveSubtabHandler.bind(this,value)}
						 key={index}>{value}</div>
				)
			});
		var subitemClassess = classNames({
			"Tabs-subitems" : true,
			"is-show" : activeTab === '國會徵信社'
		});
		var tabClasses = classNames({
			"Tabs" : true,
			"is-scrolling" : this.state.scrolling
		})
		return (
			<div className={tabClasses}>
			    <div className="Tabs-background">
			        <div className="Tabs-items">
			        	<div className="Tabs-maxWidth">{items}</div>
				    </div>
				    <div className={subitemClassess}>
				    	<div className="Tabs-maxWidth">{subitems}</div>
				    </div>
				</div>
			</div>
		)
	}
}
