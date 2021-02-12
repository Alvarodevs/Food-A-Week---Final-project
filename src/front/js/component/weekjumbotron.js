import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/index.scss";

export const WeekJumbo = () => {
	//const { store, actions } = useContext(Context);

	return (
		<Jumbotron className="container m-auto body-jumbo pt-4 pb-1">
			<div className="d-flex container-fluid m-auto h-auto justify-content-between">
				<h3 className="text-center m-auto">Menu title</h3>

				<div className="icondelete mt-1 ml-2" onClick={() => closeJumbo()}>
					<i className="fas fa-times  delete-button" />
				</div>
			</div>
			<div className="d-flex flex-column container-fluid m-auto my-4">
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">MEAL</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">MEAL</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">MEAL</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">MEAL</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">MEAL</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">MEAL</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
			</div>
			<div className="text-center m-auto justify-content-center">
				<Link to="/newweek">
					<Button className="m-2 green-button">Edit</Button>
				</Link>
			</div>
		</Jumbotron>
	);
};
