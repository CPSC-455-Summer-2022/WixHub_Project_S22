import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="LoginPage">Login</Link>
		</nav>
	);
}