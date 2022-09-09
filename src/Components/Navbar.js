import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <img src='https://img.freepik.com/premium-vector/cookbook-logo-icon-symbol-with-recipe-book-with-cook-simple-negative-space-style-logo_279597-883.jpg' className="site-title" />
        <div>
            <input className="search" type="text" placeholder="Find yummy stuff!" />
            <button className="button" type="submit" value="submit">Search</button>
        </div>
        <div>
            <Link className="navLinks" to="/">Recipes</Link>
            <Link className="navLinks" to="/recipes/submit">Submit</Link>
        </div>
    </nav>
}