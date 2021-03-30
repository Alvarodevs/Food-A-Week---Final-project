import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button, Jumbotron, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WeekJumbo = props => {
	const { store, actions } = useContext(Context);

	return (
		<Jumbotron className="container m-auto body-jumbo pt-0 pb-1">
			<div className="d-flex container-fluid m-auto h-auto justify-content-between">
				<h3 className="text-center m-auto">{}</h3>

				<Link to="/weeks">
					<div className="icondelete mt-1 ml-2">
						<i className="fas fa-times delete-button" />
					</div>
				</Link>
			</div>

			<Table responsive>
				<thead>
					<tr>
						<th />
						{Array.from({ length: 7 }).map((_, index) => (
							<th key={index} className="text-center">
								{actions.getDayName(index)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Breakfast</td>
						{Array.from({ length: 7 }).map((_, index) => (
							<td key={index} className="text-center">
								Meal {index}
							</td>
						))}
					</tr>
					<tr>
						<td>Snack 01</td>
						{Array.from({ length: 7 }).map((_, index) => (
							<td key={index} className="text-center">
								Meal {index}
							</td>
						))}
					</tr>
					<tr>
						<td>Lunch</td>
						{Array.from({ length: 7 }).map((_, index) => (
							<td key={index} className="text-center">
								Meal {index}
							</td>
						))}
					</tr>
					<tr>
						<td>Snack 02</td>
						{Array.from({ length: 7 }).map((_, index) => (
							<td key={index} className="text-center">
								Meal {index}
							</td>
						))}
					</tr>
					<tr>
						<td>Dinner</td>
						{Array.from({ length: 7 }).map((_, index) => (
							<td key={index} className="text-center">
								Meal {index}
							</td>
						))}
					</tr>
				</tbody>
			</Table>
			{/* <div className="d-flex flex-column container-fluid m-auto">
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
			</div> */}
			<Link to="/weeks">
				<Button className="green-button d-flex text-center m-auto justify-content-center">Back</Button>
			</Link>
		</Jumbotron>
	);
};

WeekJumbo.propTypes = {
	data: PropTypes.array
};
