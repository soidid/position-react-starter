import React from "react/addons";
import { Link } from "react-router";
import './RecommendCard.css';
import data from './RecommendCard';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class RecommendCard extends React.Component {
  
  render () {
    var {candidate} = this.props;
    if(!candidate)
        candidate = "請選擇";
  
    var candidateImg = "";
    try{
        candidateImg = require(`./images/${candidate}.png`);
        
    }catch(e){
        if(!candidateImg)
            candidateImg = require("./images/default.svg"); 
          
    }
    var posts = (
        <div className="RecommendCard-posts">
            <div className="RecommendCard-post">
                <div className="RecommendCard-author">謝繐吟</div>
                <div className="RecommendCard-date">2015-05-15</div>
                <div className="RecommendCard-content">她寫時事評論，不謾罵、意不在筆戰，要靠「說理」在網路時代舉足輕重十分難得，因為十分難行；後來我慢慢發現，人們不只因為苗博雅針砭角度出眾所以聆聽，更大的因素是：她的理說得平易近人，大家聽得懂她說什麼。</div>
                <div className="RecommendCard-star">
                  <Icon icon={"star"}/> 824
                </div>
            </div>
            <div className="RecommendCard-post">
                <div className="RecommendCard-author">王希</div>
                <div className="RecommendCard-date">2015-04-15</div>
                <div className="RecommendCard-content">地方服務和問政紀錄良好，勤跑地方，真正關心居民生活。</div>
                <div className="RecommendCard-star">
                  <Icon icon={"star"}/> 187
                </div>
            </div>
            
        </div>
    );


    return (
      <div className="RecommendCard">
          <div className="RecommendCard-title">推薦函</div>
          <div className="RecommendCard-flexGrids">
            <div className="RecommendCard-GridOne">
                <img className="RecommendCard-img"
                     src={candidateImg}/>
                
            </div>
           
            <div className="RecommendCard-GridTwo RecommendCard-dialogue">
                你好，我是{candidate}<br/>
                網友是這麼推薦我的：
            </div>
          </div>
         
          {posts}

          <div className="RecommendCard-btn">看更多推薦函</div>

      </div>
          
    );
  }
}
