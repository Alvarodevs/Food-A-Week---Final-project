import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/containers.png";
import Dropdown from "react-bootstrap/Dropdown";
//import NavigationComponent from "./component/navigationcomponent";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [pageTitle, setPageTitle] = useState();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname == "/new_week") {
			setPageTitle("New Week");
		} else if (location.pathname == "/userprofile") {
			setPageTitle("User Profile");
		} else if (location.pathname == "/weeks") {
			setPageTitle("Weeks");
		} else if (location.pathname == "/map") {
			setPageTitle("Find your local store");
		} else {
			setPageTitle("Home");
		}
	}, [location]);

	return (
		<nav className="navbar navbar-light background-white mb-1">
			<div className="navbar-container d-flex justify-content-between">
				<Link to="/home">
					<img src={logo} alt="Logo" className="d-flex navbar-brand my-2 ml-5" />
				</Link>

				<h1> {pageTitle} </h1>

				{/* <div className="text-center mt-3 mx-auto"><NavigationComponent /></div> */}
				<div className="mr-1">
					<div className="mr-1">
						<Dropdown>
							<Dropdown.Toggle
								variant="success"
								className="dropdown-basic green-button btn btn-circle user-button my-2 mr-5"
							/>
							<Dropdown.Menu>
								<Dropdown.Item>
									<Link to="/userprofile">Profile</Link>
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="/" onClick={actions.logout}>
									Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</div>
		</nav>
	);
};
