import React, { Component } from "react";
import List from "../components/list";

class ListContainer extends Component {
  render() {
    const listMap = this.props.listData.map(data => {
      return (
        <List
          key={data.list}
          listName={data.list}
          tasks={this.props.taskData.filter(task => {
            return task.list === data.list;
          })}
        />
      );
    });
    return <div>{listMap}</div>;
  }
}

export default ListContainer;
