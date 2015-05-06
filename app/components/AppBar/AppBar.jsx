
import './AppBar.css';
import React from "react";
import { Link } from "react-router";

export default class AppBar extends React.Component {
  render() {
  	var logoURL = require("./images/AppBar-logo.png");
    return (
      <div className="AppBar">
        <a className="AppBar-item"
           href="/">HOME
        </a>
        <a className="AppBar-item"
           href="/person-list">找立委
        </a>
        <a className="AppBar-item"
           href="/issue-list">找議題
        </a>
      </div>);
  }
}


