import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Weekplan } from "../component/weekplan";
import { RecipeDetail } from "../component/recipe_detail_jumbo";
import { Form, Button, ListGroup, ButtonGroup, Dropdown, DropdownType } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

//const [recipes, setRecipes] = useState([]);

export const NewWeek = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");
	const [selectedDay, setSelectedDay] = useState("0");
	const [selectedPosition, setSelectedPosition] = useState("0");
	const [selectedUri, setSelectedUri] = useState("");
	const [selectedRecipeName, setSelectedRecipeName] = useState("");
	const [seedDay, setSeedDay] = useState({
		position: "0",
		label: ""
	});
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

	const handleDay = e => {
		setSelectedDay(e.target.value);
		//actions.addDay(selectedDay);
		//console.log(selectedDay);
	};

	const handlePosition = e => {
		setSelectedPosition(e.target.value);
	};

	const handleRecipeName = e => {
		setSelectedRecipeName(e.target.title);
	};

	//Storing in flux to create JSON ---> Convert this values to the JSON REQUIRED to pass it in flux

	// const handleData = () => {
	// 	if (selectedDay != "") {
	// 		actions.addDay(selectedDay), actions.addPosition(selectedPosition), actions.addUri(selectedUri);
	// 	}
	// };

	const handleData = () => {
		actions.addRecipe(selectedDay, selectedPosition, selectedRecipeName);
	};

	//getAttribute("dataUri")); //atributo value contiene bien el uri
	// const handleSeedDay = e => {
	// 	//setSelectedUri(e.target.value);
	// 	//No necesario, vendrá del flux para mostrarse en el acordeon diario
	// 	//setSelectedRecipeName(e.target.title);
	// 	setSeedDay({
	// 		position: selectedPosition,
	// 		//uri: url of uri not got due to data type
	// 		label: selectedRecipeName
	// 	});
	// 	console.log(seedDay);
	// };

	var searchResult = store.hits.map((item, index) => (
		<ListGroup.Item key={index} className="d-flex justify-content-between">
			<div>{item.recipe.label}</div>
			<i
				className="fas fa-plus"
				onMouseEnter={handleRecipeName}
				onClick={handleData}
				data={item.recipe.uri}
				title={item.recipe.label}
			/>
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
					</div>
				</div>
			</div>
			<div className="d-flex col-6">
				<Weekplan name={selectedDay} value={selectedPosition} uri={selectedUri} title={selectedRecipeName} />
			</div>
		</div>
	);
};

NewWeek.propTypes = {
	name: propTypes.string,
	value: propTypes.string,
	uri: propTypes.string,
	title: propTypes.string
};
