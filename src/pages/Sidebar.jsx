import Icon from "../assets/icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const handleLogOut = () => {
        localStorage.removeItem("token")
    }
  return (
    <aside>
      <nav>
        <Link className="link-styles">
          <div className="nav-content">
            <img src={Icon} alt="home icon" />
            Home
          </div>
        </Link>
        <Link className="link-styles" to="list">
          <div className="nav-content">
            <img src={Icon} alt="employee list icon" />
            Employee List
          </div>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
