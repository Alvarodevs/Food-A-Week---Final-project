import React, { useContext } from "react";

import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import { Navlink } from "react-router-dom";
import { Button } from "react-bootstrap";
import WeekJumbo from "../component/weekjumbotron";
import { Context } from "../store/appContext";
import * as Icon from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";

//import "../../styles/index.scss";

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);

	const recipes = () => {
		actions.getWeeklyMenus();
	};

	return (
		<div className="container-fluid">
			<div className="page-container d-flex">
				{/* <div className="text-center mt-0 d-flex row justify-content-center">
				<h1>{"All your weeks"}</h1>
			</div> */}
				<div className="card-container d-flex justify-content-center mx-auto">
					<div>
						<div>
							<button>CLICK</button>
						</div>
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

						<div className="row all-cards ">
							{/* SINGLE CARD COMPONENT */}
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className=" card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana santa</div>
									<div className="card-text">Nothing</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn green-button" type="submit">
										<Link to="/weekjumbotron" activeStyle={{ color: "gray" }}>
											Show
										</Link>
									</Button>
									<Button className="weekplan-btn  green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
									<Icon.Trash className="icon-trash" />
								</div>
							</div>
							{/* SINGLE CARD COMPONENT */}
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://images.unsplash.com/photo-1414450397866-85f90db48714?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
									alt="Card image cap"
								/>
								<div className="card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Potato week</div>
									<div className="card-text">only with potato recipes</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
									<Icon.Trash className="icon-trash" />
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								/>
								<div className="card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Nothing special</div>
									<div className="card-text">boring week</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
									<Icon.Trash className="icon-trash" />
								</div>
							</div>
							{/* </div>
						<div className="row"> */}
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								/>
								<div className="card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">One boring week of january</div>
									<div className="card-text">boring and cold week</div>
								</div>
								<div className="align-card-buttons">
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
									<Icon.Trash className="icon-trash" />
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://images.unsplash.com/photo-1598511796318-7b8256bd2b20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
									alt="Card image cap"
								/>
								<div className="card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Week 1 March</div> <div className="card-text" />
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
									<Icon.Trash className="icon-trash" />
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Summer week</div>{" "}
									<div className="card-text">Only summer recipes</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
									<Icon.Trash className="icon-trash" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
