import React, { Component } from "react";

class NewListForm extends Component {
  state = {
    newListName: ""
  };
  render() {
    const newList = e => {
      e.preventDefault();
      this.props.addList({ list: this.state.newListName, tasks: [] });
    };

    const handleChange = e => {
      this.setState({ newListName: e.target.value });
    };
    return (
      <form onSubmit={newList}>
        <h3>Create a new List</h3>
        <label>
          List Name<input onChange={handleChange} type="text" />
          <input type="submit" />
        </label>
      </form>
    );
  }
}

export default NewListForm;
