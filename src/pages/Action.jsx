import Trash from "../assets/delete.png";
import Edit from "../assets/pencil.png";
import { Link } from "react-router-dom";
const Action = (props) => {

  return (
    <div className="actionDiv">
      <img src={Trash} alt="trash icon" />
      <Link to={`/employees/edit/${props.id}`}>
        <img src={Edit} alt="edit-icon" onClick={props.handleClick}/>
      </Link>
    </div>
  );
};

export default Action;
