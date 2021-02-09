import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="d-flex navbar navbar-light background-gray mb-1">
			<Link to="/">
				{/*<span className="navbar-brand mb-0 h1">Home ICON</span> */}
				<img src="" className="d-flex navbar-brand mb-0 justify-content-auto" />
			</Link>
			<div className="text-center mt-3 mx-auto">
				<h2>{"Choose your recipes, plan your week"}</h2>
			</div>
			<div className="mr-1">
				<Link to="/demo">
					<button className="weekplan-btn btn green-button">User name</button>
				</Link>
			</div>
		</nav>
	);
};
