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
		var {currentTab} = this.props;
		var {showSubitems} = this.state;
		
		var tabClasses = classNames({
			"Tabs" : true,
			"is-scrolling" : this.state.scrolling
		})

        var totalClass = "Tabs-item";
        var issueClass = "Tabs-item";
        if(currentTab==="立場總覽"){
        	totalClass += " is-active";
        }else{
        	issueClass += " is-active";
        }

        var subitemClasses = classNames({
        	"Tabs-subTabs" : true,
        	"is-show" : showSubitems && currentTab==="婚姻平權"
        })

		return (
			<div className={tabClasses}>
			    <div className="Tabs-items">
			    	<div className="Tabs-maxWidth">
				    <Link className={totalClass}
				    	  to="person">立場總覽</Link>
				    <div className="Tabs-item">食品安全</div>
				    
				    <Link className={issueClass}
				    	  to="personIssue"
				    	  params={{issue: "same-sex-marriage"}}
				    	  onClick={this._toggleSubitems.bind(this)}>婚姻平權
				    	  <div className={subitemClasses}>
				          	<div className="Tabs-subItem">婚姻平權子議題1</div>
				          	<div className="Tabs-subItem">婚姻平權子議題2</div>
				          	<div className="Tabs-subItem">婚姻平權子議題3</div>
				          </div>
				    </Link>
				    
				
					<div className="Tabs-scrollRight"><Icon icon="chevron-right"/></div>
					</div>
					</div>
			</div>
		)
	}
}
