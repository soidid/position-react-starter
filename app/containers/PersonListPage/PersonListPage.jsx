import React from "react";
import { RouteHandler } from "react-router";

import LegislatorAvatar from 'components/LegislatorAvatar/LegislatorAvatar.jsx';
import Icon from 'components/Icon/Icon.jsx';
import Input from 'components/Input/Input.jsx';

import "./PersonListPage.css";

import lyData from './ly-info.js';

var iso3166tw = {
    "CHA": "彰化縣",
    "CYI": "嘉義市",
    "CYQ": "嘉義縣",
    "HSQ": "新竹縣",
    "HSZ": "新竹市",
    "HUA": "花蓮縣",
    "ILA": "宜蘭縣",
    "KEE": "基隆市",
    "KHH": "高雄市",
    "KHQ": "高雄市",
    "MIA": "苗栗縣",
    "NAN": "南投縣",
    "PEN": "澎湖縣",
    "PIF": "屏東縣",
    "TAO": "桃園縣",
    "TNN": "台南市",
    "TNQ": "台南市",
    "TPE": "台北市",
    "TPQ": "新北市",
    "TTT": "台東縣",
    "TXG": "台中市",
    "TXQ": "台中市",
    "YUN": "雲林縣",
    "JME": "金門縣",
    "LJF": "連江縣"
    };
function constituency_area_parser (constituency) {
    switch (constituency[0]) {

        case 'proportional':
            return '全國不分區';
            break;
        case 'aborigine':
            return '山地原住民';
            break;
        case 'foreign':
            return '僑居國外國民';
            break;
        default:
            if (constituency[0] in iso3166tw) {
                result = iso3166tw[constituency[0]];
            } else {
                result = constituency[0] + '<br>' + constituency[1];
            }
            return result;
            break;
        
    }

}
function constituency_parser (constituency) {
	var result = "";
    switch (constituency[0]) {

        case 'proportional':
            return '全國不分區';
            break;
        case 'aborigine':
            return '山地原住民';
            break;
        case 'foreign':
            return '僑居國外國民';
            break;
        default:
            if (constituency[0] in iso3166tw) {
                if (constituency[1] == 0) {
                    result = iso3166tw[constituency[0]];
                } else {
                    result = iso3166tw[constituency[0]] + '第' + constituency[1] + '選區';
                }
            } else {
                result = constituency[0] + '<br>' + constituency[1];
            }
            return result;
            break;
        
    }

}
export default class PersonListPage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}

	constructor(props) { super(props)
      this.state = { currentTerm: "" }
    }

	_onInputChange(i,event){
      /*
        取得 input 的輸入值得方式有幾種

        第一種：透過 event.target 取得值
        event.target.value

        第二種：透過 refs 取得值
        this.refs.textInput.getDOMNode().value
        
        第三種：透過 id 或 class 取得，用 js 或 jQuery 的方式去抓
        例如 Jeremy 的範例是在 componet mount 之後，綁定
        componentDidMount: function(){
          this.$input = $('#todo-input');
        }
        
        */  
        this.setState({
          currentTerm: event.target.value
        });
    }

    _onSetInput(value){
      //console.log(value);
      this.setState({
          currentTerm: value
      });

    }
	render() {
		var { loading } = this.props;
		var { currentTerm } = this.state;
		

		var lyItems = lyData.data
		    .filter((item)=>{
                
                var shouldReturn = false;
                if(currentTerm !== ""){
                	if(item.constituency.indexOf(currentTerm)!== -1){
                		shouldReturn = true;
                	}
                	if(item.constituency_detail){
                		if(item.constituency_detail.indexOf(currentTerm)!== -1)
                			shouldReturn = true;
                	}
                	if(item.name.indexOf(currentTerm)!== -1){
                		shouldReturn = true;
                	}
                	if(item.party.indexOf(currentTerm)!== -1){
                		shouldReturn = true;
                	}
                }else{
                	shouldReturn = true;
                }
                if(shouldReturn)
                	return item;

		    })

		    .map((item,key)=>{
			var partyClass = "PersonListPage-avatar is-"+item.party_eng;

			var constituency = constituency_parser(item.constituency);
			

			return (
				<a className="PersonListPage-legislatorItem"
				   href="/person"
				   key={key}>
				    <div className={partyClass}>
                         <div className="PersonListPage-flex">
                         <div className="PersonListPage-flexLeft">
                        	 <LegislatorAvatar data={item.name} party={item.party_eng}/>
                         </div>
                         <div className="PersonListPage-flexMain">
                         	<div className="PersonListPage-name">{item.name}</div>
                         	<div className="PersonListPage-description">{item.party}</div>
                         	<div className="PersonListPage-description">{constituency}</div>
                         	<div className="PersonListPage-descriptionLight">{item.constituency_detail}</div>
                         </div>
                         </div>
                         <div className="PersonListPage-mainIssues">
                         	關鍵議題：食品安全、核能
                         </div>
                    </div>
                </a>
                
				
			)
		})
		var bindInputChange = this._onInputChange.bind(this, null);
        var bindSetInput = this._onSetInput.bind(this);

		return (
		<div className="PersonListPage">
           
            <Input handleInputChange={bindInputChange}
               	   handleSetInput={bindSetInput}
                   currentTerm={currentTerm}/>
		    {lyItems}
		</div>);
	}
}

PersonListPage.contextTypes = {
	stores: React.PropTypes.object
};
