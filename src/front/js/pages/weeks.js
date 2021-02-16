import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navlink } from "react-router-dom";
import { Button } from "react-bootstrap";
import WeekJumbo from "../component/weekjumbotron";
import { Context } from "../store/appContext";
import * as Icon from "react-bootstrap-icons";

import "../../styles/index.scss";

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="page-container d-flex">
				{/* <div className="text-center mt-0 d-flex row justify-content-center">
				<h1>{"All your weeks"}</h1>
			</div> */}
				<div className="card-container d-flex justify-content-center mx-auto">
					<div>
						<div className="row">
							<div className="page-order-weeks">
								<div> Page 1 of 2 </div>
								<div> Order by </div>
								<div> Selector</div>
							</div>
						</div>
						<div className="row">
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana santa</div>
									<div className="card-text pt-2">
										Los menús de esta semana no tienen carne, pero si pescado
									</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron" activeStyle={{ color: "gray" }}>
											Show
										</Link>
									</Button>
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
								</div>
								<div className="align-card-buttons">
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
								</div>
							</div>
							<div className="card menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
								</div>
								<div className="align-card-buttons">
									<Button className=" weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="weekplan-btn btn green-button" type="submit">
										<Link to="/newweek">Edit</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="next-previous-weeks">
					<div>
						<Icon.ArrowLeft /> Previous page
					</div>
					<div> or </div>
					<div>
						Next page <Icon.ArrowRight />
					</div>
				</div>
			</div>
		</div>
	);
};
