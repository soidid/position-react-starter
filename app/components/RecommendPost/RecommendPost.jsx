import React from "react/addons";
import { Link } from "react-router";
import './RecommendPost.css';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class RecommendPost extends React.Component {
  
  render () {

    var posts = (
        <div className="RecommendPost-posts">
            <div className="RecommendPost-post">
                <div className="RecommendPost-author">謝繐吟</div>
                <div className="RecommendPost-date">2015-05-15</div>
                <div className="RecommendPost-content">她寫時事評論，不謾罵、意不在筆戰，要靠「說理」在網路時代舉足輕重十分難得，因為十分難行；後來我慢慢發現，人們不只因為苗博雅針砭角度出眾所以聆聽，更大的因素是：她的理說得平易近人，大家聽得懂她說什麼。</div>
                <div className="RecommendPost-star">
                  <Icon icon={"star"}/> 824
                </div>
            </div>
            <div className="RecommendPost-post">
                <div className="RecommendPost-author">王希</div>
                <div className="RecommendPost-date">2015-04-15</div>
                <div className="RecommendPost-content">地方服務和問政紀錄良好，勤跑地方，真正關心居民生活。</div>
                <div className="RecommendPost-star">
                  <Icon icon={"star"}/> 187
                </div>
            </div>
            
        </div>
    );

    
    var candidateImg = require(`./images/賴士葆.png`);
    

    return (
      <div className="RecommendPost">
          <div className="RecommendPost-item">
           
            {posts}
            <div className="RecommendPost-btn">看更多推薦函</div>
          </div>
      </div>
          
    );
  }
}
