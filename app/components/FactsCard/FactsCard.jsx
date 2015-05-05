import React from "react/addons";
import { Link } from "react-router";
import './FactsCard.css';

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
          <div className="FactsCard-listItem">
              <div className={opinionClasses}>{item.opinion}</div>
              {item.title}
              {countItem}
          </div>

        )
    });

    return (
      <div className="FactsCard">

          <div className="FactsCard-content">
              <div className="FactsCard-mainTitle">{data.name}</div>
              <div>{factItems}</div>
              
              <div className="FactsCard-actions">
                
                <a className="FactsCard-button">
                    {data.vote} 人<br/>
                    <span className="FactsCard-buttonMeta">覺得重要</span>
                </a>
                <a className="FactsCard-button"
                   href="index.html#records">
                   2312 人<br/>
                   查看過
                </a>
              </div>
          </div>

      </div>
          
    );
  }
}


