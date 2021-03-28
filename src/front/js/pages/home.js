import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
//import "../../styles/index.scss";
import { Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const handleUserName = () => {
		actions.get_user_name();
	};

	return (
		<div className="container">
			<div className="container services-description d-flex justify-content-center text-center text-plain my-4">
				<h4>
					Hello {handleUserName}! <br />
					<br />
					Check the recipes you want and organize your week. When you run out of time, check your saved weeks!
				</h4>
			</div>
			<div className="container d-flex flex-row justify-content-around text-align-center">
				<Link to="/weeks">
					<Button variant="success" className="service-circle" id="weeks">
						<div className="button-text">{"WEEK PLANS"}</div>
					</Button>
				</Link>

				<Link to="/new_week">
					<Button variant="success" className="service-circle" id="newweek">
						<div className="button-text">{"NEW WEEK MENU"}</div>
					</Button>
				</Link>
				<Link to="/map">
					<Button variant="success" className="service-circle" id="localshops">
						<div className="button-text">{"LOCAL SHOPS"}</div>
					</Button>
				</Link>
			</div>
		</div>
	);
};
