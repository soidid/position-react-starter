import React from "react/addons";
import { Link } from "react-router";
import './RecommendWeb.css';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class RecommendWeb extends React.Component {
  
  render () {

    var posts = (
        <div className="RecommendWeb-posts">
            <div className="RecommendWeb-post">
                <div className="RecommendWeb-author">謝繐吟</div>
                <div className="RecommendWeb-date">2015-05-15</div>
                <div className="RecommendWeb-content">她寫時事評論，不謾罵、意不在筆戰，要靠「說理」在網路時代舉足輕重十分難得，因為十分難行；後來我慢慢發現，人們不只因為苗博雅針砭角度出眾所以聆聽，更大的因素是：她的理說得平易近人，大家聽得懂她說什麼。</div>
                <div className="RecommendWeb-star">
                  <Icon icon={"star"}/> 824
                </div>
            </div>
            <div className="RecommendWeb-post">
                <div className="RecommendWeb-author">王希</div>
                <div className="RecommendWeb-date">2015-04-15</div>
                <div className="RecommendWeb-content">地方服務和問政紀錄良好，勤跑地方，真正關心居民生活。</div>
                <div className="RecommendWeb-star">
                  <Icon icon={"star"}/> 187
                </div>
            </div>
            
        </div>
    );

    var candidates = ["賴士葆","苗博雅","阮昭雄","余宛如"];

    var recommendPosts = candidates.map((candidate,index)=>{
      var candidateImg = "";
      try{
        candidateImg = require(`./images/${candidate}.png`);
        
      }catch(e){
        if(!candidateImg)
            candidateImg = require("./images/default.svg");     
      }
      return (
        <div className="RecommendWeb-item">
            <Link to="person" className="RecommendWeb-candidate">
                <img className="RecommendWeb-img"
                     src={candidateImg}/>
                <div className="RecommendWeb-dialogue">
                    你好，我是{candidate}<br/>
                    網友是這麼推薦我的：
                </div>
            </Link>
            {posts}
            <div className="RecommendWeb-btn">看更多推薦函</div>
        </div>
      )

    });


    return (
      <div className="RecommendWeb">
          {recommendPosts}
      </div>
          
    );
  }
}
