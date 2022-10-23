import CardWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <>
        <nav className="list-item">
                <ul>
                    <li>Categoria 1</li>
                    <li>Categoria 2</li>
                    <li>Categoria 3</li>
                </ul>
        </nav>
        <CardWidget />
        </>
    )
}

export default NavBar;