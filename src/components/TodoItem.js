import React, { Component } from "react";
import PropTypes from "prop-types";
import Todos from "./Todos";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "pink",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : " none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}

export default TodoItem;
