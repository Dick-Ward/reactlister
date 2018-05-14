import React, { Component } from "react";
import ListContainer from "./containers/listContainer";
import NewListForm from "./containers/newListForm";
import NewTaskForm from "./containers/newTaskForm";

class App extends Component {
  state = {
    listData: [],
    taskData: [],
    openForm: ""
  };
  render() {
    const newClick = e => {
      this.setState({
        openForm: this.state.openForm === e.target.id ? "" : e.target.id
      });
    };

    const addTask = task => {
      this.setState({ taskData: [...this.state.taskData, task] });
    };

    const addList = list => {
      this.setState({ listData: [...this.state.listData, list] });
    };

    return (
      <div>
        <button id="newList" onClick={newClick}>
          Create New List
        </button>
        <button id="newTask" onClick={newClick}>
          Create New Task
        </button>
        {this.state.openForm === "newList" ? (
          <NewListForm addList={addList} />
        ) : null}

        {this.state.openForm === "newTask" ? (
          <NewTaskForm addTask={addTask} data={this.state.listData} />
        ) : null}

        <ListContainer
          listData={this.state.listData}
          taskData={this.state.taskData}
        />
      </div>
    );
  }
}

export default App;
