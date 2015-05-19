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

  render() {
   
    var {data, subject} = this.props;
    var {showTooltip, showFull} = this.state;
    
    var opinionClasses = classNames({
      "Record-opinion": true,
      "is-for": data.opinion === '贊成',
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

    return (
        <div className="Record">
            <div className="Record-tag">國會徵信社調查結果</div>
            <div className="Record-title">
                <LegislatorAvatar data={data.name} name={true}/>
                <div className={opinionClasses}>{data.opinion}</div>
                <div className="Record-subject">{subject}</div>
            </div>
            
            <div className="Record-flexGrids">
                <div className="Record-flexLeft">行動</div>
                <div className="Record-flexMain">{data.type}</div>
            </div>

            <div className="Record-flexGrids">
              <div className="Record-flexLeft">內容</div>
              <div className="Record-flexMain">
                  <div className="Record-quote"
                       onClick={bindToggleShowFull}>
                     {quoteContent}
                     {readMoreSpan}
                  </div>
              </div>
            </div>

            <div className="Record-flexGrids">
                <div className="Record-flexLeft">日期</div>
                <div className="Record-flexMain">{data.date}</div>
            </div>

           
            {editByItem}
            <div className="Record-action">
                <div className="Record-actionItem">
                    <span className="Record-star"><Icon icon={"star"}/> {data.trustVote}</span>  
                </div>
                <div className="Record-actionItem">
                    <span className="Record-more"><Icon icon={"share"}/> 124</span>
                </div>
                <div className="Record-actionItem">
                    <span className="Record-more"
                          onClick={bindToggleShowTooltip}><Icon icon={"ellipsis-h"}/> 
                    </span>
                    {tooltip}
                </div>
            </div>
        </div>
    );


    
  }
}




