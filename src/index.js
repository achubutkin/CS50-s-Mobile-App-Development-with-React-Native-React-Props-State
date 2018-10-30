import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Todo = props => (
  <li>
    <input type="text" />
    <button>delete</button>
    <span>{this.props.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        <ul>{this.state.todos.map(todo => <Todo todo={todo} />)}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
