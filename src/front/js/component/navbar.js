import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/containers.png";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light background-white mb-1">
			<div className="navbar-container d-flex">
				<Link to="/">
					{/*<span className="navbar-brand mb-0 h1">Home ICON</span> */}
					{/* <img
					src="https://image.flaticon.com/icons/png/512/1676/1676708.png"
					className="d-flex navbar-brand mb-0 justify-content-auto"
				/> */}
					<img src={logo} alt="Logo" className="d-flex navbar-brand mb-0 ml-5" />
				</Link>

				<div className="text-center mt-3 mx-auto">{/* <h2>{"Choose your recipes, plan your week"}</h2> */}</div>
				<div className="mr-1">
					<div className="mr-1">
						<Dropdown>
							<Dropdown.Toggle
								variant="success"
								className="dropdown-basic green-button btn btn-circle user-button mr-5">
								User Name
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="/userprofile">Profile</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="/">Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						{/* <Link to="/userprofile">
					<button className="weekplan-btn btn green-button">User name</button>
				</Link> */}
						{/* INSERTAR DROPDOWN CON 2 LINKS, UNA VEZ LOGEADO EL USER, UNO A USER PROFILE Y UN LOGOUT */}
					</div>
				</div>
			</div>
		</nav>
	);
};
