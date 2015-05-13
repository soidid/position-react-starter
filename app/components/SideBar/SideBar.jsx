import React from "react";
import { Link } from "react-router";
import classNames from "classnames";

import Icon from "../Icon/Icon.jsx";
import './SideBar.css';

export default class SideBarItem extends React.Component {
  static getProps(stores, params) {
    var transition = stores.Router.getItem("transition");
    return {
        loading: !!transition
    };
  }

  constructor(props){ super(props)
    this.state = {
        "showSub" : false
    }
  }

  _toggleShowSub(i, event){
    event.stopPropagation();
    event.preventDefault();
    this.setState({
        "showSub" : !this.state.showSub
    });
   

  }

  render() {
    var {showSub} = this.state;
    var subIssues = classNames({
      "SideBar-issues" : true,
      "is-show" : showSub
    });
    var iconText = (showSub) ? "chevron-up" : "chevron-down";
    return(
      <div>
          <Link className="SideBar-subitem" to="issue">食品安全
              <div className="SideBar-icon"
                   onClick={this._toggleShowSub.bind(this,"")}><Icon icon={iconText}/></div>
          </Link>
          <div className={subIssues}>
              <Link className="SideBar-issue" to="issueVote" params={{issue : "food-safety"}}>法人除罪化</Link>
              <Link className="SideBar-issue" to="issueVote" params={{issue : "food-safety"}}>吹哨者條款</Link>
              <Link className="SideBar-issue" to="issueVote" params={{issue : "food-safety"}}>消費者保護（舉證反轉 + 補助訴訟費用）</Link>
              <Link className="SideBar-issue" to="issueVote" params={{issue : "food-safety"}}>「食安會報」入法</Link>
              <Link className="SideBar-issue" to="issueVote" params={{issue : "food-safety"}}>中央設「食品警察隊」協助稽察</Link>
          </div>
     </div>
    )
  }
}
export default class SideBar extends React.Component {
  static getProps(stores, params) {
    var transition = stores.Router.getItem("transition");
    return {
        loading: !!transition
    };
  }

  render() {
   
    return (
      <div className="SideBar">
          <div className="SideBar-sidebarContainer">
            <Link className="SideBar-item" to="home">首頁</Link>
            <Link className="SideBar-item" to="candidates">2016候選人</Link>
            <Link className="SideBar-item" to="personList">找立委</Link>
            <Link className="SideBar-item" to="issueList">找議題</Link>
            <SideBarItem />
            <Link className="SideBar-subitem" to="issue">核能</Link>
            <Link className="SideBar-subitem" to="issue">婚姻平權</Link>
            <Link className="SideBar-subitem" to="issue">勞基法</Link>
            <Link className="SideBar-subitem" to="issue">監督條例</Link>
            <Link className="SideBar-subitem" to="issue">罷免</Link>
            <Link className="SideBar-subitem" to="issue">兩稅合一</Link>
          </div>
          
      </div>);
  }
}


