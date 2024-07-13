import { Link } from "react-router-dom";
import "../styles/NotFoundStyles.scss"
import notFound from "../assets/not-found-page.avif"
import homeIcon from "../assets/home-icon.svg"

const NotFound = () => {
    return <div className="not-found">
    <img src = {notFound}/>
    {
        console.log('displayed im')
    }

    <br/>
    <Link to="/" className="link-styles"><img src={homeIcon}/></Link>
    </div>
}

export default NotFound;