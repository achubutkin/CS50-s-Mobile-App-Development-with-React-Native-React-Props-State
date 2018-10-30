import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Todo = props => (
  <li>
    <input type="checkbox" />
    <button>delete</button>
    <span>{props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    let text = prompt("Please, write Todo: ");
    if (text) {
      this.setState({
        todos: [...this.state.todos, { text: text }]
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>{this.state.todos.map(todo => <Todo todo={todo} />)}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
