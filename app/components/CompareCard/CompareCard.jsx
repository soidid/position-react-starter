import React from "react/addons";
import { Link } from "react-router";
import './CompareCard.css';
import data from './CompareCard';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

function opinionToIcon(opinion){
  //circle-o
  //times
  //frown-o, 不知所云,  unclear
  //question, 未表態, none

  switch(opinion){
      case 'for': return 'circle-o';
      case 'against': return 'times';
      case 'unclear': return 'frown-o';
      case 'none' : return 'question';
  }
  return "";
}
function opinionToText(opinion){
  
  switch(opinion){
      case 'for': return '贊成';
      case 'against': return '反對';
      case 'unclear': return '不知所云';
      case 'none' : return '未表態';
  }
  return "";
}
export default class CompareCard extends React.Component {
  
  render () {
    var {issueTitle, candidateA, candidateB} = this.props;
    var candidateAimg = "";
    var candidateBimg = "";
    try{
        candidateAimg = require("./images/"+candidateA+".png");
        candidateBimg = require("./images/"+candidateB+".png");
    }catch(e){
            
    }
    
    var issueItems = data.issues.map((item,key)=>{
        var classes = classNames({
          "CompareCard-flexGrids": true,
          "is-even": key%2===0,
          "is-odd": key%2!==0
        });
        return (
           <div className={classes}
                key={key}>
              <div className="CompareCard-GridOne">
                <div className="CompareCard-Icon"><Icon icon={opinionToIcon(item[candidateA])} /></div>
                <div className="CompareCard-Opinion">{opinionToText(item[candidateA])}</div>
              </div>
              <div className="CompareCard-GridTwo CompareCard-issue">{item.title}</div>
              <div className="CompareCard-GridOne">
                <div className="CompareCard-Icon"><Icon icon={opinionToIcon(item[candidateB])} /></div>
                <div className="CompareCard-Opinion">{opinionToText(item[candidateB])}</div>
              </div>
          </div>
        )
    })

    return (
      <div className="CompareCard">
          <div className="CompareCard-title">{issueTitle}</div>
          <div className="CompareCard-flexGrids">
            <div className="CompareCard-GridTwo">
                <img className="CompareCard-img"
                     src={candidateAimg}/>
                {candidateA}
            </div>
            <div className="CompareCard-pk">PK</div>
            <div className="CompareCard-GridTwo">
                <img className="CompareCard-img"
                     src={candidateBimg}/>
                {candidateB}
            </div>
          </div>
          <div className="CompareCard-issues">
          {issueItems}
          </div>
      </div>
          
    );
  }
}
