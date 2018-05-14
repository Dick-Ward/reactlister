import React, { Component } from "react";

class NewTaskForm extends Component {
  state = {
    description: "",
    priority: "",
    list: ""
  };

  render() {
    const handleChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

    const newTask = e => {
      e.preventDefault();
      this.props.addTask(this.state);
    };

    const lists = this.props.data.map(data => {
      return (
        <option value={data.list} key={data.list}>
          {data.list}
        </option>
      );
    });

    return (
      <form onSubmit={newTask}>
        <h3>Create a new Task</h3>
        <label>
          Task Description<input
            onChange={handleChange}
            id="description"
            type="text"
          />
        </label>
        <br />
        <label>
          Priority<input onChange={handleChange} id="priority" type="text" />
        </label>
        <br />
        <label>
          List<select id="list" onChange={handleChange}>
            <option>Select a list</option>
            {lists}
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTaskForm;
