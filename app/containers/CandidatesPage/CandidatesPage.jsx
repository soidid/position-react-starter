import React from "react";
import { RouteHandler } from "react-router";
import CompareCard from "components/CompareCard/CompareCard.jsx";
import CompareTabs from "components/CompareTabs/CompareTabs.jsx";
import CompareMultiCard from "components/CompareMultiCard/CompareMultiCard.jsx";
import CandidatePicker from "components/CandidatePicker/CandidatePicker.jsx";
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
			activeSubtab: "勞工",
			candidateA: "賴士葆",
			candidateB: "苗博雅"
		}
	}

	_onClearCandidates(){
		this.setState({
			candidateA: "",
			candidateB: ""
		})
	}

	_onSetCandidates(value){
		var {candidateA} = this.state;
		
		if(candidateA === ""){
			this.setState({
				candidateA: value
			})

		}else{
			if(candidateA !== value){
				this.setState({
					candidateB: value
				})
			}
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

		this.setState({
			width: window.innerWidth
		});
		
        window.addEventListener('resize', this._onResize.bind(this,null), false);
    }
    componentWillUnmount () {
        window.removeEventListener('resize', this._onResize.bind(this,null), false);
    }
	render() {
		var {width, activeTab, activeSubtab, candidateA, candidateB} = this.state;
		

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
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="勞工" candidateA={candidateA} candidateB={candidateB}/></div>
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="婚姻平權" candidateA={candidateA} candidateB={candidateB}/></div>
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="核能" candidateA={candidateA} candidateB={candidateB}/></div>
		            			<div className="CandidatesPage-item"><CompareCard issueTitle="中國因素" candidateA={candidateA} candidateB={candidateB}/></div>
		            		</div>
		            	</div>
		            </div>
		        </div>
		        <div className="CandidatesPage-otherCandidates">
		        	<CandidatePicker candidateA={candidateA} candidateB={candidateB}
		        					 setCandidateHandler={this._onSetCandidates.bind(this)}
		        					 clearCandidateHandler={this._onClearCandidates.bind(this)}/>
		        	
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
