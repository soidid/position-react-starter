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
    var sub = [ 
          {
          "title" : "法人除罪化",
            "des" : "食安問題人心惶惶，但最後裁罰的結果，往往和不法業者的巨額獲利比例懸殊。究竟要如何才能罰得到？"
          },
          { "title" : "吹哨者條款",
            "des" : "要揪出黑心食品，內部員工往往比稽察人員更知道工廠內部狀況。我們能夠過保護吹哨者，來建立更好的食安嗎？"
          },
          { "title" : "消費者保護（舉證反轉 + 補助訴訟費用）",
            "des" : "2008 年的三聚氰氨事件中，消費者因難舉證身體受到侵害而無法順利求償。此修法將食安受害的舉證責任，由受害消費者轉移為業者，讓舉證責任回歸廠商。\n律師打消費者訴訟官司有報酬：可讓更多律師加入投入消保相關訴訟。\n食品安全保護基金補助訴訟：食安基金可以用來補助消保相關訴訟費，以及補助「吹哨者」因檢舉僱主，遭不當對待時之訴訟費。"
          },
          {
            "title" : "「食安會報」入法",
            "des" : "目前的食安會報是任務型編組，只有在問題發生時才開會因應，但應變會議無法常態處理食安問題。"
          },
          { 
            "title" : "中央設「食品警察隊」協助稽察 ",
            "des": "餿水油風暴中，衛生人員赴工廠稽察時常碰壁，甚至受到業者威脅。\n提案改由中央政府配置「食品警察隊」，協助食品衛生稽查人員，排除稽查及取締違法之組礙。"
          }
        ];
    var subItems = sub.map((i,k)=>{
        return (
          <option>{i.title}</option>
        )
    })
    return (
      <div>
          <div className="OverviewWall-title">食品安全</div>
          <img className="OverviewWall-pieChart" src={imgURL} />

          <select className="OverviewWall-select">
              {subItems}
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


