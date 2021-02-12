import React from "react";
import { Link, Dropdown, Navbar } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";

export const Navbar2 = () => {
	return (
		<Navbar className="d-flex  navbar navbar-light background-gray mb-1">
			<Link to="/">
				{/*<span className="navbar-brand mb-0 h1">Home ICON</span> */}
				<img
					src="https://image.flaticon.com/icons/png/512/1676/1676708.png"
					className="d-flex navbar-brand mb-0 justify-content-auto"
				/>
			</Link>
			<div className="text-center mt-3 mx-auto">
				<h2>{"Choose your recipes, plan your week"}</h2>
			</div>
			<Dropdown>
				<DropdownButton>
					<Dropdown.Item href="#/action-1">
						<Link to="/userprofile">Profile</Link>
					</Dropdown.Item>
					<Dropdown.Item href="#/action-2">
						<Link to="/">Logout</Link>
					</Dropdown.Item>
				</DropdownButton>
			</Dropdown>
			{/* INSERTAR DROPDOWN CON 2 LINKS, UNA VEZ LOGEADO EL USER, UNO A USER PROFILE Y UN LOGOUT */}
		</Navbar>
	);
};
