import React from "react";

const Task = props => {
  const { data } = props;
  return (
    <div className="taskItem">
      <li>Task: {data.description}</li>
      <li className="priority">Priority: {data.priority}</li>
    </div>
  );
};

export default Task;
