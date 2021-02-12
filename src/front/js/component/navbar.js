import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<nav className="d-flex  navbar navbar-light background-gray mb-1">
			<Link to="/">
				{/*<span className="navbar-brand mb-0 h1">Home ICON</span> */}
				<img
					src="https://image.flaticon.com/icons/png/512/1676/1676708.png"
					className="d-flex navbar-brand mb-0 justify-content-auto"
				/>
			</Link>
			<div className="text-center mt-3 mx-auto">
				<h4>{"Choose your recipes, plan your week"}</h4>
			</div>
			<div className="mr-1">
				<Dropdown>
					<Dropdown.Toggle variant="success" className="dropdown-basic green-button">
						User Name
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="/userprofile">
							Profile
							{/* <Link to="/userprofile" /> */}
						</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="/">
							Logout
							{/* <Link to="/" /> */}
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				{/* <Link to="/userprofile">
					<button className="weekplan-btn btn green-button">User name</button>
				</Link> */}
				{/* INSERTAR DROPDOWN CON 2 LINKS, UNA VEZ LOGEADO EL USER, UNO A USER PROFILE Y UN LOGOUT */}
			</div>
		</nav>
	);
};
