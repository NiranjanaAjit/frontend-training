import { useState } from "react";
import Trash from "../assets/delete.png";
import Edit from "../assets/pencil-blue.svg";
import { Link } from "react-router-dom";
const Action = (props) => {
  return (
    <div className="actionDiv">

      <img src={Trash} alt="trash icon" onClick={props.handleDelete} />
      <Link to={`/employees/edit/${props.id}`}>
        <img src={Edit} alt="edit-icon" onClick={props.handleClick}/>
      </Link>

    </div>
    
  );
};

export default Action;
