import SelectField from "../components/SelectField";
import EmployeeDetailsContent from "./EmployeeDetailsContent";
import { Link, useOutlet, useOutletContext, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import employees from "./employeesData";
import "../styles/ListEmployeesStyles.scss";
import Button from "../components/Button";
import DeleteComponent from "../components/deleteComponent";
import { actionTypes } from "./useReducer.jsx";
import { useContext } from "react";

const ListEmployee = () => {
  //read employees fro file
  const {state,dispatch} = useOutletContext();
  let count = 0;
  const field = {
    name: "statusField",
    label: "",
    divClassName: "statusField",
    id: "status",
    options: ["All", "Active", "Inactive", "Probation"],
    Component: SelectField,
  };
  const [statusFilter, setStatusFilter] = useState("All");
  const [employeesDisplayed, setEmployeesDisplayed] = useState(state.employees);
  // console.log(employeesDisplayed)
  useEffect(()=>{
    console.log(employeesDisplayed)
  },[employeesDisplayed])
  useEffect(() => {
    // console.log("entered status filter useEffect");
    // console.log(statusFilter)
    console.log("state from listemp")
    console.log(state)  
    if (statusFilter === "Active" || statusFilter === "Inactive" || statusFilter === "Probation" ){
      setEmployeesDisplayed(state.employees.filter((employee)=>
        employee.status === statusFilter
      ))
    }
    else{
      setEmployeesDisplayed(state.employees)
    }

    // console.log(employeesDisplayed);
  }, [statusFilter,state.employees]);

  function onChange(name, value) {
    // console.log("entered onchange")
    // console.log(name,value)
    // console.log(statusFilter);
    setStatusFilter(value);
  }
  const [deleteId,setDeleteId] = useState("")
    const handleDelete = () =>{
      console.log(deleteId)
      dispatch({
        type:actionTypes.DELETE_EMPLOYEE,
        payload: deleteId
      })
      setBlur(false)
      setDeleteId("")
    }

  function handleDeleteButton(e, id) {
    e.preventDefault();
    setDeleteId(id)
    setBlur(true);
  }

  const [blur,setBlur] = useState(false);

  return (
    <main>

      { blur? <DeleteComponent handleExit={setBlur} handleDelete={handleDelete}/>:null}
      <section className="heading">
        <h1>Employee List</h1>  
        <div>
          <h4>Filter By</h4>
          <SelectField {...field} onChange={onChange} />
          <Link className="link-styles" to="/employees/create">
            <div className="create-employee-button">
              <div className="plus-sign">+</div>
              <h3>Create Employee</h3>
            </div>
          </Link>
        </div>
      </section>
      <div className="employeeDetailsHeader">
        <div className="employeeAttribute">Employee Name</div>
        <div className="employeeAttribute">Employee ID</div>
        <div className="employeeAttribute">Joining Date</div>
        <div className="employeeAttribute">Role</div>
        <div className="employeeAttribute">Status</div>
        <div className="employeeAttribute">Experience</div>
        <div className="employeeAttribute">Action</div>
      </div>
      {employeesDisplayed.map((employee) => {
        count += 1;
        return (
          <EmployeeDetailsContent
            key={count}
            content={employee}
            handleDelete={handleDeleteButton}
            // handleEdit={handleEditButton}
          />
        );
      })}
      <div className="blurredPage"></div>

      {/* </section> */}
    </main>
  );
};

export default ListEmployee;
