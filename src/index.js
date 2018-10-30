import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" />
    <button onClick={props.onDelete}>delete</button>
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
        todos: [...this.state.todos, { id: id++, text: text }]
      });
    }
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(val => val.id !== id)
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo onDelete={() => this.removeTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
