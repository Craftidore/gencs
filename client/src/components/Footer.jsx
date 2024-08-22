import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<Link className="footer-item" to="/about">
				About
			</Link>
			<Link className="footer-item" to="/privacy">
				Privacy
			</Link>
		</div>
	);
}
