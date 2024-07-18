import "../styles/ListEmployeesStyles.scss";

import SelectField from "../components/SelectField";
import EmployeeDetailsContent from "./EmployeeDetailsContent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteComponent from "../components/DeleteComponent.jsx";
// import { useDispatch } from "react-redux";
// import { deleteEmployee } from "../store/employeeReducer.js";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "./employees/api.js";

const ListEmployee = () => {
  const [hello,{isSuccess}] = useDeleteEmployeeMutation();
  const [employees, setEmployees] = useState([]);
  const { data = [] } = useGetEmployeeListQuery();
  useEffect(() => {
    const list = data.map((employee) => ({
      ...employee,
      date: new Date(employee.createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    }));
    setEmployees(list);
  }, [data]);
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
  const [employeesDisplayed, setEmployeesDisplayed] = useState(employees);
  // useEffect(() => {
  // }, [employeesDisplayed]);
  useEffect(() => {
    if (
      statusFilter === "Active" ||
      statusFilter === "Inactive" ||
      statusFilter === "Probation"
    ) {
      setEmployeesDisplayed(
        employees.filter((employee) => employee.status === statusFilter)
      );
    } else {
      setEmployeesDisplayed(employees);
    }
  }, [statusFilter, employees]);

  function onChange(name, value) {
    setStatusFilter(value);
  }
  const [deleteId, setDeleteId] = useState("");
  const handleDelete = () => {
    console.log(deleteId);
    console.log("before deletion");
    hello(deleteId)
    if(isSuccess){
      console.log(isSuccess, hello )
    }
    setBlur(false);
    setDeleteId("");
  };

  function handleDeleteButton(e, id) {
    e.preventDefault();
    setDeleteId(id);
    setBlur(true);
  }

  const [blur, setBlur] = useState(false);
  return (
    <main>
      {blur ? (
        <DeleteComponent handleExit={setBlur} handleDelete={handleDelete} />
      ) : null}
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
          />
        );
      })}
      <div className="blurredPage"></div>
    </main>
  );
};

export default ListEmployee;
