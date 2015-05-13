import React from "react";
import { RouteHandler } from "react-router";
import CompareCard from "components/CompareCard/CompareCard.jsx";

import "./CandidatesPage.css";

export default class CandidatesPage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition,
			params: params
		};
	}
	render() {
		return (
		   <div className="CandidatesPage">
		   		<div className="CandidatesPage-compare">
		   		    <div className="CandidatesPage-title">候選人立場比一比</div>
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
	}
}

CandidatesPage.contextTypes = {
	stores: React.PropTypes.object
};
