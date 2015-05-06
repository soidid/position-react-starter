import React from "react/addons";
import { Link } from "react-router";
import './FactsCard.css';

import Icon from '../Icon/Icon.jsx';

export default class MainMenu extends React.Component {
  
  render () {
    var {data, listTop3} = this.props;
    
    var classSet = React.addons.classSet;
    
   
    var factItems = data.facts.map((item,key)=>{
        var opinionClasses = classSet({
              "FactsCard-opinion": true,
              "is-for": item.opinion === '贊成',
              "is-against": item.opinion === '反對',
              "is-unclear": item.opinion === '不明確'
            });

        if(listTop3 && key >= 3) return "";
        
        var countItem = (listTop3) ? "" : <div className="FactsCard-opinionCount">{item.opinionCount}</div>;
        return (
          <a className="FactsCard-listItem"
               href="person/same-sex-marraige">
              <div className={opinionClasses}>{item.opinion}</div>
              {item.title}
              {countItem}
          </a>

        )
    });

    return (
      <div className="FactsCard">

          <div className="FactsCard-content">
              <div className="FactsCard-mainTitle">{data.name}</div>
              <div>{factItems}</div>
              
              <div className="FactsCard-actions">
                
                <a className="FactsCard-button">
                    <Icon icon={"star"} />
                    <span className="FactsCard-buttonMeta">{data.vote}</span>
                </a>
                <a className="FactsCard-button"
                   href="#">
                   <Icon icon={"eye"} />
                   <span className="FactsCard-buttonMeta">2312</span>
                </a>
              </div>
          </div>

      </div>
          
    );
  }
}


