import React from "react";
import { Link } from "react-router";

import Legislator from '../Legislator/Legislator.jsx';
import data from './Profile.js';
import './Profile.css';
export default class Profile extends React.Component {
  
  constructor(props) { super(props)
      this.state = {  }
  }
 
  render () {
   


// 這位候選人屬於 【臺北市】中正區、文山區 
    
    var basicItems = data.data.map((item,key)=>{
        var subItem = item.content;
        if(typeof(item.content)==="object"){
            subItem = item.content.map((i,k)=>{
                return <li>{i}</li>
            })
            subItem = <ul className="Profile-ul">{subItem}</ul>;
        }
        return (
            <div className="Profile-flexGrids">
              <div className="Profile-flexLeft">{item.title}</div>
              <div className="Profile-flexMain">{subItem}</div>
            </div>
        )
    })
    
    return (
      <div className="Profile">
          <div className="embed-container">
            <iframe width="100%" src="https://www.youtube.com/embed/P3Vm-fEZMJ0" frameBorder="0" allowFullScreen></iframe>
          </div>
          
          <div className="Profile-basic">
            <div className="Profile-title">賴士葆的野生履歷</div>
            {basicItems}
          </div>
          <div className="Profile-sameDistrict">這位候選人屬於<Link className="Profile-link" to="candidates">【臺北市】中正區、文山區</Link> </div>
            
      </div>
          
    );
  }
}





