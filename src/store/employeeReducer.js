import { createAction, createReducer } from "@reduxjs/toolkit";
import employees from "../pages/employeesData";
//actions
const addEmployee = createAction("ADD_EMPLOYEE");
const deleteEmployee = createAction("DELETE_EMPLOYEE");

const employeeReducer = createReducer({ list: employees }, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state.list.push(action.payload);
  });

  builder.addCase(deleteEmployee, (state, action) => {
    console.log("delEmp");
    state.list = state.list.filter(
      (employee) => employee.id !== action.payload
    );
  });
});

export { employeeReducer as default, addEmployee, deleteEmployee };
