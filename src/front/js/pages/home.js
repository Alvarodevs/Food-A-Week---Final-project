import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
//import "../../styles/index.scss";
import { Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	// const [location, setLocation] = useState({
	// 	longitude: 41.3818,
	// 	latitude: 2.1685
	// });

	// useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition(
	// 		function(position) {
	// 			if (location.latitude && location.longitude) {
	// 				setLocation({
	// 					longitude: position.coords.longitude,
	// 					latitude: position.coords.latitude
	// 				});
	// 			}
	// 		},
	// 		function(error) {
	// 			console.log(error);
	// 		},
	// 		{
	// 			enableHighAccuracy: true
	// 		}
	// 	);
	// }, []);
	// console.log(location);
	return (
		<div className="container">
			<div className="container services-description d-flex justify-content-center text-center text-plain my-4">
				<h4>
					Hello {store.user ? store.user.user_name : ""}! <br />
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
				{/* <Link to="/map">
					<Button variant="success" className="service-circle" id="localshops">
						<div className="button-text">{"LOCAL SHOPS"}</div>
					</Button>
				</Link> */}
			</div>
		</div>
	);
};
