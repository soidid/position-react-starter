import React from "react";
import { Link } from "react-router";
import './Legislator.css';

export default class Legislator extends React.Component {
  render () {
    var {data} = this.props;
    var imgURL;

    try {
      imgURL = require("./images/avatar/"+data+".png");
    }catch(e){
      imgURL = require("./images/default.jpg");
    }
  
    return (
      <a className="Legislator"
         href="/person">
          <img className="Legislator-avatar"
               src={imgURL} />
          <div className="Legislator-name">{data}</div>
      </a>
          
    );
  }
}


