import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
//import { Dropdown, DropdownType } from "react-bootstrap/Dropdown";
import injectContext, { Context } from "../store/appContext";
import { Weekplan } from "../component/weekplan";
//import { Edamam } from "../component/edamam";
import { RecipeDetail } from "../component/recipe_detail_jumbo";
//import "../../styles/newweek.scss";
import { Form, Button, ListGroup, ButtonGroup, Dropdown, DropdownType } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

//const [recipes, setRecipes] = useState([]);

export const NewWeek = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");
	const [query] = useDebounce(value, 1000);

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	actions.getRecipes(value);
	// };

	const handleInput = event => {
		setValue(event.target.value);
	};

	useEffect(
		() => {
			actions.getRecipes(query);
		},
		[query]
	);

	var searchResult = store.hits.map((item, index) => (
		<ListGroup.Item key={index} className="d-flex justify-content-between">
			<div>{item.recipe.label}</div>
			<div>
				<Dropdown className="d-flex flex-row m-auto toggle" size="xs">
					<Dropdown.Toggle />
					<Dropdown.Menu>
						<Dropdown.Item>Breakfast</Dropdown.Item>
						<Dropdown.Item>Sanck</Dropdown.Item>
						<Dropdown.Item>Lunch</Dropdown.Item>
						<Dropdown.Item>Snack</Dropdown.Item>
						<Dropdown.Item>Dinner</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</ListGroup.Item>
	));

	console.log(store.hits);

	return (
		<div className="newweek-container container-fluid d-flex">
			<div className="container-fluid col-6 m-0">
				<div className="weekplan-body">
					<Form>
						<Form.Control
							placeholder="Search Bar"
							onChange={handleInput}
							className="bar-body-dropdown col-12 p-3 m-auto w-100"
						/>
					</Form>
					<div className="btns-bar-body mx-0 w-100 justify-content-between my-4">
						<Form>
							<select className="custom-select">
								<option selected>Choose a day</option>
								<option value="1">Monday</option>
								<option value="2">Tuesday</option>
								<option value="3">Wednesday</option>
								<option value="4">Thursday</option>
								<option value="5">Friday</option>
								<option value="6">Saturday</option>
								<option value="7">Sunday</option>
							</select>
						</Form>
						<Form>
							<select className="custom-select">
								<option selected>In case you need ideas</option>
								<option value="1">Rice</option>
								<option value="2">Pasta</option>
								<option value="3">Fish</option>
								<option value="4">Salmon</option>
								<option value="5">Pork</option>
								<option value="6">Steak</option>
								<option value="7">Chicken</option>
								<option value="8">Soup</option>
								<option value="9">Potato</option>
								<option value="10">Lentils</option>
								<option value="11">Vegetables</option>
								<option value="12">Soy</option>
								<option value="13">Curry</option>
								<option value="14">Tomato</option>
								<option value="15">Tofu</option>
								<option value="16">Red</option>
								<option value="17">White</option>
								<option value="18">Green</option>
								<option value="19">Steam</option>
								<option value="20">Fry</option>
							</select>
						</Form>
						<Form>
							<select className="custom-select">
								<option selected>Time</option>
								<option value="1">Less than 20 minutes</option>
								<option value="2">20 - 30 minutes</option>
								<option value="3">30 - 45 minutes</option>
								<option value="4">More than 45 minutes</option>
							</select>
						</Form>

						{/* <Dropdown className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Food type</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Rice</Dropdown.Item>
								<Dropdown.Item>Pasta</Dropdown.Item>
								<Dropdown.Item>Fish</Dropdown.Item>
								<Dropdown.Item>Meat</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Time cooking</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>{"< 20 minutes"}</Dropdown.Item>
								<Dropdown.Item>{"20 - 30 minutes"}</Dropdown.Item>
								<Dropdown.Item>{"30 - 45 minutes"}</Dropdown.Item>
								<Dropdown.Item>{"> 45 minutes"}</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown> */}
					</div>
				</div>
				<div className="results-body mr-0">
					<div className="search-result">
						<ListGroup className="d-flex">{searchResult}</ListGroup>
					</div>
				</div>
			</div>
			<div className="d-flex col-6">
				<Weekplan />
			</div>
		</div>
	);
};
