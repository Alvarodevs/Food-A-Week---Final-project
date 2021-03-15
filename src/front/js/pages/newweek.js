import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import injectContext, { Context } from "../store/appContext";
import { Weekplan } from "../component/weekplan";
import { RecipeDetail } from "../component/recipe_detail_jumbo";
import { Form, Button, ListGroup, ButtonGroup, Dropdown, DropdownType } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

//const [recipes, setRecipes] = useState([]);

export const NewWeek = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");
	const [day, setDay] = useState("");
	const [query] = useDebounce(value, 1000);

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	actions.getRecipes(value);
	// };

	const addRecipe = event => {
		actions.NewWeek;
	};
	const handleInput = event => {
		setValue(event.target.value);
	};

	const mySelectDayFunction = value => {
		actions.Day;
		setDay(event.target.value);
		console.log(day);
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
						<Dropdown.Item
							onClick={() => {
								addRecipe(prop);
							}}>
							{" "}
							Breakfast
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								addRecipe(prop);
							}}>
							{" "}
							Snack 1
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								addRecipe(prop);
							}}>
							{" "}
							Lunch
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								addRecipe(prop);
							}}>
							{" "}
							Snack 2
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								addRecipe(prop);
							}}>
							{" "}
							Dinner
						</Dropdown.Item>
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
							<select
								className="custom-select day-selector"
								id="mySelectDay"
								onChange={mySelectDayFunction}>
								<option selected>Choose a day</option>
								<option value="Monday">Monday</option>
								<option value="Tuesday">Tuesday</option>
								<option value="Wednesday">Wednesday</option>
								<option value="Thursday">Thursday</option>
								<option value="Friday">Friday</option>
								<option value="Saturday">Saturday</option>
								<option value="Sunday">Sunday</option>
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
					</div>
				</div>
				<div className="results-body mr-0">
					<div className="search-result">
						<ListGroup className="d-flex">{searchResult}</ListGroup>
						<Button className="d-flex m-auto" onClick={() => actions.getMoreRecipes()}>
							more
						</Button>
					</div>
				</div>
			</div>
			<div className="d-flex col-6">
				<Weekplan />
			</div>
		</div>
	);
};
