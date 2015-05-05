
import './AppBar.css';
import React from "react";
import { Link } from "react-router";

export default class AppBar extends React.Component {
  render() {
    return (
      <div className="AppBar">
        <a className="AppBar-home"
           href="/">Home</a>
      </div>);
  }
}


