import React from "react";

export default class TodoListPage extends React.Component {
	static getProps(stores, params) {
		var { list } = params;
		return {
			id: list
		};
	}
	render() {
		var { id, list } = this.props;
		return <div>
			<h3>Todolist: {id}</h3>
			
		</div>;
	}
}
