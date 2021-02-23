import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import injectContext, { Context } from "../store/appContext";
import { Weekplan } from "../component/weekplan";
import { Edamam } from "../component/edamam";
import person from "../../img/person.png";
import danger from "../../img/danger.png";
import "../../styles/newweek_alt.scss";
import { Form, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const [recipes, setRecipes] = useState([]);

export const NewWeek = () => {
	return (
		<div className="newweek-container container-fluid d-flex">
			<div className="container-fluid col-6 m-0">
				<div className="weekplan-body">
					<Form>
						<Form.Control placeholder="Search Bar" className="bar-body-dropdown col-12 p-3 m-auto w-100" />
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
						<div className="recipes">
							{recipes.map(recipe => (
								<Edamam
									key={recipe.recipe.label}
									title={recipe.recipe.label}
									image={recipe.recipe.image}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex col-6">
				<Weekplan />
			</div>
		</div>
	);
};
