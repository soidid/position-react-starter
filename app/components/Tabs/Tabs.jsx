import React from "react";
import { Link } from "react-router";
import "./Tabs.css";
import classNames from "classnames";
export default class Tabs extends React.Component {
	constructor(props){ super(props)
		this.state = {
			scrolling : false
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
	componentDidMount () {
        window.addEventListener('scroll', this._onScroll.bind(this,null), false);
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this._onScroll.bind(this,null), false);
    }
	render() {
		var {currentTab} = this.props;
		
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

		return (
			<div className={tabClasses}>
				<Link className={totalClass}
					  to="person">立場總覽</Link>
				<div className="Tabs-item">食品安全</div>
				<div className="Tabs-item">核能</div>
				<Link className={issueClass}
					  to="personIssue"
					  params={{issue: "same-sex-marriage"}}>婚姻平權</Link>
			</div>
		)
	}
}
