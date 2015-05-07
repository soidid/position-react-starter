import React from "react";
import { RouteHandler } from "react-router";
import { Link } from "react-router";
import lyData from './ly-position.js';
import OpinionGroup from "components/OpinionGroup/OpinionGroup.jsx";

import "./IssueVotePage.css";

import forData from "./data/for.js";
import againstData from "./data/against.js";
import unclearData from "./data/unclear.js";
import noneData from "./data/none.js";

export default class IssueVotePage extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
 
	render() {
    
		var pieChartURL = require("./images/IssueVotePage-pieChart.jpg");
        return (
          <div className="IssueVotePage">
              <div className="IssueVotePage-title">法人除罪化</div>
              <div className="IssueVotePage-description">食安問題人心惶惶，但最後裁罰的結果，往往和不法業者的巨額獲利比例懸殊。究竟要如何才能罰得到？</div>
              <div className="IssueVotePage-sectionTitle">立法院意見</div>
              <img className="IssueVotePage-pieChart"
                   src={pieChartURL}/>
    
              <OpinionGroup data={forData} />
              <OpinionGroup data={againstData} />
              <OpinionGroup data={unclearData} />
              <OpinionGroup data={noneData} />
              
          </div>
        );

	}
}

IssueVotePage.contextTypes = {
	stores: React.PropTypes.object
};
