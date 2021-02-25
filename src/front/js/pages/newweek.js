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
		<ListGroup.Item key={index}>
			{item.recipe.label}
			{/* <Dropdown className="d-flex flex-row m-auto" size="sm">
				<Dropdown.Toggle className="toggle">Add to:</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>Breakfast</Dropdown.Item>
					<Dropdown.Item>Sanck</Dropdown.Item>
					<Dropdown.Item>Lunch</Dropdown.Item>
					<Dropdown.Item>Snack</Dropdown.Item>
					<Dropdown.Item>Dinner</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */}
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
						<Dropdown className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Food type</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Rice</Dropdown.Item>
								<Dropdown.Item>Pasta</Dropdown.Item>
								<Dropdown.Item>Fish</Dropdown.Item>
								<Dropdown.Item>Meat</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Allergens</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Celery</Dropdown.Item>
								<Dropdown.Item>Gluten</Dropdown.Item>
								<Dropdown.Item>Shellfish</Dropdown.Item>
								<Dropdown.Item>Lactose</Dropdown.Item>
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
						</Dropdown>
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
