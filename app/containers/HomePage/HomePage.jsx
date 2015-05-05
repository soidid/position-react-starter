import React from "react";
import MainMenu from "components/MainMenu/MainMenu.jsx";

export default class HomePage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <div>
		    <MainMenu />
			<h2>Homepage</h2>
			<p>This is the homepage.</p>
			<p>Try to go to a todo list page.</p>
		</div>;
	}
}
