import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/containers.png";
import Dropdown from "react-bootstrap/Dropdown";
//import NavigationComponent from "./component/navigationcomponent";

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
					<img src={logo} alt="Logo" className="d-flex navbar-brand my-2 ml-5" />
				</Link>

				<div className="text-center mt-3 mx-auto">{/* <NavigationComponent /> */}</div>
				<div className="mr-1">
					<div className="mr-1">
						<Dropdown>
							<Dropdown.Toggle
								variant="success"
								className="dropdown-basic green-button btn btn-circle user-button my-2 mr-5"
							/>
							<Dropdown.Menu>
								<Dropdown.Item href="/userprofile">Profile</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="/">Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</div>
		</nav>
	);
};
