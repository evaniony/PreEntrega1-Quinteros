import { Link } from "react-router-dom";
import CardWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <>
        <nav className="list-item">
                <ul>
                    <li><Link to="/category/deco">decoracion</Link></li>
                    <li><Link to="/category/bazar">bazar</Link></li>
                    <li><Link to="/"></Link>otros</li>
                </ul>
        </nav>
        <CardWidget />
        </>
    )
}

export default NavBar;