import React from "react";
import { Link } from "react-router";
import classNames from 'classnames';

import Legislator from "../Legislator/Legislator.jsx";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";
import Icon from "../Icon/Icon.jsx";
import UserAvatar from "../UserAvatar/UserAvatar.jsx";

import "./Record.css";
export default class Record extends React.Component {
  constructor(props) { super(props)
      this.state = { 
          showTooltip: false,
          showFull: false
      }
  }

  _onToggleShowFull(){

      this.setState({ 
          showFull: !this.state.showFull
      });
      
  }

  _onToggleShowTooltip(){

      this.setState({ 
          showTooltip: !this.state.showTooltip
      });
      
  }

   _onPlusOne(event){
    event.stopPropogation();
     
      
  }

  render() {
   
    var {data, subject, index} = this.props;
    var {showTooltip, showFull} = this.state;
    console.log(index);
    var opinionClasses = classNames({
      "Record-opinion": true,
      "is-for": data.opinion === '支持',
      "is-against": data.opinion === '反對',
      "is-unclear": data.opinion === '不明確'
    });
   
    var bindToggleShowTooltip = this._onToggleShowTooltip.bind(this, null);
    var bindToggleShowFull = this._onToggleShowFull.bind(this, null);
    
    var tooltip = (showTooltip) ? 
        <div className="Record-tooltip">
            <div className="Record-tooltipItem">複製連結</div>
            <div className="Record-tooltipItem">看原始資料</div>
            <div className="Record-tooltipItem">檢舉</div>
        </div> : ""; 
    
    var quoteContent = data.quote;
    if(!showFull && data.quote.length > 140)
        quoteContent = data.quote.substring(0,140);

    var readMoreSpan = (!showFull && data.quote.length > 140) ?
    <span className="Reocrd-readFull"> ...閱讀全部</span>:"";

    var editByItem = 
    <div className="Reocrd-editBy">
      
      －由 <Link className="Reocrd-link" to="user">Eddie Hung</Link> 編輯
    </div>;

    var otherTagsClasses = classNames({
      "Record-otherTags" : true,
      "is-show" : showFull
    });
    var buttonClasses = classNames({
      "Record-button" : true,
      "is-show" : showFull,
      "Record-buttonAbs" : true
    });
    var userImg = require("./user.jpg");
    var iconText = (showFull) ? "angle-up":"angle-down";

    var actionItem = (
        <div>
            <div className="Record-tag" 
                 onClick={this._onToggleShowFull.bind(this)}>
                 Kuochun Hung 和其他 767 人 標注為 <span className="Record-colorText">#支持勞工權益</span>
                 <div className={buttonClasses} onClick={this._onPlusOne.bind(this)} > +1 </div>
                 <div className="Record-tagIcon"><Icon icon={iconText}/></div>

            </div>
            <div className={otherTagsClasses}>
                <div className="Record-tag">
                     謝繐吟 和其他 532 人 標注為 <span className="Record-colorText">#不知所云</span>
                     <div className={buttonClasses} onClick={this._onPlusOne.bind(this)} > +1 </div>
                </div>
                <div className="Record-tag">
                     Ly Cheng 和其他 12 人 標注為 <span className="Record-colorText">#選前必看</span>
                     <div className={buttonClasses}
                          onClick={this._onPlusOne.bind(this)} > +1 </div>
                </div>
                <div className="Record-tag">
                    <img className="Record-userImg" src={userImg}/>
                    <input className="Record-userInput" 
                           placeholder="自訂新的標籤"/>
                </div>
            </div>
        </div>
    );

    if((index+1)%3===0){

      var newInput = (showFull) ? (
        <div className="Record-autoTag">
            <img className="Record-userImg" src={userImg}/>
            <input className="Record-userInput" 
                   placeholder="自訂新的標籤"/>
        </div>
      ) : "";
      actionItem = (
        <div className="Record-autoTag">
            <div className="Record-promptWrap">
              <div className="Record-promptTag">為賴士葆標注勞工表態立場</div>
              <div className="Record-longBtn">支持勞工權益</div>
              <div className="Record-longBtn">反對勞工權益</div>
              <div className="Record-longBtn">胡言亂語，不知所云</div>
              <div className="Record-newTag" onClick={this._onToggleShowFull.bind(this)}>自訂新標籤</div>
            </div>
            {newInput}
        </div>

      )
    }

    return (
        <div className="Record">
            <div className="Record-topRight" onClick={bindToggleShowTooltip}>
                <span className="Record-more"><Icon icon={"ellipsis-v"}/> 
                </span>
                {tooltip}
            </div>
            <div className="Record-review">768 人標注為 #支持勞工權益</div>
            <div className="Record-title">
                <LegislatorAvatar data={data.name} name={true}/> 
                <div className="Record-meta">／{data.type}</div>
            </div>
            <div className="Record-quote"
                 onClick={bindToggleShowFull}>
               {quoteContent}
               {readMoreSpan}
            </div>
            <div className="Reocrd-date">
                - {data.date}
            </div>
            {actionItem}

        </div>
    );


    
  }
}





