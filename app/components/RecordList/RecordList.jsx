import React from "react";
import { Link } from "react-router";

import Legislator from "../Legislator/Legislator.jsx";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";
import Icon from "../Icon/Icon.jsx";
import Record from "../Record/Record.jsx";
import Data from "./RecordList";
import "./RecordList.css";
import classNames from "classnames";
import moment from "moment";

function opinionToEng(value){
    switch(value){
              case '贊成':
                  return "for";
              case '反對':
                  return "against";
              case '不知所云':
                  return "unclear";
              case '不明確':
                  return "none";
    }
    return "";

          
}
export default class RecordList extends React.Component {
  constructor(props) { super(props)
      this.state = { 
        currentTab: 'vote'
      }
  }

  _onSetTab(i, event){
    this.setState({
        currentTab: i
    });

  }

  render() {
   
    var { opinion, subject } = this.props;
    var { currentTab } = this.state;
   
    var data = Data.data;
    if(currentTab !== 'vote'){
        data.sort((a,b)=>{
          //console.log(moment(b.date));
          return moment(b.date) - moment(a.date);
        });
    }else{
        data.sort((a,b)=>{
          return b.trustVote - a.trustVote;
        });

    }
    var content = data.map((item,key)=>{
        return (
            <div key={key}>
              <Record data={item} subject={subject}/>
            </div>
        )
    })

    var tabs = [{title:"最高票",id:"vote"},{title:"最新",id:"timeline"}];
    
    var tabsItem = tabs.map((item,key)=>{
        var tabClass = "RecordList-tab";
        if(currentTab === item.id){
          tabClass += " is-active"
        }
       
        return (
          <div className={tabClass}
               onClick={this._onSetTab.bind(this, item.id)}
               key={key}>{item.title}</div>
        )
    });

  
    
    return (
        <div className="RecordList">
          <div className="RecordList-title">
            候選人大聲公
          </div>
         <div className="RecordList-description">賴士葆：關於「勞工權益」，我說的其實是......</div>
          <div className="RecordList-title">
            調查結果
            <div className="RecordList-more">
              <div className="RecordList-hint"><Icon icon={"info-circle"}/></div>
              <a className="RecordList-tooltip" href="#how">我們如何調查的？</a>
            </div>
          </div>
          <div className="RecordList-summary">
              賴士葆對「勞工權益」的表態
              <div className="RecordList-figure">
                  <div className="RecordList-forFigure">支持</div>
                  <div className="RecordList-againstFigure">反對</div>
                  <div className="RecordList-noneFigure">不明</div>
              </div>
          </div> 
          <div className="RecordList-content">
             
              <div className="RecordList-tabs">{tabsItem}</div>
              {content}
          </div>

          <div className="RecordList-btn">載入更多</div>

          <div className="RecordList-title" id="how">我們如何調查</div>
          <div className="RecordList-description">我們集結了網友與各公民團體一起協作，判斷立委參選人對個議題的立場，分為四大類：贊成、反對、不明確、不知所云。若對於判斷有疑惑，歡迎來當公民偵探一起協作與檢驗候選人立場！</div>
              
          
        </div>
    );

   

  }
}




