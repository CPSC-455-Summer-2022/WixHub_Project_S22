import { Link } from "react-router-dom";
import "../styling/NavBar.css";

export const NavBar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="LoginPage">User Dashboard</Link>
		</nav>
	);
}