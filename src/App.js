import React, { Component } from "react";
import ListContainer from "./containers/listContainer";
import NewListForm from "./containers/newListForm";
import NewTaskForm from "./containers/newTaskForm";

class App extends Component {
  state = {
    listData: [],
    taskData: []
  };
  render() {
    const addTask = task => {
      this.setState({ taskData: [...this.state.taskData, task] });
    };

    const addList = list => {
      this.setState({ listData: [...this.state.listData, list] });
    };

    return (
      <div>
        <NewListForm addList={addList} />
        <NewTaskForm addTask={addTask} data={this.state.listData} />
        <ListContainer
          listData={this.state.listData}
          taskData={this.state.taskData}
        />
      </div>
    );
  }
}

export default App;
