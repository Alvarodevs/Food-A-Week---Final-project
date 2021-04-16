import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button, Jumbotron, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WeekJumbo = props => {
	const { store, actions } = useContext(Context);
	console.log(props);
	return (
		<Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton className="modal-header">
				<Modal.Title id="contained-modal-title-center">Menu title</Modal.Title>
			</Modal.Header>
			<Modal.Body>
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
			</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Button
					className="green-button d-flex text-center m-auto justify-content-center"
					onClick={props.onHide}>
					Back
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

WeekJumbo.propTypes = {
	data: PropTypes.array,
	onHide: PropTypes.func
};
