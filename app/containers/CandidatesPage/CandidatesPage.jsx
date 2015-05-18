import React from "react";
import { RouteHandler } from "react-router";
import CompareCard from "components/CompareCard/CompareCard.jsx";
import CompareProfileCard from "components/CompareProfileCard/CompareProfileCard.jsx";
import RecommendCard from "components/RecommendCard/RecommendCard.jsx";
import InterviewCard from "components/InterviewCard/InterviewCard.jsx";
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
			activeTab: "野生履歷",
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
		var mobileIssue = (
		    <div className="CandidatesPage-outerWrapper">
		        <div className="CandidatesPage-innerWrapper">
		        	<div className="CandidatesPage-issueList ">
		        		<div className="CandidatesPage-issueItem"><CompareCard issueTitle="勞工" candidateA={candidateA} candidateB={candidateB}/></div>
		        		<div className="CandidatesPage-issueItem"><CompareCard issueTitle="婚姻平權" candidateA={candidateA} candidateB={candidateB}/></div>
		        		<div className="CandidatesPage-issueItem"><CompareCard issueTitle="核能" candidateA={candidateA} candidateB={candidateB}/></div>
		        		<div className="CandidatesPage-issueItem"><CompareCard issueTitle="中國因素" candidateA={candidateA} candidateB={candidateB}/></div>
		        	</div>
		        </div>
		    </div>);
		var mobileRecommends = (
			<div className="CandidatesPage-outerWrapper">
		        <div className="CandidatesPage-innerWrapper">
		        	<div className="CandidatesPage-recommendList ">
						<div className="CandidatesPage-recommendItem"><RecommendCard candidate={candidateA}/></div>
			    		<div className="CandidatesPage-recommendItem"><RecommendCard candidate={candidateB}/></div>
					</div>
		        </div>
		    </div>
		);

		
		var mobileProfiles = (
			<div className="CandidatesPage-outerWrapper">
		        <div className="CandidatesPage-innerWrapper">
		        	<div className="CandidatesPage-profileList">
			    		<div className="CandidatesPage-recommendItem"><CompareProfileCard candidateA={candidateA} candidateB={candidateB}/></div>
			    		<div className="CandidatesPage-recommendItem">
			    			<InterviewCard candidate={candidateA} />
			    		</div>
			    		<div className="CandidatesPage-recommendItem"><InterviewCard candidate={candidateB} /></div>
					</div>
		        </div>
		    </div>
		);

		var mobileContent = "";
		if(activeTab === '野生履歷') mobileContent = mobileProfiles;
		if(activeTab === '推薦函')   mobileContent = mobileRecommends;
		if(activeTab === '議題立場') mobileContent = mobileIssue;
        

		var mobile = (
			<div className="CandidatesPage">
			    <div className="CandidatesPage-compare">	
		        	<div className="CandidatesPage-title">2016 臺北市 - 中正區，文山區 立委候選人</div>
		        	<div className="CandidatesPage-menu">
		        	<CompareTabs activeTab={activeTab}
		   	        			 activeSubtab={activeSubtab}
		   	        			 setActiveTabHandler={this._setActiveTab.bind(this)}
		   	        			 setActiveSubtabHandler={this._setActiveSubtab.bind(this)}
		   	        			 showSub={false}/>
		   	        </div>
			        {mobileContent}
		        </div>
		        <div className="CandidatesPage-candidatePicker">
		        	<CandidatePicker candidateA={candidateA} candidateB={candidateB}
		        					 setCandidateHandler={this._onSetCandidates.bind(this)}
		        					 clearCandidateHandler={this._onClearCandidates.bind(this)}/>
		        	
		        </div>
		        
		   	</div>);
		

		//////////
		var webContent = "";
		var title = activeTab;
		if(activeTab === "議題立場"){
			title = activeSubtab;
			webContent = <CompareMultiCard issueTitle={title} issues={true}/>;
		}

		if(activeTab === '野生履歷') 
			webContent = <CompareMultiCard issueTitle={title} issues={false}/>;
		if(activeTab === '推薦函')  
		    webContent = ""; 
		
		var web = (
			<div className="CandidatesPage">
				<div className="CandidatesPage-compare">
		   		    <div className="CandidatesPage-title">2016 臺北市 - 中正區，文山區 立委候選人</div>
			        <div className="CandidatesPage-menu">
		   	        	<CompareTabs activeTab={activeTab}
		   	        				 activeSubtab={activeSubtab}
		   	        				 setActiveTabHandler={this._setActiveTab.bind(this)}
		   	        				 setActiveSubtabHandler={this._setActiveSubtab.bind(this)}
		   	        				 showSub={true}/>
		   	        </div>
		   	        {webContent}
		   	    </div>
		   	</div>);
		
		return (width > 600 ) ? web : mobile;
	}
}

CandidatesPage.contextTypes = {
	stores: React.PropTypes.object
};
