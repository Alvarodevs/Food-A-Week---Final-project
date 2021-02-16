import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import WeekJumbo from "../component/weekjumbotron";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container background-white">
			<div className="text-center mt-0 d-flex row justify-content-center">
				<h1>{"All your weeks"}</h1>
			</div>
			<div>
				<div className="card-container d-flex justify-content-center">
					<div className="row">
						<div className="card col-3 menuWeek p-0 m-0 mr-4 mb-4">
							<img
								className="card-img-top p-0 m-0"
								src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
								alt="Card image cap"
							/>
							<div className="d-flex card-body py-1 justify-content-between align-middle">
								<div className="card-title pt-2">Semana sin pescado</div>
								<div className="d-flex">
									<Button className="p-1 weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="p-1 weekplan-btn btn green-button" type="submit">
										Edit
									</Button>
								</div>
							</div>
						</div>
						<div className="card col-3 menuWeek p-0 m-0 mr-4 mb-4">
							<img
								className="card-img-top p-0 m-0"
								src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
								alt="Card image cap"
							/>
							<div className="d-flex card-body py-1 justify-content-between align-middle">
								<div className="card-title pt-2">Semana sin pescado</div>
								<div className="d-flex">
									<Button className="p-1 weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="p-1 weekplan-btn btn green-button" type="submit">
										Edit
									</Button>
								</div>
							</div>
						</div>
						<div className="card col-3 menuWeek p-0 m-0 mr-4 mb-4">
							<img
								className="card-img-top p-0 m-0"
								src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
								alt="Card image cap"
							/>
							<div className="d-flex card-body py-1 justify-content-between align-middle">
								<div className="card-title pt-2">Semana sin pescado</div>
								<div className="d-flex">
									<Button className="p-1 weekplan-btn btn green-button" type="submit">
										<Link to="/weekjumbotron">Show</Link>
									</Button>
									<Button className="p-1 weekplan-btn btn green-button" type="submit">
										Edit
									</Button>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="card col-3 menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
									<div className="d-flex">
										<Button className="p-1 weekplan-btn btn green-button" type="submit">
											<Link to="/weekjumbotron">Show</Link>
										</Button>
										<Button className="p-1 weekplan-btn btn green-button" type="submit">
											Edit
										</Button>
									</div>
								</div>
							</div>
							<div className="card col-3 menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
									<div className="d-flex">
										<Button className="p-1 weekplan-btn btn green-button" type="submit">
											<Link to="/weekjumbotron">Show</Link>
										</Button>
										<Button className="p-1 weekplan-btn btn green-button" type="submit">
											Edit
										</Button>
									</div>
								</div>
							</div>
							<div className="card col-3 menuWeek p-0 m-0 mr-4 mb-4">
								<img
									className="card-img-top p-0 m-0"
									src="https://static01.nyt.com/images/2020/01/24/dining/yk-gochujang-chicken-and-vegetables/merlin_167664060_7435c624-7225-4cb1-b104-4d67761185a4-articleLarge.jpg"
									alt="Card image cap"
								/>
								<div className="d-flex card-body py-1 justify-content-between align-middle">
									<div className="card-title pt-2">Semana sin pescado</div>
									<div className="d-flex">
										<Button className="p-1 weekplan-btn btn green-button" type="submit">
											<Link to="/weekjumbotron">Show</Link>
										</Button>
										<Button className="p-1 weekplan-btn btn green-button" type="submit">
											Edit
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
