import React from "react/addons";
import { Link } from "react-router";
import './CompareMultiCard.css';
import data from './CompareMultiCard';
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
export default class CompareMultiCard extends React.Component {
  
  render () {
    var {issueTitle, issues} = this.props;
    var candidateAimg = require("./images/賴士葆.png");
    var candidateBimg = require("./images/苗博雅.png");
    var candidateCimg = require("./images/阮昭雄.png");
    var candidateDimg = require("./images/余宛如.png");
    
   
    var issueItems = data.issues.map((item,key)=>{
        var classes = classNames({
          "CompareMultiCard-flexGrids": true,
          "is-even": key%2===0,
          "is-odd": key%2!==0
        });
        return (
           <div className={classes}
                key={key}>
              <div className="CompareMultiCard-GridTwo CompareMultiCard-issue">{item.title}</div>
              
              <div className={`CompareMultiCard-GridOne CompareMultiCard-OpinionItem is-${item.candidateA}`}>
                <div className="CompareMultiCard-Icon"><Icon icon={opinionToIcon(item.candidateA)} /></div>
                <div className="CompareMultiCard-Opinion">{opinionToText(item.candidateA)}</div>
              </div>
              
              <div className={`CompareMultiCard-GridOne CompareMultiCard-OpinionItem is-${item.candidateB}`}>
                <div className="CompareMultiCard-Icon"><Icon icon={opinionToIcon(item.candidateB)} /></div>
                <div className="CompareMultiCard-Opinion">{opinionToText(item.candidateB)}</div>
              </div>

              <div className={`CompareMultiCard-GridOne CompareMultiCard-OpinionItem is-${item.candidateC}`}>
                <div className="CompareMultiCard-Icon"><Icon icon={opinionToIcon(item.candidateC)} /></div>
                <div className="CompareMultiCard-Opinion">{opinionToText(item.candidateC)}</div>
              </div>
              
              <div className={`CompareMultiCard-GridOne CompareMultiCard-OpinionItem is-${item.candidateD}`}>
                <div className="CompareMultiCard-Icon"><Icon icon={opinionToIcon(item.candidateD)} /></div>
                <div className="CompareMultiCard-Opinion">{opinionToText(item.candidateD)}</div>
              </div>


          </div>
        )
    });
    var basicItems = data.basics.map((item,key)=>{
        var classes = classNames({
          "CompareMultiCard-flexGrids": true,
          "is-even": key%2===0,
          "is-odd": key%2!==0
        });

        var subItemA = item.candidateA;
        if(typeof(item.candidateA)==="object"){
            subItemA = item.candidateA.map((i,k)=>{
                return <li>{i}</li>
            })
            subItemA = <ul>{subItemA}</ul>;
        }
        var subItemB = item.candidateB;
        if(typeof(item.candidateB)==="object"){
            subItemB = item.candidateB.map((i,k)=>{
                return <li>{i}</li>
            })
            subItemB = <ul>{subItemB}</ul>;
        }
         var subItemC = item.candidateC;
        if(typeof(item.candidateC)==="object"){
            subItemC = item.candidateC.map((i,k)=>{
                return <li>{i}</li>
            })
            subItemC = <ul>{subItemC}</ul>;
        }
         var subItemD = item.candidateD;
        if(typeof(item.candidateD)==="object"){
            subItemD = item.candidateD.map((i,k)=>{
                return <li>{i}</li>
            })
            subItemD = <ul>{subItemD}</ul>;
        }
        if(item.title === '年齡'){
          subItemA = 2015 - subItemA;
          subItemB = 2015 - subItemB;
          subItemC = 2015 - subItemC;
          subItemD = 2015 - subItemD;
        }
        return (
           <div className={classes}
                key={key}>
              <div className="CompareMultiCard-GridTwo CompareMultiCard-issue">{item.title}</div>
              
              <div className="CompareMultiCard-GridOne">
                {subItemA}
              </div>
              
              <div className="CompareMultiCard-GridOne">
               {subItemB}
              </div>

              <div className="CompareMultiCard-GridOne">
                {subItemC}
              </div>
              
              <div className="CompareMultiCard-GridOne">
                {subItemD}
              </div>


          </div>
        )
    })

    var content = (issues) ? issueItems : basicItems;
    return (
      <div className="CompareMultiCard">
          
          <div className="CompareMultiCard-flexGrids">
            <div className="CompareMultiCard-GridTwo CompareMultiCard-title">{issueTitle}</div>
            <div className="CompareMultiCard-GridOne">
                <img className="CompareMultiCard-img"
                     src={candidateAimg}/>
                {data.candidateA}
            </div>
            
            <div className="CompareMultiCard-GridOne">
                <img className="CompareMultiCard-img"
                     src={candidateBimg}/>
                {data.candidateB}
            </div>

            <div className="CompareMultiCard-GridOne">
                <img className="CompareMultiCard-img"
                     src={candidateCimg}/>
                {data.candidateC}
            </div>

            <div className="CompareMultiCard-GridOne">
                <img className="CompareMultiCard-img"
                     src={candidateDimg}/>
                {data.candidateD}
            </div>
          </div>
          <div className="CompareMultiCard-issues">
              {content}
          </div>
      </div>
          
    );
  }
}
