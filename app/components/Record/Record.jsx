import React from "react";
import { Link } from "react-router";

import Legislator from "../Legislator/Legislator.jsx";
import LegislatorAvatar from "../LegislatorAvatar/LegislatorAvatar.jsx";
import Icon from "../Icon/Icon.jsx";

import "./Record.css";
export default class Records extends React.Component {
  constructor(props) { super(props)
      this.state = { 
        
      }
  }

  render() {
   
    var {data} = this.props;
    var classSet = React.addons.classSet;

    var opinionClasses = classSet({
      "Records-opinion": true,
      "is-for": data.opinion === '贊成',
      "is-against": data.opinion === '反對',
      "is-unclear": data.opinion === '不明確'
    });

    return (
        <div className="Record">
            <div className="Record-entryTitle">
                <LegislatorAvatar data={data.name} name={true}/>
                <div className={opinionClasses}>{data.opinion}</div>
            </div>
            <div className="Record-quote">
                {data.quote}
            </div>
            <div className="Record-info">
                －{data.type}，{data.date}
            </div>
            <div className="Record-action">
                <div className="Record-actionItem">
                    <span className="Record-star"><Icon icon={"star"}/> {data.trustVote}</span>  
                </div>
                <div className="Record-actionItem">
                    <span className="Record-more"><Icon icon={"share"}/> 124</span>
                </div>
                <div className="Record-actionItem">
                    <span className="Record-more"><Icon icon={"ellipsis-h"}/>
                        <div className="Record-moreTooltip">tooltip</div>
                    </span>
                </div>
            </div>
        </div>
    );


    
  }
}




