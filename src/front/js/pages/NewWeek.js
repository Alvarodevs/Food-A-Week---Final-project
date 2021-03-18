import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Weekplan } from "../component/weekplan";
import { RecipeDetail } from "../component/recipe_detail_jumbo";
import { Form, Button, ListGroup, ButtonGroup, Dropdown, DropdownType } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

//const [recipes, setRecipes] = useState([]);

export const NewWeek = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");
	const [selectedDay, setSelectedDay] = useState("monday");
	const [selectedPosition, setSelectedPosition] = useState("0");
	const [selectedUri, setSelectedUri] = useState("");
	const [selectedRecipeName, setSelectedRecipeName] = useState("");
	const [query] = useDebounce(value, 1000);

	const handleSubmit = event => {
		event.preventDefault();
		actions.getRecipes(value);
	};

	// const addRecipe = event => {
	// 	actions.NewWeek;
	// };

	const handleInput = event => {
		setValue(event.target.value);
		event.preventDefault();
	};

	const selectDay = e => {
		setSelectedDay(e.target.value);
	};

	const handlePosition = e => {
		setSelectedPosition(e.target.value);
	};

	const handleUri = e => {
		setSelectedUri(e.target.value);
		setSelectedRecipeName(e.target.title);
	};

	var searchResult = store.hits.map((item, index) => (
		<ListGroup.Item key={index} className="d-flex justify-content-between">
			<div>{item.recipe.label}</div>
			<i className="fas fa-plus" onClick={handleUri} value={item.recipe.uri} title={item.recipe.label} />
			{/* <Button onClick={handleUri} value={item.recipe.uri} title={item.recipe.label}>
				Add it
			</Button> */}
			{/* <div>
				<Dropdown className="d-flex flex-row m-auto toggle" size="xs">
					<Dropdown.Toggle />
					<Dropdown.Menu>
						<Dropdown.Item onClick={handlePosition} value="0">
							Breakfast
						</Dropdown.Item>
						<Dropdown.Item onClick={handlePosition} value="1">
							Snack 1
						</Dropdown.Item>
						<Dropdown.Item onClick={handlePosition} value="2">
							Lunch
						</Dropdown.Item>
						<Dropdown.Item onClick={handlePosition} value="3">
							Snack 2
						</Dropdown.Item>
						<Dropdown.Item onClick={handlePosition} value="4">
							Dinner
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div> */}
		</ListGroup.Item>
	));

	return (
		<div className="newweek-container container-fluid d-flex">
			<div className="container-fluid col-6 m-0">
				<div className="weekplan-body">
					<div className="d-flex flex-row">
						<Form onSubmit={handleSubmit} className="d-flex col-11 pr-1 pl-0">
							<Form.Control
								placeholder="Search Bar"
								onChange={handleInput}
								className="bar-body-dropdown col-12 p-3 m-auto w-100"
							/>
						</Form>
						<Button className="mr-0" onClick={() => actions.getMoreRecipes()}>
							more
						</Button>
					</div>
					<div className="btns-bar-body mx-0 w-100 justify-content-between my-4">
						<select
							className="custom-select day-selector col-3 pr-4"
							id="mySelectDay"
							value={selectedDay}
							onChange={selectDay}>
							<option value="monday">Monday</option>
							<option value="tuesday">Tuesday</option>
							<option value="wednesday">Wednesday</option>
							<option value="thursday">Thursday</option>
							<option value="friday">Friday</option>
							<option value="saturday">Saturday</option>
							<option value="sunday">Sunday</option>
						</select>
						<select className="custom-select col-2" onChange={handlePosition}>
							<option value="0">Breakfast</option>
							<option value="1">Snack 1</option>
							<option value="2">Lunch</option>
							<option value="3">Snack 2</option>
							<option value="4">Dinner</option>
						</select>
						<select className="custom-select col-2 pr-3">
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
						<select className="custom-select col-4">
							<option value="1">Less than 20 minutes</option>
							<option value="2">20 - 30 minutes</option>
							<option value="3">30 - 45 minutes</option>
							<option value="4">More than 45 minutes</option>
						</select>
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
				<Weekplan name={selectedDay} value={selectedPosition} uri={selectedUri} title={selectedRecipeName} />
			</div>
		</div>
	);
};

NewWeek.PropTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	uri: PropTypes.string,
	title: PropTypes.string
};
