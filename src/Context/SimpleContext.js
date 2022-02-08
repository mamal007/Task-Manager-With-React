import { createContext } from "react";

const SimpleContext = createContext({
  tasks: [],
  task: "",
  addTask: () => {},
  removeTask: () => {},
  changeInput: () => {},
});

export default SimpleContext;
