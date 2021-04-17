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
import { useHistory } from "react-router-dom";
//import { sources } from "webpack";

export const RecipeCard = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [urlsRecipes, setUrlsRecipes] = useState([]);
	const [oneUrlImage, setOneUrlImage] = useState("");
	const [modalShow, setModalShow] = useState(false);

	var requestOptions = {
		method: "GET",
		headers: {
			Authorization: "Bearer " + localStorage.getItem("accessToken"),
			"Content-Type": "application/json"
		}
	};
	useEffect(() => {
		fetch(`${apiBaseUrl}/api/me/menus/${props.id}/days`, requestOptions)
			.then(response => response.json())
			.then(result => {
				result.days.map((itemDay, index) => {
					doFetchSelectedRecipesByDay(itemDay.id);
				});
			})
			.catch(error => console.log("Days are not available now", error));
	}, []);

	function doFetchSelectedRecipesByDay(IDday) {
		fetch(`${apiBaseUrl}/api/me/days/${IDday}/selected_recipes`, requestOptions)
			.then(response => response.json())
			.then(result => {
				//NO HACER MAP, ALMACENAR SOLO UN RECIPE CODE, SI NO, DEMASIADAS PETICIONES A LA API EDAMAM
				for (var i = 0; i < result.selected_recipes.length; i++) {
					setUrlsRecipes(result.selected_recipes[0].recipe_code);
					console.log(urlsRecipes);
					break;
				}
			})
			.catch(error => console.log("selected_recipes are not available now", error));
	}

	//let source = "";
	let code = encodeURIComponent(urlsRecipes);
	fetch(`https://api.edamam.com/search?r=${code}&app_id=${store.APP_ID}&app_key=${store.APP_KEY}`)
		.then(response => response.json())
		.then(result => setOneUrlImage(result[0].image));

	console.log(oneUrlImage);

	const deleteMenu = e => {
		var requestOptions = {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + localStorage.getItem("accessToken"),
				"Content-Type": "application/json"
			}
		};
		fetch(`${apiBaseUrl}/api/me/menus/${props.id}`, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log("delete menu: ", result);
				toast.info("You have deleted one of your weekly menus");
				history.push("/home");
				history.push("/weeks");
				actions.getAllMenusCount();
			})
			.catch(error => error);
	};

	return (
		<div className="card menuWeek p-0 m-0 mr-4 mb-4">
			<img className="card-img-top p-0 m-0" src={oneUrlImage} alt="Card image cap" />
			<div className=" card-body py-1 justify-content-between align-middle">
				<div className="card-title pt-2">{props.title}</div>
			</div>
			<div className="align-card-buttons">
				<Button className=" weekplan-btn green-button mb-3" type="submit" onClick={() => setModalShow(true)}>
					Show
				</Button>
				<WeekJumbo show={modalShow} onHide={() => setModalShow(false)} data={props} />
				<Icon.Trash className="icon-trash" onClick={deleteMenu} />
			</div>
		</div>
	);
};

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);
	const [listOfMenus, setListOfMenus] = useState([]);

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
		return <RecipeCard key={index} id={item.id} title={item.title} />;
	});

	console.log("there is menus (weeks)?", store.thereismenus);
	if (store.thereismenus == "Y") {
		return (
			<div className="container-fluid">
				<div className="page-container d-flex">
					<div className="card-container d-flex justify-content-center mx-auto">
						<div className="row all-cards ">{dayMenu ? dayMenu : ""}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container-fluid">
				<div className="page-container d-flex flex-column justify-content-center mx-auto pt-5">
					<div className="card-container mx-auto ">
						<p className="justify-content-center mx-auto ">
							<h3>{"You still don't have weekly menus saved"}</h3>
						</p>
						<div className="d-flex mx-auto justify-content-center ">
							<button className="green-button btn p-2" id="button-0menus">
								<Link to="/new_week">New week</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

RecipeCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string
	//data: PropTypes.object
};

// WeekJumbo.propTypes = {
// 	data: PropTypes.array
// };
