import React from "react/addons";
import { Link } from "react-router";
import './InterviewCard.css';
import data from './InterviewCard';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class InterviewCard extends React.Component {
  
  render () {
    var {candidate} = this.props;
    if(!candidate)
        candidate = "請選擇";
    
    var candidateimg = "";
    try{
        candidateimg = require(`./images/${candidate}.png`);
        
    }catch(e){
        
        if(!candidateimg)
            candidateimg = require("./images/default.svg");      
    }

    var reporterImg = require("./images/reporter.jpg");
    var issueItems = data.issues.map((item,key)=>{
        return (
          <div className="InterviewCard-issue"
               kye={key}>
              <div className="InterviewCard-flexGrids InterviewCard-sets">
                  <div className="InterviewCard-fixImg">
                      <img className="InterviewCard-img"
                       src={reporterImg}/>
                  </div>
                  <div className="InterviewCard-GridThree">
                      <div className="InterviewCard-question">{item.title}</div>
                  </div>
              </div>
              <div className="InterviewCard-flexGrids InterviewCard-sets">
                  <div className="InterviewCard-GridThree">
                     <div className="InterviewCard-answer">{item[candidate]}</div>  
                  </div>
                  <div className="InterviewCard-fixImg">
                       <img className="InterviewCard-img"
                            src={candidateimg}/>
                  </div>
              </div>
              
          </div>
         
          );
    });

    return (
      <div className="InterviewCard">
          <div className="InterviewCard-title">野生履歷</div>
          <div className="embed-container">
            <iframe width="100%" src="https://www.youtube.com/embed/P3Vm-fEZMJ0" frameBorder="0" allowfullscreen></iframe>
          </div>
          <div className="InterviewCard-flexGrids">
              <div className="InterviewCard-unitTitle">快問快答</div>
               
          </div>
          <div className="InterviewCard-issues">{issueItems} </div>
      </div>
          
    );
  }
}
