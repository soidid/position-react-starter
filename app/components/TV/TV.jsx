import React from "react/addons";
import { Link } from "react-router";
import './TV.css';
import Icon from '../Icon/Icon.jsx';
import classNames from 'classnames';

export default class TV extends React.Component {
  constructor(props){ super(props)
    this.state = {
      activeItem: "苗博雅"
    }
  }

  _setActiveIem(value){
    this.setState({
      activeItem: value
    })
  }
  render () {
    var {activeItem} = this.state;
    var reporterImg = require("./images/reporter.jpg");
    var candidates = ["賴士葆","苗博雅","阮昭雄","余宛如"];
    var candidateItems = candidates.map((item,key)=>{
        var imgURL = require(`./images/${item}.png`);
        var imgClasses = classNames({
          "TV-img": true,
          "is-active" : activeItem === item
        });
        return (
          <div className="TV-menuItem"
               onClick={this._setActiveIem.bind(this,item)}>
              <img className={imgClasses} src={imgURL }/>
              <div className="TV-menuText">{item}</div>
          </div>
        )
    })
    return (
      <div className="TV">
          <div className="TV-header">
            <img className="TV-mainImg" src={reporterImg }/>
            <div className="TV-title">影音直擊</div>
          </div>
          <div className="TV-menu">{candidateItems}</div>
          <div className="TV-player">
          <div className="embed-container">
            <iframe width="100%" src="https://www.youtube.com/embed/P3Vm-fEZMJ0" frameBorder="0" allowfullscreen></iframe>
          </div>
          </div>
      </div>
          
    );
  }
}
