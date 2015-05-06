import React from "react";
import { RouteHandler } from "react-router";
import { Link } from "react-router";

import LegislatorAvatar from "components/LegislatorAvatar/LegislatorAvatar.jsx";


import "./IssuePage.css";

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
export default class IssuePage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	constructor(props) { super(props)
      this.state = { showFull: false }
    }
 
    _toggleShowFull(){
      console.log(this);
      this.setState({
        showFull: !this.state.showFull
      })
    }
	render() {
		var { loading } = this.props;
         var {showFull} = this.state;

		var lyItems = lyData.data
		    
		    .map((item,key)=>{
			var partyClass = "PersonListPage-avatar is-"+item.party_eng;

			var constituency = constituency_parser(item.constituency);
			
            if(!showFull && key>2) return ;
			return (
				<div className="PersonListPage-legislatorItem"
				     key={key}>
				   <Link to="personIssue" params={{issue:"same-sex-marriage"}}>
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
                         	有 {119-key*14} 筆相關立場表態資料
                         </div>
                    </div>
                    </Link>
                </div>
                
				
			)
		})



       
        var boundClick = this._toggleShowFull.bind(this, null);

        var showMoreButton = (showFull === true) ? "":(
        <div>
            <div className="Profile-button"
                 onClick={boundClick}>列出所有相關立委</div>
        </div>);

        

        /////////

        var sub = [ 
          {
        	"title" : "法人除罪化",
            "des" : "食安問題人心惶惶，但最後裁罰的結果，往往和不法業者的巨額獲利比例懸殊。究竟要如何才能罰得到？"
          },
          { "title" : "吹哨者條款",
            "des" : "要揪出黑心食品，內部員工往往比稽察人員更知道工廠內部狀況。我們能夠過保護吹哨者，來建立更好的食安嗎？"
          },
          { "title" : "消費者保護（舉證反轉 + 補助訴訟費用）",
            "des" : "2008 年的三聚氰氨事件中，消費者因難舉證身體受到侵害而無法順利求償。此修法將食安受害的舉證責任，由受害消費者轉移為業者，讓舉證責任回歸廠商。\n律師打消費者訴訟官司有報酬：可讓更多律師加入投入消保相關訴訟。\n食品安全保護基金補助訴訟：食安基金可以用來補助消保相關訴訟費，以及補助「吹哨者」因檢舉僱主，遭不當對待時之訴訟費。"
          },
          {
            "title" : "「食安會報」入法",
            "des" : "目前的食安會報是任務型編組，只有在問題發生時才開會因應，但應變會議無法常態處理食安問題。"
          },
          { 
          	"title" : "中央設「食品警察隊」協助稽察 ",
          	"des": "餿水油風暴中，衛生人員赴工廠稽察時常碰壁，甚至受到業者威脅。\n提案改由中央政府配置「食品警察隊」，協助食品衛生稽查人員，排除稽查及取締違法之組礙。"
          }];
        var subItem = sub.map((item,key)=>{
            var styleFor = {"width":"13%"};
            var styleAgainst = {"width":"8%"};
            var styleUnclear = {"width":"5%"};
            var styleNone = {"width":"74%"};
            return (
              <div className="IssuePage-item"
                 href="/issue">
                  <Link to="issue">
                  <div className="IssuePage-itemTitle">{item.title}</div>
                  <div className="IssuePage-itemDescription">{item.des}</div>

                  <div className="IssuePage-itemPosition">
                      <div className="IssuePage-opinion is-for" style={styleFor}></div>
                      <div className="IssuePage-opinion is-against" style={styleAgainst}></div>
                      <div className="IssuePage-opinion is-unclear" style={styleUnclear}></div>
                      <div className="IssuePage-opinion is-none" style={styleNone}></div>
                  </div>
                  <div className="IssuePage-itemPositionDes">立法院表態：13%同意，8%反對，5%不明確，74%未表態（長條圖 or 圓餅圖）</div>
                  </Link>
              </div>
            )
        });


		return (
		<div className="IssuePage">
			<div className="IssuePage-pageTitle">食品安全</div>
			<div className="IssuePage-title">最相關的立委</div>
                {lyItems}
            	{showMoreButton}
            <div className="IssuePage-title">立法院表態牆</div>
            <div className="IssuePage-description">在食品安全這個議題下，立法院共有 5 個相關的議題表態。</div>
            <div className="IssuePage-items">
           		{subItem}
            </div>
		</div>);

	}
}

IssuePage.contextTypes = {
	stores: React.PropTypes.object
};
