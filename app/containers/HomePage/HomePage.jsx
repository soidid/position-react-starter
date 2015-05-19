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
					<div>拜託，拜託，投我一票！</div>
					<h1>立委求職中</h1>

					<Link to="candidates" className="HomePage-btn">我的選區</Link>
					<Link to="issueList" className="HomePage-btn">找議題</Link>


					

				</div>
				

			</div>

		);
	}
}
