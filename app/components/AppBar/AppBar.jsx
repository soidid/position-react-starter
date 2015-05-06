
import './AppBar.css';
import React from "react";
import { Link } from "react-router";

export default class AppBar extends React.Component {
  render() {
  	var logoURL = require("./images/AppBar-logo.png");
    return (
      <div className="AppBar">
        <div className="AppBar-item"><Link to="app">HOME</Link>
        </div>
        <div className="AppBar-item"><Link to="personList">找立委</Link>
        </div>
        <div className="AppBar-item"><Link to="issueList">找議題</Link>
        </div>
      </div>);
  }
}


