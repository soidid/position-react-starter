import React from "react";
import { Link } from "react-router";

import Legislator from "../Legislator/Legislator.jsx";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";
import Icon from "../Icon/Icon.jsx";
import Record from "../Record/Record.jsx";
import Data from "./RecordList";
import "./RecordList.css";
import classNames from "classnames";

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
        shouldYearExpand:{},
        currentTab: 'vote',
        showContent: false
      }
  }

  _onToggleContent(){
    this.setState({
        showContent: !this.state.showContent
    });
  }

  _onSetTab(i, event){
    this.setState({
        currentTab: i
    });

  }

  _onTogggleYearData(i, event){
    console.log(i);
    var currentYearExpand = this.state.shouldYearExpand;
    
    if(!currentYearExpand[i])
        currentYearExpand[i] = true;
    else
        currentYearExpand[i] = !currentYearExpand;

    this.setState({
        currentYearExpand: currentYearExpand
    });
  }

  render() {
   
    var { opinion, subject } = this.props;
    var { shouldYearExpand, currentTab, showContent } = this.state;
    var classSet = React.addons.classSet;
    
    var entriesCount = {};
        entriesCount.all = 0;
        entriesCount.yearAll = 0;
        entriesCount.for = 0;
        entriesCount.against = 0;
        entriesCount.unclear = 0;


    //console.log(data);
    //每一年

    var data = Data.data;
      

    var orderByYearItems = data.map((year, year_index)=>{
        entriesCount.yearAll = 0;
        var entries = year.entries
        .filter((item)=>{
            var shouldReturn = true;
            if(item.name !== '尤美女'){
              shouldReturn = false;
            }
            //console.log(item.name+": "+shouldReturn);
            if(shouldReturn){
                return item;
            }
                
          }
        )
        .map((item,key)=>{

            entriesCount.all++;
            entriesCount.yearAll++;
            
            //每一筆 entry
            switch(item.opinion){
              case '贊成':
                  entriesCount.for++;
                  break;
              case '反對':
                  entriesCount.against++;
                  break;
              case '不明確':
                  entriesCount.unclear++;
                  break;

            }
         
            return (
                <div key={key}>
                  <Record data={item}/>
                </div>
            )
        });
        
        var boundToggleYear = this._onTogggleYearData.bind(this, year.year);
        var voteEntries = (shouldYearExpand[year.year]===true)? <div>{entries}</div> : "";
        var toggleText = (shouldYearExpand[year.year]===true)? "折疊" : "展開";
        
        if(entriesCount.yearAll === 0)
            toggleText = "";
        
        return (
            <div className="RecordList-year"
                 key={year_index}>
                <div className="RecordList-yearHeader"
                     onClick={boundToggleYear}>
                    <div className="RecordList-yearUnit"></div>
                    <div className="RecordList-yearTitle">{year.year}</div>
                    <div className="RecordList-yearSum">
                        <span className="RecordList-voteNumbers">{entriesCount.yearAll}</span> 個相關表態
                        <div className="RecordList-yearToggle">{toggleText}</div>
                    </div>
                </div>
                <div className="RecordList-yearEntries">
                    {voteEntries}
                </div>
            </div>
       );



    });


    // /////////////////////////////////////////////////////////
    // /* 依照票數排序 */
    // ////////////////////////////////////////////////////////

    
    var orderByVote = Data.orderByVote;
    var orderByVoteItems = orderByVote.map((item,key)=>{
        return (
            <div key={key}>
              <Record data={item}/>
            </div>
        )
    })

    var content = (currentTab === 'vote') ? orderByVoteItems : orderByYearItems;
    var tabs = [{title:"依票數",id:"vote"},{title:"時間軸",id:"timeline"}];
    var tabsItem = tabs.map((item,key)=>{
        var tabClass = "RecordList-tab";
        if(currentTab===item.id){
          tabClass += " is-active"
        }
        var boundClick = this._onSetTab.bind(this, item.id);
        return (
          <div className={tabClass}
               onClick={boundClick}
               key={key}>{item.title}</div>
        )
    });

    var contentClasses = classNames({
      "RecordList-content" : true,
      "is-show" : showContent
    })
    
    var toggleIconItem = (showContent) ? <Icon icon={"angle-double-up"}/> : <Icon icon={"angle-double-down"}/>;
    var temp = opinionToEng(opinion);
    return (
        <div className="RecordList">
          
          <div className="RecordList-title"
               onClick={this._onToggleContent.bind(this)}>
            <span className={"RecordList-opinion is-"+temp}>{opinion}</span>{subject}
            <div className="RecordList-toggle">{toggleIconItem}</div>
          </div> 
          <div className={contentClasses}>
              <div className="RecordList-description">
                  在過去四年中，尤美女有 {entriesCount.all} 筆相關的立場表達事件：{entriesCount.for} 筆贊成；{entriesCount.against} 筆反對；{entriesCount.unclear} 筆立場不明確。
              </div>
              {tabsItem}
              {content}
          </div>
          
        </div>
    );

   

  }
}




