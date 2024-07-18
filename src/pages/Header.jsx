import Logo from "../assets/kv-logo.png";
import Logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <header>
      <div className="kv-logo-div">
        <img className="kv-logo" src={Logo} />
      </div>
      <div className="empty-header">
        <Link className="link-styles" to="/" onClick={handleLogOut}>
          <img src={Logout} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
