import "../styles/WelcomeStyles.scss";
import { actionTypes } from "./useReducer.jsx";
import { v4 as uuidv4 } from "uuid";
import FormComponent from "./FormComponent";
import { useEffect, useState } from "react";
import "../createEmployeeStyles.scss";
import { useOutletContext } from "react-router-dom";
const CreateEmployee = () => {
const {state,dispatch} = useOutletContext();
console.log(state.employees,dispatch)
  const handleCreate=(data)=>{  
    console.group(data)
    console.log("inside hande create in create.jsx")
    dispatch({
      type:actionTypes.ADD_EMPLOYEE,
      payload: {...data, id: uuidv4()}
    })
  }
  return (
    <main>


    {/* <div className="create-employee"> */}
      <section className="heading">
        <h1>Create Employee</h1>
      </section>
      <section className="sections">

        <FormComponent state={state} dispatch={dispatch} handleCreateOrEdit={handleCreate}/>
      </section>
    {/* </div> */}
    </main>
  );
};

export default CreateEmployee;
