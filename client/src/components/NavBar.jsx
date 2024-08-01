import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
	return (
		<div className="navbar">
			<Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/characters">Characters</Link>
            <Link className="navbar-item" to="/templates">Templates</Link>
		</div>
	);
}
