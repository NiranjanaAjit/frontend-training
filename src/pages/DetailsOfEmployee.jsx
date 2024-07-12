import { useParams,  Link } from "react-router-dom";
import employees from "./employeesData";
import Status from "./Status";
import WhitePencil from "../assets/pencil-white.svg"
import "../styles/DetailsOfEmployeeStyles.scss"
const DetailsOfEmployee = () => {
  const params = useParams();
  console.log(params.id);
  const data = employees.filter((employee) => {
    // console.log(employee.id,params.id)

    return employee.id == params.id;
  });
  console.log(data[0].address);

  return (
    <main>
      <section className="heading">
        <h1>Employee Details</h1>
        <Link className="link-styles" to={`/employees/edit/${params.id}`}>
          <div className="edit-employee-button">
            <div className="edit-sign"><img src={WhitePencil} alt="edit-icon"/></div>
            <h3>Edit</h3>
          </div>
        </Link>
      </section>
      {data.map((employee) => {
        return (
          <div className="individualsDetails">
            <div>
              <h4>Employee Name</h4>
              <div>{employee.name}</div>
            </div>
            <div>
              <h4>Joining Date</h4>
              <div>{employee.date}</div>
            </div>
            <div>
              <h4>Department</h4>
              <div>{employee.department}</div>
            </div>
            <div>
            <h4>Role</h4>
              <div>{employee.role}</div>
            </div>
            <div>
              <h4>Status</h4>
              <Status status={employee.status} />
            </div>
            <div>
              <h4>Experience</h4>
              <div>{employee.experience}</div>
            </div>
            <div>
              <h4>Address</h4>
              <div>{employee.address}</div>
            </div>
            <div>
              <h4>Employee ID</h4>
              <div>{employee.id}</div>
            </div>

          </div>
        );
      })}
    </main>
  );
};

export default DetailsOfEmployee;
