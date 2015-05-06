import React from "react";
import { RouteHandler } from "react-router";
import { Link } from "react-router";

import Input from 'components/Input/Input.jsx';

import "./IssueListPage.css";

export default class IssueListPage extends React.Component {
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
		var issueList = 
        [
            {
              "id" : "food",
              "name" : "食品安全"
            },
            {
              "id" : "nuclear",
              "name" : "核能"
            },
            {
              "id" : "marriage",
              "name" : "婚姻平權"
            },
            {
              "id" : "labor",
              "name" : "勞基法"
            },
            {
              "id" : "watch",
              "name" : "監督條例"
            },
            {
              "id" : "referendum",
              "name" : "罷免"
            },
            {
              "id" : "tax",
              "name" : "兩稅合一"
            }
        ];
		var issueListItem = issueList.map((i,k)=>{
	    
	    var imgURL = require("./images/"+(k+1)+".png");
        return (
            <div className="IssueListPage-issue"
               key={k}>
               <Link to="issue">
               <img className="IssueListPage-issueImg"
                    src={imgURL} />
               <div className="IssueListPage-issueTitle">{i.name}</div>
               </Link>
            </div>
        )
        });

        var {currentTerm} = this.state;
        var bindInputChange = this._onInputChange.bind(this, null);
        var bindSetInput = this._onSetInput.bind(this);
        var examples = ['核能','食安','婚姻平權'];

		return (
		<div className="IssueListPage">
		    <Input handleInputChange={bindInputChange}
               	   handleSetInput={bindSetInput}
                   currentTerm={currentTerm}
                   examples={examples}
                   placeholder={"搜尋議題"}/>
		    {issueListItem}
		</div>);
	}
}

IssueListPage.contextTypes = {
	stores: React.PropTypes.object
};
