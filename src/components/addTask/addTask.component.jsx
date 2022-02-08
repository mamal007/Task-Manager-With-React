import React from "react";

const AddTask = ({ changeInput, task, addTask }) => {
  return (
      <form onSubmit={event => event.preventDefault()} className="input-group mb-3 justify-content-center">
        <input
          type="text"
          onChange={changeInput}
          value={task}
          style={{ height: "100%" }}
        />
        <button type="submit" onClick={addTask} style={{ borderRadius: "2px" }}>
          افزودن به لیست
        </button>
      </form>
  );
};

export default AddTask;
