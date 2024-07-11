
import Logo from "../assets/kv-logo.png";

const Header = () => {
 return   <header>
 <div className="kv-logo-div">
     <img className="kv-logo" src={Logo}/>
 </div>
 <div className="empty-header">
    {/* <div className="nav-content">
        {/* <img src= {Icon} alt="employee list icon"/> */}
        {/* <Link className="link-styles" to="create"> Create Employee </Link> */}
    {/* </div>  */}
 </div>
</header>

}

export default Header;