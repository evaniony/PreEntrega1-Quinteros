import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () =>{
    return(
        <header>
            <h1 className="title-nav"><Link to='/'>maceta</Link></h1>
            <NavBar />
        </header>
    )
}

export default Header;