import React from "react/addons";
import { Link } from "react-router";
import './InterviewCard.css';
import data from './InterviewCard';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class InterviewCard extends React.Component {
  
  render () {
    var {candidateA, candidateB, data} = this.props;
    if(!candidateA)
        candidateA = "請選擇";
    if(!candidateB)
        candidateB = "請選擇";

    var candidateAimg = "";
    var candidateBimg = "";
    try{
        candidateAimg = require(`./images/${candidateA}.png`);
        candidateBimg = require(`./images/${candidateB}.png`);
    }catch(e){
        if(!candidateAimg)
            candidateAimg = require("./images/default.svg"); 
        if(!candidateBimg)
            candidateBimg = require("./images/default.svg");      
    }

    var reporterImg = require("./images/reporter.jpg");


    return (
      <div className="InterviewCard">
          <div className="InterviewCard-title">野生履歷</div>
         
            <div className="InterviewCard-issues">
                <div className="InterviewCard-issue">
                <div className="InterviewCard-flexGrids">
                    <div className="InterviewCard-GridOne">
                        <img className="InterviewCard-img"
                             src={reporterImg}/>
                    </div>
                    <div className="InterviewCard-GridThree InterviewCard-question">
                    {data.title}
                    </div>
                </div>

                <div className="InterviewCard-flexGrids">
                    <div className="InterviewCard-GridThree InterviewCard-answer">
                        {data[candidateA]}
                    </div>
                    <div className="InterviewCard-GridOne">
                        <img className="InterviewCard-img"
                             src={candidateAimg}/>
                        {candidateA}
                  </div>
                </div>

                <div className="InterviewCard-flexGrids">
                    <div className="InterviewCard-GridThree InterviewCard-answer">
                        {data[candidateB]}
                    </div>
                    <div className="InterviewCard-GridOne">
                        <img className="InterviewCard-img"
                             src={candidateBimg}/>
                        {candidateB}
                    </div>
                </div>
               
          </div>
          </div>
          

      </div>
          
    );
  }
}
