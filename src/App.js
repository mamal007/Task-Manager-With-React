import React, { Component } from "react";
import AddTask from "./components/AddTask/AddTask.component";
import Tasks from "./components/Tasks/Tasks.component";
import SimpleContext from "./Context/SimpleContext";

import { toast, ToastContainer } from "react-toastify";
import "./ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
    task: "",
    showTasks: true,
  };

  changeInput = (event) => {
    this.setState({ task: event.target.value });
  };

  addTask = () => {
    const tasks = [...this.state.tasks];
    if (this.state.task !== "") {
      const task = {
        name: this.state.task,
        id: Math.floor(Math.random() * 1000),
      };
      tasks.push(task);
      this.setState({ tasks: tasks, task: "" });
      toast.success(`${task.name} با موفقیت اضافه شد.`, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  removeTask = (id) => {
    let tasks = [...this.state.tasks];
    let task = tasks.findIndex((task) => task.id === id);
    task = tasks[task];
    toast.error(`${task.name} با موفقیت حذف شد!`, {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks: tasks });
  };

  render() {
    const { tasks, task, showTasks } = this.state;
    let badgeColor = "bg-danger";
    let showButtonColor = "btn-primary";
    let ShowTasks = null;

    if (!showTasks) {
      showButtonColor = "btn-secondary";
    }

    if (tasks.length > 0) {
      badgeColor = "bg-success";
    }

    if (showTasks && tasks.length > 0) {
      ShowTasks = <Tasks />;
    }

    return (
      <SimpleContext.Provider
        value={{
          state: this.state,
          addTask: this.addTask,
          removeTask: this.removeTask,
          changeInput: this.changeInput,
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
            {" "}
            تعداد تسک های شما
            <span className={`mx-1 badge rounded-pill ${badgeColor}`}>
              {tasks.length}
            </span>
            تا است.
          </h4>
          <AddTask />

          <button
            onClick={() => this.setState({ showTasks: !this.state.showTasks })}
            style={{ marginTop: "20px" }}
            className={`btn ${showButtonColor}`}
          >
            نمایش تسک ها
          </button>
          {ShowTasks}
        </div>
      </SimpleContext.Provider>
    );
  }
}

export default App;
