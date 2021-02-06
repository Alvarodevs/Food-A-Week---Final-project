import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light background-green mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home ICON</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn green-button">Login</button>
				</Link>
			</div>
		</nav>
	);
};
