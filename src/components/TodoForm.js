import React, { Component } from "react";
import moment from "moment";
import "../App.css";


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.state.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.setState({value:''});
    }
  }

  onInputChange(event) {
    this.setState({value:event.target.value});
  }

  render() {
    return (
      <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
        <input
          autoFocus
          type="text"
          id="itemName"
          value={this.state.value}
          onChange={this.onInputChange}
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
