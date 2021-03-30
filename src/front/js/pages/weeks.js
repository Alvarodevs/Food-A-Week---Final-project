import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import { Navlink } from "react-router-dom";
import { Button, Jumbotron, Table } from "react-bootstrap";
import WeekJumbo from "../component/weekjumbotron";
import { Context } from "../store/appContext";
import * as Icon from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";

//import "../../styles/index.scss";

export const RecipeCard = props => {
	const { store, actions } = useContext(Context);
	const [newData, setNewData] = useState(null);

	useEffect(() => {
		const url = `https://api.edamam.com/search?r=${encodeURIComponent(props.url)}&app_id=${store.APP_ID}&app_key=${
			store.APP_KEY
		}`;
		//debugger;
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				setNewData(data);
				//debugger;
				//console.log(newData);
			})
			.catch(error => {
				//debugger;
				console.log("Error loading message from backend", error);
			});
	}, []);

	return (
		newData != null && (
			<div className="card menuWeek p-0 m-0 mr-4 mb-4">
				<img className="card-img-top p-0 m-0" src={newData[0].image} alt="Card image cap" />
				<div className=" card-body py-1 justify-content-between align-middle">
					<div className="card-title pt-2">Semana santa</div>
					<div className="card-text">{newData[0].label}</div>
				</div>
				<div className="align-card-buttons">
					<Button className=" weekplan-btn green-button mb-3" type="submit">
						<Link to="/weekjumbotron" menu={newData}>
							Show
						</Link>
					</Button>
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
	const [urls, setUrls] = useState([
		"http://www.edamam.com/ontologies/edamam.owl#recipe_e2044086d8346319d6c46b4273edf586",
		"http://www.edamam.com/ontologies/edamam.owl#recipe_62f902aa94f7c6040c736bb8550a107f",
		"http://www.edamam.com/ontologies/edamam.owl#recipe_e2044086d8346319d6c46b4273edf586"
	]);
	//debugger;
	let recipeList = urls.map((url, index) => {
		return <RecipeCard key={index} url={url} />;
	});

	return (
		<div className="container-fluid">
			<div className="page-container d-flex">
				{/* <div className="text-center mt-0 d-flex row justify-content-center">
				<h1>{"All your weeks"}</h1>
			</div> */}
				<div className="card-container d-flex justify-content-center mx-auto">
					<div>
						<div className="row">
							<div className="page-order-weeks">
								<Dropdown>
									<Dropdown.Toggle variant="success" className="dropdown-basic pink-button">
										Order by
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item href="/userprofile">Alfabetic</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item href="/">More new</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>

						<div className="row all-cards ">{recipeList ? recipeList : ""}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

RecipeCard.propTypes = {
	url: PropTypes.string
};
