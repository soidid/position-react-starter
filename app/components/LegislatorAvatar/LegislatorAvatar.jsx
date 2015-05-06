import React from "react";
import { Link } from "react-router";

import "./LegislatorAvatar.css"

export default class LegislatorAvata extends React.Component {
  render () {
    var {data, plain} = this.props;
    var imgURL;

    try {
      imgURL = require("./images/avatar/"+data+".png");
    }catch(e){
      imgURL = require("./images/default.jpg");
    }

    var result = (
        <div className="LegislatorAvatar">
            <img className="LegislatorAvatar-avatar"
                 src={imgURL} />
            <div className="LegislatorAvatar-name">{data}</div>
        </div>);


    if(plain){

        result = (
        <div className="LegislatorAvatar">
            <img className="LegislatorAvatar-avatarPlain"
               src={imgURL} />
            <div className="LegislatorAvatar-namePlain">{data}</div>
        </div>);

    }
  
    return result;
  }
}


