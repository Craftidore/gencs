import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/templates">Templates</Link>
            <Outlet />
		</div>
	);
}
