import React from 'react';

import PropTypes from 'prop-types';
import './Task.style.css'

const Task = ({name , removeTask}) => {
    return (
      <div className="taskCard">
        <h2>{name}</h2>
        <button onClick={removeTask} > حذف تسک </button>
      </div>
    );
}

Task.propTypes = {
  name: PropTypes.string,
  removeTask: PropTypes.func,
}

export default Task;