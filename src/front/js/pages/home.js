import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center ">{/* <h1>{""}</h1> */}</div>
			<div className="container services-description d-flex justify-content-center text-center text-plain mb-4">
				<h4>
					Check the recipes you want and organize your week. When you run out of time, check your saved weeks!
				</h4>
			</div>
			<div className="services-container d-flex flex-row justify-content-around text-align-center">
				{/* LINKS A PAGES: NEWWEEK / RECIPE / GROCERYLIST / LOCALSHOPS */}
				<button className="service-circle " id="weeks">
					<p className="button-text" />
					<b className="space-button-text">WEEK PLAN</b>
					{/* Link to=/newweek.js */}
				</button>

				<button className="service-circle" id="newweek">
					<p className="button-text">
						<b className="space-button-text">NEW WEEK MENU</b>
					</p>
					{/* Link to=/recipe.js */}
				</button>
				{/* <button className="service-circle">
					<b>GROCERY LIST</b>
					Link to=/grocerylist.js
				</button> */}
				<button className="service-circle" id="localshops">
					<p className="button-text">
						<b className="space-button-text">LOCAL SHOPS</b>{" "}
					</p>
					{/* Link to=/xxxxxx.js */}
				</button>
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
