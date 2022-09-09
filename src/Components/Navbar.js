import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return <nav className="nav">
        <img onClick={() => { navigate(`/`) }} src='https://img.freepik.com/premium-vector/cookbook-logo-icon-symbol-with-recipe-book-with-cook-simple-negative-space-style-logo_279597-883.jpg' className="site-title" />
        <div>
            <input className="search" type="text" placeholder="Find yummy stuff!" />
            <Link to="/recipes/6UYdAs3y5oxB5cPs0wyMQ3"><button className="button" type="submit" value="submit">Search</button></Link>
        </div>
        <div>
            <Link className="navLinks" to="/">Recipes</Link>
            <Link className="navLinks" to="/recipes/submit">Submit</Link>
        </div>
    </nav>
}