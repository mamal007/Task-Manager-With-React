import React, {useContext} from "react";
import SimpleContext from "../../Context/SimpleContext"
import Task from "../Task/Task.component";
import "./Tasks.style.css";

const Tasks = () => {
    const {tasks, removeTask} = useContext(SimpleContext);
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
