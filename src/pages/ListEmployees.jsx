import SelectField from "../components/SelectField";
import EmployeeDetailsContent from "./EmployeeDetailsContent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import employees from "./employeesData";
import "../styles/ListEmployeesStyles.scss";

const ListEmployee = () => {
  //read employees fro file

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
  // console.log(employeesDisplayed)
  useEffect(() => {
    console.log("entered status filter useEffect");
    setEmployeesDisplayed(() => {
      employees.filter((employee) => {
        employee.status == statusFilter;
      });
    });
    console.log(employeesDisplayed);
  }, [statusFilter]);

  function onChange(name, value) {
    setStatusFilter(value);
    console.log(name, statusFilter);
  }

  return (
    <main>
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
      {/* <section className="sections"> */}
      <div className="employeeDetailsHeader">
        <div className="employeeAttribute">Employee Name</div>
        <div className="employeeAttribute">Employee ID</div>
        <div className="employeeAttribute">Joining Date</div>
        <div className="employeeAttribute">Role</div>
        <div className="employeeAttribute">Status</div>
        <div className="employeeAttribute">Experience</div>
        <div className="employeeAttribute">Action</div>
      </div>
      {employees.map((employee) => {
        count += 1;
        return <EmployeeDetailsContent key={count} content={employee} />;
      })}

      {/* </section> */}
    </main>
  );
};

export default ListEmployee;
