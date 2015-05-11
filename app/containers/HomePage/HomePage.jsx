import React from "react";
import { Link } from "react-router";
import "./HomePage.css";
export default class HomePage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		var avatarURL = require("./images/HomePage-avatar.png");
		return (
			<div className="HomePage">
			    <div className="HomePage-content">
					<img src={avatarURL}
						 className="HomePage-avtar"/>
					<div>嘿！讓我們一起試著努力看看。</div>
					<h1>立委選舉共筆</h1>

					<Link to="personList" className="HomePage-btn">找立委</Link>
					<Link to="issueList" className="HomePage-btn">找議題</Link>


					

				</div>
				

			</div>

		);
	}
}
