import React, { useState } from "react";
import AddTask from "./Components/AddTask/AddTask.component";
import Tasks from "./Components/Tasks/Tasks.component";
import SimpleContext from "./Context/SimpleContext";

import { toast, ToastContainer } from "react-toastify";
import "./ReactToastify.css";
import "./App.css";

const App = () => {
  const [getTasks, setTasks] = useState({ tasks: [] });
  const [getTask, setTask] = useState({ task: "" });
  const [getShowTasks, setShowTasks] = useState({ showTasks: true });


  const changeInput = (event) => {
    setTask({ task: event.target.value });
  };

  const addTask = () => {
    const tasks = [...getTasks.tasks];
    if (getTask.task !== "") {
      const task = {
        name: getTask.task,
        id: Math.floor(Math.random() * 1000),
      };
      tasks.push(task);
      setTasks({ tasks: tasks });
      setTask({ task: "" });
      toast.success(`"${task.name}" با موفقیت اضافه شد.`, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const removeTask = (id) => {
    let tasks = [...getTasks.tasks];
    let task = tasks.findIndex((task) => task.id === id);
    task = tasks[task];
    toast.error(`"${task.name}" با موفقیت حذف شد!`, {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    tasks = tasks.filter((task) => task.id !== id);
    setTasks({ tasks: tasks });
  };

  let badgeColor = "bg-danger";
  let showButtonColor = "btn-primary";
  let ShowTasks = null;

  if (!getShowTasks.showTasks) {
    showButtonColor = "btn-secondary";
  }

  if (getTasks.tasks.length > 0) {
    badgeColor = "bg-success";
  }

  if (getShowTasks.showTasks && getTasks.tasks.length > 0) {
    ShowTasks = <Tasks />;
  }

  console.log(getShowTasks)
  return (
    <SimpleContext.Provider
      value={{
        tasks: getTasks.tasks,
        task: getTask.task,
        addTask: addTask,
        removeTask: removeTask,
        changeInput: changeInput,
      }}
    >
      <div className="rtl text-center">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h4 className="mb-5 mt-2">
          تعداد تسک های شما
          <span className={`mx-1 badge rounded-pill ${badgeColor}`}>
            {getTasks.tasks.length}
          </span>
          تا است.
        </h4>
        <AddTask />

        <button
          onClick={() => setShowTasks({ showTasks: !getShowTasks.showTasks })}
          style={{ marginTop: "20px" }}
          className={`btn ${showButtonColor}`}
        >
          نمایش تسک ها
        </button>
        {ShowTasks}
      </div>
    </SimpleContext.Provider>
  );
};

export default App;