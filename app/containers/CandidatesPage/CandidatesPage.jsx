import React from "react";
import { RouteHandler } from "react-router";
import CompareCard from "components/CompareCard/CompareCard.jsx";
import CompareTabs from "components/CompareTabs/CompareTabs.jsx";
import CompareMultiCard from "components/CompareMultiCard/CompareMultiCard.jsx";
import "./CandidatesPage.css";

export default class CandidatesPage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition,
			params: params
		};
	}
	constructor(props){ super(props)
		this.state = {
			activeTab: "議題立場",
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
	_onResize(event){ 
		this.setState({
			width: window.innerWidth
		});
	}
	componentDidMount () {
		this.state = {
			width: window.innerWidth
		}
        window.addEventListener('resize', this._onResize.bind(this,null), false);
    }
    componentWillUnmount () {
        window.removeEventListener('resize', this._onResize.bind(this,null), false);
    }
	render() {
		var {width, activeTab, activeSubtab} = this.state;
		

		//*********
		// to be refined
		//
		//
		var mobile = (
			<div className="CandidatesPage">
			    <div className="CandidatesPage-compare">	
		        	<div className="CandidatesPage-title">2016 臺北市 - 中正區，文山區 立委候選人</div>
			        <div className="CandidatesPage-outerWrapper">
		            	<div className="CandidatesPage-innerWrapper">
		            		<div className="CandidatesPage-list">
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="勞工"/></div>
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="婚姻平權"/></div>
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="核能"/></div>
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="中國因素"/></div>
		            		</div>
		            	</div>
		            </div>
		        </div>
		        <div className="CandidatesPage-otherCandidates">
		        	<div className="CandidatesPage-btn">換人比</div>
		        </div>
		   	</div>);
		

		//////////
		var title = activeTab;
		if(activeTab === "議題立場")
			title = activeSubtab;
		var web = (
			<div className="CandidatesPage">
				<div className="CandidatesPage-compare">
		   		    <div className="CandidatesPage-title">2016 臺北市 - 中正區，文山區 立委候選人</div>
			        <div className="CandidatesPage-menu">
		   	        	<CompareTabs activeTab={activeTab}
		   	        				 activeSubtab={activeSubtab}
		   	        				 setActiveTabHandler={this._setActiveTab.bind(this)}
		   	        				 setActiveSubtabHandler={this._setActiveSubtab.bind(this)}/>
		   	        </div>
		   	        <CompareMultiCard issueTitle={title}/>
		   	    </div>
		   	</div>);
		
		return (width > 600 ) ? web : mobile;
	}
}

CandidatesPage.contextTypes = {
	stores: React.PropTypes.object
};
