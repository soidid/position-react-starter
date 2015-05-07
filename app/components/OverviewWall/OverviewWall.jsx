import React from "react";
import { Link } from "react-router";
import "./OverviewWall.css";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";
import OverviewWallAvatar from "../OverviewWallAvatar/OverviewWallAvatar.jsx";

export default class OverviewWall extends React.Component {
  render() {

    var data = this.props.data;

    var forLegislators = [];
    var againstLegislators = [];
    var unclearLegislators = [];
    var noneLegislators = [];

    data.map((item,key)=>{
      if(item.position === '贊成')
         forLegislators.push(item);

      if(item.position === '反對')
         againstLegislators.push(item);

      if(item.position === '不明確')
         unclearLegislators.push(item);

      if(item.position === '未表態')
         noneLegislators.push(item);
      
    });

    // 依照強度排序, 大 -> 小
    var sortBase = function (a,b) {
      return b.positionCount - a.positionCount;
    };
    forLegislators.sort(sortBase);
    againstLegislators.sort(sortBase);
    unclearLegislators.sort(sortBase);
    noneLegislators.sort(sortBase);


  
    // 贊成
    var legiItemsFor = forLegislators.map((item, key)=>{
        return (
          <OverviewWallAvatar data={item} key={key}/>
        )
    });

    // 反對
    var legiItemsAgainst = againstLegislators.map((item, key)=>{
        return (
          <OverviewWallAvatar data={item} key={key}/>
        )
    });

    // 不明確
    var legiItemsUnclear = unclearLegislators.map((item, key)=>{
        return (
          <OverviewWallAvatar data={item} key={key}/>
        )
    });

     // 未表態
    var legiItemsNone = noneLegislators
    .map((item, key)=>{
        return (
          <OverviewWallAvatar data={item} key={key}/>
        )
    });
   
    // <div className="OverviewWall-title">立法院是否支持「婚姻平權於本會期立法通過」？</div>
    // <div className="OverviewWall-description">根據立法院過去四年的立場表態事件：<br/>
    //        有 <span className="OverviewWall-numberHighlight">{forLegislators.length}</span> 位立委傾向支持；
    //        <span className="OverviewWall-numberHighlight">{againstLegislators.length}</span> 位立委傾向反對； 
    //        <span className="OverviewWall-numberHighlight">{unclearLegislators.length}</span> 位立委表態不明確；
    //        <span className="OverviewWall-numberHighlight">{noneLegislators.length}</span> 位立委表態沒有表態。</div>
    
    var {title} = this.props;
    var imgURL = require("./images/OverviewWall-pieChart.png");
    return (
      <div>
          <div className="OverviewWall-title">婚姻平權</div>
          <img className="OverviewWall-pieChart" src={imgURL} />

          <select className="OverviewWall-select">
              <option>儘速修法將同性婚姻合法化</option>
              <option>婚姻平權子議題 a </option>
              <option>婚姻平權子議題 b </option>
          </select> 
     
          <div className="OverviewWall">
              <div className="OverviewWall-group">
                <div className="OverviewWall-groupTitle">支持</div>
                {legiItemsFor}
              </div>
              <div className="OverviewWall-group">
                  <div className="OverviewWall-groupTitle">反對</div>
                  {legiItemsAgainst}
              </div>
              <div className="OverviewWall-group">
                  <div className="OverviewWall-groupTitle">不明確</div>
                  {legiItemsUnclear}
               </div>
          </div>

          <div className="OverviewWall">
              <div className="OverviewWall-group">
                  <div className="OverviewWall-groupTitle">未表態</div>
                  {legiItemsNone}
              </div>
          </div>
      </div>
    );
  }
}


