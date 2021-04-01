import React, { useEffect, useState, useContext } from "react";
import { apiBaseUrl } from "../constants";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import { Navlink } from "react-router-dom";
import { Button, Jumbotron, Table } from "react-bootstrap";
import { Context } from "../store/appContext";
import * as Icon from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { WeekJumbo } from "../component/weekjumbotron";

//import "../../styles/index.scss";

export const RecipeCard = props => {
	const { store, actions } = useContext(Context);
	const [newData, setNewData] = useState(null);
	const [modalShow, setModalShow] = useState(false);

	console.log(props.days);
	useEffect(props => {
		//setNewData(days);
		// const url = `https://api.edamam.com/search?r=${encodeURIComponent(props.url)}&app_id=${store.APP_ID}&app_key=${
		// 	store.APP_KEY
		// }`;
		// fetch(url)
		// 	.then(resp => resp.json())
		// 	.then(data => {
		// 		setNewData(data);
		// 	})
		// 	.catch(error => {
		// 		console.log("Error loading message from backend", error);
		// 	});
	}, []);

	return (
		newData != null && (
			<div className="card menuWeek p-0 m-0 mr-4 mb-4">
				<img className="card-img-top p-0 m-0" src={newData[0].image} alt="Card image cap" />
				<div className=" card-body py-1 justify-content-between align-middle">
					<div className="card-title pt-2">{newData[0].label}</div>
				</div>

				<div className="align-card-buttons">
					<Button
						className=" weekplan-btn green-button mb-3"
						type="submit"
						onClick={() => setModalShow(true)}>
						{/* <Link
							to={{
								pathname: "/weekjumbotron",
								state: {
									data: newData
								}
							}}> */}
						Show
						{/* </Link> */}
					</Button>
					<WeekJumbo show={modalShow} onHide={() => setModalShow(false)} data={newData} />
					{/* <Button className="weekplan-btn  green-button" type="submit">
					<Link to="/newweek">Edit</Link>
				    </Button> */}
					<Icon.Trash className="icon-trash" />
				</div>
			</div>
		)
	);
};

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);
	//const { fullMenu, setFullMenu } = useState();
	// 	"http://www.edamam.com/ontologies/edamam.owl#recipe_e2044086d8346319d6c46b4273edf586",
	// 	"http://www.edamam.com/ontologies/edamam.owl#recipe_62f902aa94f7c6040c736bb8550a107f",
	// 	"http://www.edamam.com/ontologies/edamam.owl#recipe_e2044086d8346319d6c46b4273edf586"

	let fullMenu = [];

	var requestOptions = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + localStorage.getItem("accessToken"),
			"Content-Type": "application/json"
		}
	};
	//GETTING ALL MENUS LIST OF ONE USER
	fetch(`${apiBaseUrl}/api/me/menus`, requestOptions)
		.then(response => response.json())
		.then(result =>
			result.map((menus, index) => {
				//GETTING ONE SPECIFIC MENU WITH DAYS OF ONE USER
				return fetch(`${apiBaseUrl}/api/me/menus/${menus["id"]}/days`, requestOptions)
					.then(response => response.json())
					.then(result => fullMenu.push(result))
					.catch(error => console.log("Menus are not available now", error));
			})
		)
		.catch(error => console.log("Menus are not available now", error));

	// let menuList = fullMenu.map((item, index) => {
	// 	// console.log(item);
	// 	return <RecipeCard key={index} data={item} />;
	// });

	return (
		<div className="container-fluid">
			<div className="page-container d-flex">
				<div className="card-container d-flex justify-content-center mx-auto">
					<div>
						<div className="row all-cards ">{fullMenu ? <RecipeCard days={fullMenu} /> : ""}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

RecipeCard.propTypes = {
	days: PropTypes.object
};
