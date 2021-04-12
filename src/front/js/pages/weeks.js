import React, { useEffect, useState, useContext } from "react";
import { apiBaseUrl } from "../constants";
import PropTypes, { func } from "prop-types";
import { Link } from "react-router-dom";
//import { Navlink } from "react-router-dom";
import { Button, Jumbotron, Table } from "react-bootstrap";
import { Context } from "../store/appContext";
import * as Icon from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { WeekJumbo } from "../component/weekjumbotron";
import { toast } from "react-toastify";
//import "../../styles/index.scss";

export const RecipeCard = props => {
	const { store, actions } = useContext(Context);
	const [newData, setNewData] = useState([]);
	const [dayID, setDayID] = useState();
	const [urlsRecipes, setUrlsRecipes] = useState([]);
	const [modalShow, setModalShow] = useState(false);

	console.log(props.data);

	let allDayData = props.data;
	let result = [];

	useEffect(() => {
		allDayData.map((object, index) => {
			console.log(object);
			// object.selected_recipes.map((urlToFetch, index) => {
			// 	urlToFetch.map((item, index) => {
			// 		console.log(item);
			// 	});
			// });
		});
	}, []);
	// console.log(url);

	var requestOptions = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + localStorage.getItem("accessToken"),
			"Content-Type": "application/json"
		}
	};

	// useEffect(() => {
	// 	fetch(`${apiBaseUrl}/api/me/menus/${props.id}/days`, requestOptions)
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			setNewData(data);
	// 			setDayID(data.days);
	// 		})
	// 		.catch(error => {
	// 			console.log("Error loading message from backend", error);
	// 		});
	// }, []);

	return (
		<div className="card menuWeek p-0 m-0 mr-4 mb-4">
			<img className="card-img-top p-0 m-0" alt="Card image cap" />
			<div className=" card-body py-1 justify-content-between align-middle">
				<div className="card-title pt-2">{props.title}</div>
			</div>

			<div className="align-card-buttons">
				<Button className=" weekplan-btn green-button mb-3" type="submit" onClick={() => setModalShow(true)}>
					Show
				</Button>
				<WeekJumbo show={modalShow} onHide={() => setModalShow(false)} data={props} />
				<Icon.Trash className="icon-trash" />
			</div>
		</div>
	);
};

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);
	const [listOfMenus, setListOfMenus] = useState([]);

	let dataObjects = [];

	var requestOptions = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + localStorage.getItem("accessToken"),
			"Content-Type": "application/json"
		}
	};

	useEffect(() => {
		fetch(`${apiBaseUrl}/api/me/menus`, requestOptions)
			.then(response => response.json())
			.then(result => {
				setListOfMenus(result);
			})
			.catch(error => console.log("Menus are not available now", error));
	}, []);

	let dayMenu = listOfMenus.map((item, index) => {
		//fetch to days
		fetch(`${apiBaseUrl}/api/me/menus/${item.id}/days`, requestOptions)
			.then(response => response.json())
			.then(result => {
				let daysMenu = result.days.map((itemDay, index) => {
					doFetchSelectedRecipesByDay(itemDay.id);
				});
			})
			.catch(error => console.log("Days are not available now", error));
		return <RecipeCard key={index} id={item.id} title={item.title} data={dataObjects} />;
	});

	function doFetchSelectedRecipesByDay(IDday) {
		fetch(`${apiBaseUrl}/api/me/days/${IDday}/selected_recipes`, requestOptions)
			.then(response => response.json())
			.then(result => {
				dataObjects.push(result);
			})
			.catch(error => console.log("selected_recipes are not available now", error));
	}

	// const doFetchGetImage = dayUrls => {
	// 	console.log("doFetchGetImage " + dayUrls);
	// 	fetch(dayUrls)
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			console.log("3rd fetch");
	// 			console.log(result);
	// 			//console.log(result.selected_recipes);
	// 		})
	// 		.catch(error => console.log("Images are not available now", error));
	// };

	return (
		<div className="container-fluid">
			<div
				className="page-container d-flex"
				// onClick={toast(
				// 	"Here you will find your saved weekly menus",
				// 	{
				// 		position: toast.POSITION.BOTTOM_RIGHT
				// 	},
				// 	{ autoClose: 6000 }
				// )}
			>
				<div className="card-container d-flex justify-content-center mx-auto">
					<div className="row all-cards ">{dayMenu ? dayMenu : ""}</div>
				</div>
			</div>
		</div>
	);
};

RecipeCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	data: PropTypes.array
};

// WeekJumbo.propTypes = {
// 	menus: PropTypes.array
// };
