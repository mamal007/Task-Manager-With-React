import React from 'react';

import './task.style.css'

const Task = ({name , removeTask}) => {
    return (
      <div className="taskCard">
        <h2>{name}</h2>
        <button onClick={removeTask} > حذف تسک </button>
      </div>
    );
}

export default Task;