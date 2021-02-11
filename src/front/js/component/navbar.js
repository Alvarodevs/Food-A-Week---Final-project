import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/containers.png";

export const Navbar = () => {
	return (
		<nav className="d-flex justify-content-around navbar navbar-light background-pink mb-1">
			<Link to="/">
				{/*<span className="navbar-brand mb-0 h1">Home ICON</span> */}
				{/* <img
					src="https://image.flaticon.com/icons/png/512/1676/1676708.png"
					className="d-flex navbar-brand mb-0 justify-content-auto"
				/> */}
				<img src={logo} alt="Logo" className="d-flex navbar-brand mb-0  ml-5" />;
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
