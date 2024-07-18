import Action from "./Action";
import Status from "./Status";
import { Link } from "react-router-dom";
const EmployeeDetailsContent = (props) => {
  return (
    <Link to={`/employees/details/${props.content.id}`} className="link-styles">
    <div className="employeeDetailsContent" >
      <div className="employeeAttribute">{props.content.name}</div>
      <div className="employeeAttribute">{props.content.id}</div>
      <div className="employeeAttribute">{props.content.date}</div>
      <div className="employeeAttribute">{props.content.role}</div>
      <Status status={props.content.status}/> 
      <div className="employeeAttribute">{props.content.experience}</div>
      <Action id={props.content.id}  handleDelete={props.handleDelete}/>
    </div>
    </Link>
  );
};

export default EmployeeDetailsContent;
