import React from "react";
import SimpleContext from "../../Context/SimpleContext";

const AddTask = () => {
  return (
    <SimpleContext.Consumer>
      {({ changeInput , state, addTask }) => (
        <form
          onSubmit={(event) => event.preventDefault()}
          className="input-group mb-3 justify-content-center"
        >
          <input
            type="text"
            onChange={changeInput}
            value={state.task}
            style={{ height: "100%" }}
          />
          <button
            type="submit"
            onClick={addTask}
            style={{ borderRadius: "2px" }}
          >
            افزودن به لیست
          </button>
        </form>
      )}
    </SimpleContext.Consumer>
  );
};

export default AddTask;
