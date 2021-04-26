import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Weekplan } from "../component/weekplan";
import { RecipeDetail } from "../component/recipe_detail_jumbo";
import { Form, Button, ListGroup, ButtonGroup, Dropdown, DropdownType } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { toast } from "react-toastify";

//const [recipes, setRecipes] = useState([]);

export const NewWeek = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");
	const [selectedDay, setSelectedDay] = useState("0");
	const [selectedPosition, setSelectedPosition] = useState("0");
	const [selectedQuery, setSelectedQuery] = useState("");
	const [selectedTime, setSelectedTime] = useState("");

	const [query] = useDebounce(value, 1000);

	const handleInput = event => {
		setValue(event.target.value);
		event.preventDefault();
	};

	const handleSubmit = event => {
		actions.getRecipes(value);
		//actions.filterByTime(selectedTime);
	};

	const handleDay = e => {
		setSelectedDay(e.target.value);
	};

	const handlePosition = e => {
		setSelectedPosition(e.target.value);
	};

	const handleQuery = e => {
		setSelectedQuery(e.target.value);
		actions.addQuerySelection(e.target.value);
		actions.getRecipes(e.target.value);
	};

	// const handleTime = e => {
	// 	setSelectedTime(e.target.value);
	// };

	const handleData = event => {
		let icon = event.target;
		let recipeName = icon.getAttribute("data-title");
		let recipeUri = icon.getAttribute("data-uri");
		actions.addRecipe(selectedDay, selectedPosition, recipeName, recipeUri);
	};

	var searchResult = store.hits.map((item, index) => (
		<ListGroup.Item key={index} className="d-flex justify-content-between">
			<div>
				<a style={{ display: "table-cell" }} href={item.recipe.url} target="_blank" rel="noopener noreferrer">
					{item.recipe.label}
				</a>
			</div>
			<div className="d-flex justify-content-end">
				<div className="mr-1">{item.recipe.totalTime}</div>
				<div className="mr-2"> mins</div>
				<i
					className="fas fa-plus"
					onClick={handleData}
					data-uri={item.recipe.uri}
					data-title={item.recipe.label}
				/>
			</div>
		</ListGroup.Item>
	));

	return (
		<div className="newweek-container container-fluid">
			<div className=" search-big-container d-flex">
				<div className="container-fluid col-6 m-0">
					<div className="weekplan-body">
						<div className="d-flex flex-row">
							<Form onSubmit={handleSubmit} className="d-flex justify-content-around col-12 p-0 ml-2">
								<Form.Control
									placeholder="Search your recipes here & press enter"
									onChange={handleInput}
									className="bar-body-dropdown col-8 pl-1 ml-0 mb-0 w-100"
								/>
								<select
									className="custom-select col-3 pl-1 ml-1 bar-body-dropdown"
									onChange={handleQuery}
									value={selectedQuery}>
									<option value="">Suggestions</option>
									<option value="Rice">Rice</option>
									<option value="Pasta">Pasta</option>
									<option value="Fish">Fish</option>
									<option value="Salmon">Salmon</option>
									<option value="Pork">Pork</option>
									<option value="Steak">Steak</option>
									<option value="Chicken">Chicken</option>
									<option value="Soup">Soup</option>
									<option value="Potato">Potato</option>
									<option value="Lentils">Lentils</option>
									<option value="Vegetables">Vegetables</option>
									<option value="Soy">Soy</option>
									<option value="Curry">Curry</option>
									<option value="Tomato">Tomato</option>
									<option value="Tofu">Tofu</option>
									<option value="Red">Red</option>
									<option value="White">White</option>
									<option value="Green">Green</option>
									<option value="Steam">Steam</option>
									<option value="Fry">Fry</option>
								</select>
							</Form>
						</div>
						<div className="btns-bar-body mx-0 w-100 d-flex justify-content-around col-12 mt-3 p-0 ml-2">
							<select
								className="custom-select day-selector col-4 mt-1"
								id="mySelectDay"
								onChange={handleDay}
								value={selectedDay}>
								<option value="0">Monday</option>
								<option value="1">Tuesday</option>
								<option value="2">Wednesday</option>
								<option value="3">Thursday</option>
								<option value="4">Friday</option>
								<option value="5">Saturday</option>
								<option value="6">Sunday</option>
							</select>
							<select className="custom-select col-4 mt-1" onChange={handlePosition}>
								<option value="0">Breakfast</option>
								<option value="1">Snack 1</option>
								<option value="2">Lunch</option>
								<option value="3">Snack 2</option>
								<option value="4">Dinner</option>
							</select>
							<Button
								className="mr-0 green-button py-0 m-0 col-3"
								onClick={() => actions.getMoreRecipes()}>
								Get more recipes
							</Button>

							{/* <select className="custom-select col-4" onChange={handleTime} value={selectedTime}>
							<option value="1-20">Less than 20 minutes</option>
							<option value="21-30">20 - 30 minutes</option>
							<option value="31-45">30 - 45 minutes</option>
							<option value="45-300">More than 45 minutes</option>
						</select> */}
						</div>
					</div>
					<div className="results-body mr-0 ml-3">
						<div className="search-result">
							<ListGroup className="d-flex">{searchResult}</ListGroup>
						</div>
					</div>
				</div>
				<div className="d-flex col-6">
					<div className="col-12">
						<Weekplan />
					</div>
				</div>
			</div>
		</div>
	);
};

NewWeek.propTypes = {
	name: propTypes.string,
	value: propTypes.string,
	uri: propTypes.string,
	title: propTypes.string,
	url: propTypes.string
};
