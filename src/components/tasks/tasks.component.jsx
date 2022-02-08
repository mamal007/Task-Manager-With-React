import React from "react";
import SimpleContext from "../../Context/SimpleContext"
import Task from "../Task/Task.component";
import "./Tasks.style.css";

const Tasks = () => {
  return (
    <SimpleContext.Consumer>
      {({ state, removeTask }) => (
        <div className="tasksList">
          {state.tasks.map((task) => (
            <Task
              key={task.id}
              name={task.name}
              removeTask={() => removeTask(task.id)}
            />
          ))}
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default Tasks;
