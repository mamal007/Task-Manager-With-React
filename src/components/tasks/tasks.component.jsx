import React from "react";

import Task from "../task/task.component";
import "./tasks.style.css";

const Tasks = ({ tasks, removeTask }) => {
  return (
    <div className="tasksList">
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          removeTask={() => removeTask(task.id)}
        />
      ))}
    </div>
  );
};

export default Tasks;
