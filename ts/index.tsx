import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {};
interface IState {
	todos: any[],
	filter: "ALL" | "COMPLETE" | "ACTIVE"
};

class Todos extends React.Component<IProps, IState> {

	private input: any;

	constructor() {
		super();
		this.state = {
			todos: [],
			filter: "ALL"
		};
		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(e:any) {
		e.preventDefault();

		this.setState({
			todos: [
				...this.state.todos,
				this.input.value
			]
		});
		this.input.value = "";
	}

	render() {
		let todos = this.state.todos;
		let todosDisplay = todos.map((todo, i)=>{
			return <li key={i}>{todo}</li>;
		});
		return <div>
			<h1>Todos</h1>
			<form onSubmit={this.addTodo}>
				<input type="text" ref={(ref)=>{this.input = ref;}}/>
			</form>
			<ul>
			{todosDisplay}
			</ul>
		</div>;
	}
}

ReactDOM.render(
	<Todos />, document.getElementById("app")
)