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

    var tabs = [{title:"最多人標注",id:"vote"},{title:"最近更新",id:"timeline"},{title:"尚未標注",id:"none"}];
    
    var tabsItem = tabs.map((item,key)=>{
        var tabClasses = classNames({
            "RecordList-tab": true,
            "is-active": currentTab === item.id,
            "is-last": key === tabs.length-1
        });
        return (
          <div className={tabClasses}
               onClick={this._onSetTab.bind(this, item.id)}
               key={key}>{item.title}</div>
        )
    });

  
    
    return (
        <div className="RecordList">
          <div className="RecordList-title">
            候選人大聲公
          </div>
         <div className="RecordList-description">
            <div className="RecordList-candidatePre">賴士葆：關於「勞工」，我的立場及想法是...</div>
            <div className="RecordList-candidateState">
              <p>士葆從政多年，一直都十分關心勞工權益。</p>
              <p>對於大家質疑的公司法修法，原本公司法235條就有盈餘分配給員工的規定，也就是企業獲利要先繳營所稅後，再分配紅利給員工；這次修正通過條文，則是企業有獲利要分配酬勞給員工，再去繳營所稅，也就是費用化概念，這種先照顧員工的精神是本案通過重點。</p>

            </div>

         </div>
          <div className="RecordList-title">
            立場調查結果
            <div className="RecordList-more">
              <div className="RecordList-hint"><Icon icon={"info-circle"}/></div>
              <a className="RecordList-tooltip" href="#how">我們如何調查的？</a>
            </div>
          </div>
          <div className="RecordList-summary">
              賴士葆對「勞工」的表態
              <div className="RecordList-description">
              <div className="RecordList-voteItems">
                  <div className="RecordList-voteItem"># 支持勞工權益<span className="RecordList-vote">1,230</span></div>
                  <div className="RecordList-voteItem"># 胡言亂語，不知所云<span className="RecordList-vote">855</span></div>
                  <div className="RecordList-voteItem"># 反對勞工權益<span className="RecordList-vote">710</span></div>
                  <div className="RecordList-voteItem"># 立場不明<span className="RecordList-vote">621</span></div>
                  <div className="RecordList-voteItem"># 選前必看<span className="RecordList-vote">124</span></div>
                  <div className="RecordList-voteItem"># 反對每週 40 工時<span className="RecordList-vote">98</span></div>
                  <div className="RecordList-voteItem">... 還有其他 10 個標籤 </div>
              </div>
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




