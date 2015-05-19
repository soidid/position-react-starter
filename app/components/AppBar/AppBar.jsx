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

  render() {
  
    var {toggleSideBar} = this.props;
    return (
      <div className="AppBar">
          <div className="AppBar-item"
               onClick={toggleSideBar}>
               <Icon icon={"bars"}/>
          </div>
          <Link to="home" 
                className="AppBar-item">
               <Icon icon={"home"}/>
          </Link>
      </div>);
  }
}


