import Action from "./Action";
import Status from "./Status";
import { Link } from "react-router-dom";
const EmployeeDetailsContent = (props) => {
  function handleClick(){
    console.log("clickeddd");
    console.log(props.content);
}


  return (
    <Link to={`/employees/details/${props.content.id}`} className="link-styles">
    <div className="employeeDetailsContent" >
      {/* {props.content.map((attribute)=>{
            return <div>attribute</div>
        })} */}

      <div className="employeeAttribute">{props.content.name}</div>
      <div className="employeeAttribute">{props.content.id}</div>
      <div className="employeeAttribute">{props.content.date}</div>
      <div className="employeeAttribute">{props.content.role}</div>

      <Status status={props.content.status}/> 
      <div className="employeeAttribute">{props.content.experience}</div>
      {/* <div className="employeeAttribute">{props.content.action}</div> */}
      <Action id={props.content.id} handleClick={handleClick} handleDelete={props.handleDelete}/>
    </div>
    </Link>
  );
};

export default EmployeeDetailsContent;
