import { Link } from "react-router-dom"

function Navbar () {
    return (
        <nav id="navbar">
            <div id="home"><Link to="/">Home</Link></div>
            <div id="catalog"><Link to="/shop">Catalog</Link></div>
        </nav>
    )
}

export default Navbar