import React from "react/addons";
import { Link } from "react-router";
import './CompareProfileCard.css';
import data from './CompareProfileCard';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class CompareProfileCard extends React.Component {
  
  render () {
    var {candidateA, candidateB} = this.props;
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
    
    var issueItems = data.issues.map((item,key)=>{
        var classes = classNames({
          "CompareProfileCard-flexGrids": true,
          "is-even": key%2===0,
          "is-odd": key%2!==0
        });
        var subItemA = item[candidateA];
        
        if(typeof(item[candidateA])==="object"){
            subItemA = item[candidateA].map((i,k)=>{
                return <li>{i}</li>
            })
            subItemA = <ul>{subItemA}</ul>;
        }
       
        var subItemB = item[candidateB];
        
        if(typeof(item[candidateB])==="object"){
            subItemB = item[candidateB].map((i,k)=>{
                return <li>{i}</li>
            })
            subItemB = <ul>{subItemB}</ul>;
        }

        if(item.title === '年齡'){
          subItemA = 2015 - subItemA;
          subItemB = 2015 - subItemB;
        }
        
        return (
           <div className={classes}
                key={key}>
              <div className="CompareProfileCard-GridOne">
                <div className={`CompareProfileCard-opinion`}>
                  {subItemA}
                </div>
              </div>
              <div className="CompareProfileCard-GridTwo CompareProfileCard-issue">{item.title}</div>
              <div className="CompareProfileCard-GridOne">
                <div className={`CompareProfileCard-opinion`}>
                  {subItemB}
                </div>
              </div>
          </div>
        )
    })

    return (
      <div className="CompareProfileCard">
          <div className="CompareProfileCard-title">野生履歷</div>
          <div className="CompareProfileCard-flexGrids">
            <div className="CompareProfileCard-GridTwo">
                <img className="CompareProfileCard-img"
                     src={candidateAimg}/>
                {candidateA}
            </div>
            <div className="CompareProfileCard-pk">PK</div>
            <div className="CompareProfileCard-GridTwo">
                <img className="CompareProfileCard-img"
                     src={candidateBimg}/>
                {candidateB}
            </div>
          </div>
          <div className="CompareProfileCard-issues">
            {issueItems}
          </div>
          

      </div>
          
    );
  }
}
