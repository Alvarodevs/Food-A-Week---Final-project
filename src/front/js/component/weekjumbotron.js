import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Jumbotron } from "react-bootstrap";

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
			<div className="d-flex flex-column container-fluid m-auto">
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="">MEAL</div>
					<div className="">MONDAY</div>
					<div className="">TUESDAY</div>
					<div className="">WEDNESDAY</div>
					<div className="">THURSDAY</div>
					<div className="">FRIDAY</div>
					<div className="">SATURDAY</div>
					<div className="">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="">MEAL</div>
					<div className="">MONDAY</div>
					<div className="">TUESDAY</div>
					<div className="">WEDNESDAY</div>
					<div className="">THURSDAY</div>
					<div className="">FRIDAY</div>
					<div className="">SATURDAY</div>
					<div className="">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="">MEAL</div>
					<div className="">MONDAY</div>
					<div className="">TUESDAY</div>
					<div className="">WEDNESDAY</div>
					<div className="">THURSDAY</div>
					<div className="">FRIDAY</div>
					<div className="">SATURDAY</div>
					<div className="">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="">MEAL</div>
					<div className="">MONDAY</div>
					<div className="">TUESDAY</div>
					<div className="">WEDNESDAY</div>
					<div className="">THURSDAY</div>
					<div className="">FRIDAY</div>
					<div className="">SATURDAY</div>
					<div className="">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="">MEAL</div>
					<div className="">MONDAY</div>
					<div className="">TUESDAY</div>
					<div className="">WEDNESDAY</div>
					<div className="">THURSDAY</div>
					<div className="">FRIDAY</div>
					<div className="">SATURDAY</div>
					<div className="">SUNDAY</div>
				</div>
				<div className=" d-flex container-fluid flex-row m-auto justify-content-between">
					<div className="">MEAL</div>
					<div className="">MONDAY</div>
					<div className="">TUESDAY</div>
					<div className="">WEDNESDAY</div>
					<div className="">THURSDAY</div>
					<div className="">FRIDAY</div>
					<div className="">SATURDAY</div>
					<div className="">SUNDAY</div>
				</div>
			</div>
			<div className="text-center m-auto justify-content-center">
				<Button className="m-2 green-button">Edit</Button>
			</div>
		</Jumbotron>
	);
};
