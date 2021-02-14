import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/index.scss";

export const WeekJumbo = () => {
	//const { store, actions } = useContext(Context);

	return (
		<Jumbotron className="container m-auto body-jumbo pt-0 pb-1">
			<div className="d-flex container-fluid m-auto h-auto justify-content-between">
				<h3 className="text-center m-auto">Menu title</h3>

				<div className="icondelete mt-1 ml-2" onClick={() => closeJumbo()}>
					<i className="fas fa-times delete-button" />
				</div>
			</div>
			<div className="d-flex flex-column container-fluid m-auto">
				<div className="d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">
						<b />
					</div>
					<div className="cell my-3">
						<b>MONDAY</b>
					</div>
					<div className="cell my-3">
						<b>TUESDAY</b>
					</div>
					<div className="cell my-3">
						<b>WEDNESDAY</b>
					</div>
					<div className="cell my-3">
						<b>THURSDAY</b>
					</div>
					<div className="cell my-3">
						<b>FRIDAY</b>
					</div>
					<div className="cell my-3">
						<b>SATURDAY</b>
					</div>
					<div className="cell my-3">
						<b>SUNDAY</b>
					</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">
						<b>BREAKFAST</b>
					</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">
						<b>SNACK</b>
					</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">
						<b>LUNCH</b>
					</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">
						<b>SNACK</b>
					</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="cell my-3">
						<b>DINNER</b>
					</div>
					<div className="cell my-3">MONDAY</div>
					<div className="cell my-3">TUESDAY</div>
					<div className="cell my-3">WEDNESDAY</div>
					<div className="cell my-3">THURSDAY</div>
					<div className="cell my-3">FRIDAY</div>
					<div className="cell my-3">SATURDAY</div>
					<div className="cell my-3">SUNDAY</div>
				</div>
			</div>
			<Link to="/newweek">
				<Button className="green-button d-flex text-center m-auto justify-content-center">Edit</Button>
			</Link>
		</Jumbotron>
	);
};
