import Action from "./Action";
import Status from "./Status";
const EmployeeDetailsContent = (props) => {
  return (
    <div className="employeeDetailsContent">
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
      <Action />
    </div>
  );
};

export default EmployeeDetailsContent;
