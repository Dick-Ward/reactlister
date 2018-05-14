import React from "react";
import Task from "./task";

const List = props => {
  const tasks = props.tasks.map(task => {
    return <Task key={task.description} data={task} />;
  });

  return (
    <div className="card">
      <h3>{props.listName}</h3>
      <div>{tasks}</div>
    </div>
  );
};

export default List;
