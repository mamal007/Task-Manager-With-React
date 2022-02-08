import React, { createContext } from "react";

const SimpleContext = createContext({
  state: {},
  addTask: () => {},
  removeTask: () => {},
  changeInput: () => {},
});

export default SimpleContext;
