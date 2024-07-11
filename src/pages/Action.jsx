import Trash from "../assets/delete.png";
import Edit from "../assets/pencil.png"

const Action = () => {
    return <div className="actionDiv">
        <img src={Trash} alt="trash icon"/>
        <img src={Edit} alt="edit-icon"/>
    </div>
}

export default Action;