import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center ">{/* <h1>{""}</h1> */}</div>
			<div className="container services-description d-flex justify-content-center text-center text-plain my-4">
				<h4>
					Check the recipes you want and organize your week. When you run out of time, check your saved weeks!
				</h4>
			</div>
			<div className="container d-flex flex-row justify-content-around text-align-center">
				{/* LINKS A PAGES: NEWWEEK / RECIPE / GROCERYLIST / LOCALSHOPS */}
				<Link to="/weeks">
					<Button className="service-circle" id="newweek">
						<div className="button-text">{"WEEK PLANS"}</div>
					</Button>
				</Link>

				<Link to="/newweek">
					<Button className="service-circle" id="newweek">
						<div className="button-text">{"NEW WEEK MENU"}</div>
					</Button>
				</Link>
				{/* <button className="service-circle">
					<b>GROCERY LIST</b>
					Link to=/grocerylist.js
				</button> */}
				<Link to="/map">
					<Button className="service-circle" id="localshops">
						<div className="button-text mt-4 pt-2">{"LOCAL SHOPS"}</div>
					</Button>
				</Link>
			</div>
			<div />
			{/* <div className="carousel-menus container-fluid d-flex justify-content-center text-center text-plain mx-auto my-4">
				RECIPES CAROUSEL */}
			{/* <Cardesk>
					<Cardmenus />
				</Cardesk>*/}
			{/* </div> */}
		</div>
	);
};
