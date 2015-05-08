import React from "react";
import { Link } from "react-router";

import OverviewWallAvatar from '../OverviewWallAvatar/OverviewWallAvatar.jsx';
import Icon from '../Icon/Icon.jsx';
import "./OpinionGroup.css"

export default class OpinionGroupr extends React.Component {
  constructor(props) { super(props)
      this.state = { 
          showFull: false
      }
  }

  _onToggleShowFull(){
      this.setState({ 
          showFull: !this.state.showFull
      });
  }

  render () {
      var {data} = this.props;
      var {showFull} = this.state;
      var boundToggleShowFull = this._onToggleShowFull.bind(this, null);

      var partyCount = {};
      var legislatorItems = data.legislators.map((item, key)=>{
        
        //計算各政黨人數
        if(!partyCount[item.party_eng])
           partyCount[item.party_eng]= { "name_cht" : item.party, "name_eng" : item.party_eng, "count" : 0 };
        
        partyCount[item.party_eng].count ++;

        
        return (
          <OverviewWallAvatar data={item} key={key}/>
        )
      });

      //依照各政黨在此意見的人數多少排序
      var partyCountArray = [];
      Object.keys(partyCount).map((value, index)=>{
          partyCountArray.push(partyCount[value])
      })
      partyCountArray.sort((a,b)=>{
        return b.count - a.count;
      })

      var partyCountItems = partyCountArray.map((item,key)=>{
          var partyBarClasses = "OpinionGroup-partyBar" + " is-" + item.name_eng;
          var percentage = Math.round(item.count/11 * 100);
          var style = { "width" : percentage+"%"}
          return (
              <div className="OpinionGroup-party"
                   key={key}>
              <div className={partyBarClasses}
                   style={style}></div>
                   {item.name_cht}：{item.count} 人
              </div>
          )
      })

      var toggleIconItem = (showFull) ? <Icon icon={"angle-double-up"}/> : <Icon icon={"angle-double-down"}/>
      var memberItem = (showFull) ? <div className="OpinionGroup-members">{legislatorItems}</div>:"";
      return (
          <div className="OpinionGroup"
               onClick={boundToggleShowFull}>
              <div className="OpinionGroup-box">
                  <div className="OpinionGroup-title">
                    <Icon icon={data.icon}/>{data.opinion}：{data.count}人
                    <div className="OpinionGroup-titleToggle">{toggleIconItem}</div>
                  </div>
                  <div className="OpinionGroup-content">
                    <div className="OpinionGroup-parties">{partyCountItems}</div>
                    <div>{memberItem}</div>
                  </div>
              </div>
          </div>

      )
  }
}


