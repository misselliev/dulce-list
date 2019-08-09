import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Chase my toy",
        completed: false
      },
      {
        id: 2,
        title: "Take a nap in sunshine",
        completed: false
      },
      {
        id: 3,
        title: "Take a walk",
        completed: false
      }
    ]
  };

  // Toggle completed
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dulce list App</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
