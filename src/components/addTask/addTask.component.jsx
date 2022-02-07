import React from 'react';

const AddTask = ({changeInput, task, addTask , buttonStyle}) => {
    return (
      <div className="input-group mb-3 justify-content-center">
        <input
          type="text"
          onChange={changeInput}
          value={task}
          style={{height: "100%"}}
        />
        <button onClick={addTask} style={buttonStyle}>
          افزودن به لیست
        </button>
      </div>
    );
}

export default AddTask;