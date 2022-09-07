import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <img src='https://img.freepik.com/premium-vector/cookbook-logo-icon-symbol-with-recipe-book-with-cook-simple-negative-space-style-logo_279597-883.jpg' className="site-title" />
        <div>
            <input className="search" type="text" placeholder="Find yummy stuff!" />
            <button className="button" type="submit" value="submit">Search</button>
        </div>
        <div className="navLinks">
            <Link to="/recipes/:id">BeansPot</Link>
            <Link to="/recipes/">Recipes</Link>
            <Link to="/recipes/submit">Submit Recipe</Link>
        </div>
    </nav>
}