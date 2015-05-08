import React from "react";
import { Link } from "react-router";

import Icon from "../Icon/Icon.jsx";
import './AppBar.css';

export default class AppBar extends React.Component {
  static getProps(stores, params) {
    var transition = stores.Router.getItem("transition");
    return {
        loading: !!transition
    };
  }

  constructor(props) { super(props)
      this.state = { showSideBar: false }
  }

  _onToggleShowSideBar(){
    this.setState({ 
        showSideBar: !this.state.showSideBar
    });
  }

  render() {
    var {showSideBar} = this.state;
    var sideBarItem = showSideBar ? (
          <div className="AppBar-sidebar">
              <Link className="AppBar-sidebarItem" to="personList">找立委</Link>
              <Link className="AppBar-sidebarItem" to="issueList">找議題</Link>
          </div>
        ):"";
  
    var bindToggleSideBar = this._onToggleShowSideBar.bind(this, null);
    return (
      <div className="AppBar">
          <div className="AppBar-topbar">
              <div className="AppBar-item"
                   onClick={bindToggleSideBar}>
                   <Icon icon={"bars"}/>
              </div>
          </div>
          {sideBarItem}
      </div>);
  }
}


