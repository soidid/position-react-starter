
import React from "react";
import { Link } from "react-router";

import Legislator from '../Legislator/Legislator.jsx';
import FactsCard from '../FactsCard/FactsCard.jsx';

import './Profile.css';
export default class Profile extends React.Component {
  
  constructor(props) { super(props)
      this.state = { showFull: false }
  }
 
  _toggleShowFull(){
    console.log(this);
    this.setState({
      showFull: !this.state.showFull
    })
  }

  render () {
    var foodData = {
        "name" : "食品安全",
        "vote" : 832,
        "facts" : [
            {
              "title":"儘速修法將同性婚姻合法化",
              "opinion": "贊成",
              "opinionCount": 12
            },
            {
              "title":"是否自設實驗室",
              "opinion": "反對",
              "opinionCount": 2
            },
            {
              "title":"是否分廠分照",
              "opinion": "反對",
              "opinionCount": 7
            },
            {
              "title":"是否訂立吹哨者條款",
              "opinion": "反對",
              "opinionCount": 8
            },
            {
              "title":"電子發票",
              "opinion": "贊成",
              "opinionCount": 8
            }
            ,
            {
              "title":"是否提高罰鍰",
              "opinion": "贊成",
              "opinionCount": 12
            }
        ]
    };
    var nuclearData = {
        "name" : "核能",
        "vote" : 719,
        "facts" : [
            {
              "title":"停建核四（龍門）電廠",
              "opinion": "贊成",
              "opinionCount": 12
            },
            {
              "title":"凍結核能發電後端營運基金",
              "opinion": "贊成",
              "opinionCount": 2
            }
        ]
    };
    var marriageData = {
        "name" : "婚姻平權",
        "vote" : 458,
        "facts" : [
            {
              "title":"同性婚姻合法化？",
              "opinion": "贊成",
              "opinionCount": 12
            }
        ]
    };
    var laborData = {
        "name" : "勞基法",
        "vote" : 402,
        "facts" : [
            {
              "title":"每周40工時？",
              "opinion": "贊成",
              "opinionCount": 50
            }
        ]
    };
    var watchData = {
        "name" : "監督條例",
        "vote" : 391,
        "facts" : [
            {
              "title":"應建立國會事後監督機制",
              "opinion": "反對",
              "opinionCount": 5
            },
            {
              "title":"應建立國會事前監督機制",
              "opinion": "贊成",
              "opinionCount": 1
            }
        ]
    };
    var referendumData = {
        "name" : "罷免",
        "vote" : 321,
        "facts" : [
            {
              "title":"罷免門檻下修至 5%",
              "opinion": "反對",
              "opinionCount": 5
            },
            {
              "title":"修改「罷免不得宣傳」的規定",
              "opinion": "贊成",
              "opinionCount": 1
            }
        ]
    };
    var taxData = {
        "name" : "兩稅合一",
        "vote" : 289,
        "facts" : [
            {
              "title":"兩稅合一",
              "opinion": "反對",
              "opinionCount": 5
            },
            {
              "title":"ＯＯＯＯＯＯ",
              "opinion": "贊成",
              "opinionCount": 1
            }
        ]
    };
    var boundClick = this._toggleShowFull.bind(this, null);
    var {showFull} = this.state;
    var content = (showFull === true) ? (
        <div className="Profile-factCards">
            <FactsCard data={foodData} listTop3={true}/>
            <FactsCard data={nuclearData} listTop3={true}/>
            <FactsCard data={marriageData} listTop3={true}/>
            <FactsCard data={laborData} listTop3={true}/>
            <FactsCard data={watchData} listTop3={true}/>
            <FactsCard data={referendumData} listTop3={true}/>
            <FactsCard data={taxData} listTop3={true}/>
        </div>
    ) : (
        <div className="Profile-factCards">
            <FactsCard data={foodData} listTop3={true}/>
            <FactsCard data={nuclearData} listTop3={true}/>
            <FactsCard data={marriageData} listTop3={true}/>
        </div>
    );

    var showMoreButton = (showFull === true) ? "":(
        <div>
            <div className="Profile-button"
                 onClick={boundClick}>看更多議題立場</div>
        </div>);
    
    return (
      <div className="Profile">
          <Legislator data="尤美女" />
          <div className="Profile-intro">
              
          </div>
            
            {content}
          
            {showMoreButton}
      </div>
          
    );
  }
}





