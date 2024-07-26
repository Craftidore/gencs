import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
        </div>
    )
}