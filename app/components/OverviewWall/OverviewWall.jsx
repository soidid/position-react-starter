import React from "react";
import { Link } from "react-router";
import "./OverviewWall.css";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";

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
    var legiItemsFor = forLegislators

    .map((item, key)=>{

        var partyClass = "OverviewWall-avatar is-"+item.party_eng;
       
        return (
          <div className="OverviewWall-item"
             key={key}>
             <Link to="personIssue" params={{issue:"same-sex-marriage"}}>
                <div className="OverviewWall-opinionCount">{item.positionCount}</div>
                <div className={partyClass}
                     key={key}>
                     <LegislatorAvatar data={item.name} plain={true} name={true}/>
                </div>
             </Link>
          </div>
        )
    });

    // 反對
    var legiItemsAgainst = againstLegislators
    .map((item, key)=>{

        var partyClass = "OverviewWall-avatar is-"+item.party_eng;
        
        return (
          <div className="OverviewWall-item"
               key={key}>
             <Link to="personIssue" params={{issue:"same-sex-marriage"}}>
                <div className="OverviewWall-opinionCount">{item.positionCount}</div>
                <div className={partyClass}
                     key={key}>
                     <LegislatorAvatar data={item.name} plain={true} name={true}/>
                </div>
             </Link>
          
          </div>
        )
    });

    // 不明確
    var legiItemsUnclear = unclearLegislators
    .map((item, key)=>{

        var partyClass = "OverviewWall-avatar is-"+item.party_eng;
        
        return (
          <div className="OverviewWall-item"
               key={key}>
               <Link to="personIssue" params={{issue:"same-sex-marriage"}}>
                  <div className="OverviewWall-opinionCount">{item.positionCount}</div>
                  <div className={partyClass}
                       key={key}>
                       <LegislatorAvatar data={item.name} plain={true} name={true}/>
                  </div>
               </Link>
          </div>
        )
    });

     // 未表態
    var legiItemsNone = noneLegislators
    .map((item, key)=>{

        var partyClass = "OverviewWall-avatar is-"+item.party_eng;
        return (
          <div className="OverviewWall-item">

          <div className={partyClass}
               key={key}>
               <LegislatorAvatar data={item.name} plain={true}  name={true}/>
          </div>
          
          </div>
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
      <img className="OverviewWall-pieChart" src={imgURL} />
          
      <div className="OverviewWall-title">
          <select className="Records-title">
             <option>婚姻平權</option>
             <option>勞工</option>
             <option>核能</option>
          </select>  
          <select className="Records-title">
              <option>儘速修法將同性婚姻合法化</option>
              <option>每週 40 工時 </option>
              <option>分廠分照 </option>
          </select> 
      </div>
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


