import React from "react/addons";
import { Link } from "react-router";
import './RecommendPost.css';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';
import Data from './RecommendPost.js';
import moment from "moment";

export default class RecommendPost extends React.Component {
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
  render () {
    var {currentTab} = this.state;
    var tabs = [{title:"最多人收藏",id:"vote"},{title:"最近更新",id:"timeline"},{title:"隨機排序",id:"random"}];
    
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


    var data = Data.data;
    if(currentTab === 'vote'){
         data.sort((a,b)=>{
          return b.star - a.star;
        });

    }else if(currentTab === 'timeline'){
        data.sort((a,b)=>{
          return moment(b.date) - moment(a.date);
        });
    }else {
        data.sort((a,b)=>{
          var r = Math.random();
          return 0.5-r;
        });

    }
    
        
    var posts = data.map((item,key)=>{
      var img = require(`./images/${item.author}.jpg`);
      return (
          <div className="RecommendPost-post">
                <div className="RecommendPost-topRight">
                    <span className="RecommendPost-more"><Icon icon={"ellipsis-v"}/> 
                    </span>
                    
                </div>

                <img className="RecommendPost-img" src={img}/>
                <div className="RecommendPost-author">{item.author}</div>
                <div className="RecommendPost-date">{item.date}</div>
                <div className="RecommendPost-content">{item.content}</div>
                <div className="RecommendPost-star">
                  <Icon icon={"star"}/> {item.star}
                </div>
          </div>
      )
    });
  
    return (
      <div className="RecommendPost">
          {tabsItem}
          <div className="RecommendPost-item">
            <div className="RecommendPost-posts">{posts}</div>
            <div className="RecommendPost-btn">看更多推薦函</div>
          </div>
      </div>
          
    );
  }
}
