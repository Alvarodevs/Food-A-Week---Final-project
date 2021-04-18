import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button, Jumbotron, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WeekJumbo = props => {
	const [dataLength, setDataLength] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		setDataLength(props.data);
		console.log(props.data);
	}, []);

	let sortedArray = dataLength.sort((a, b) => (a.position > b.position ? 1 : -1));

	console.log("propsdata", props.data);

	return (
		<Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton className="modal-header">
				<Modal.Title id="contained-modal-title-center">{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table responsive>
					<thead>
						<tr>
							<th />
							{sortedArray.map((item, index) => (
								<th key={index} className="text-center">
									{actions.getDayName(item.position)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Breakfast</td>
							{Array.from({ length: dataLength.length }).map((_, index) => (
								<td key={index} className="text-center">
									Meal {index}
								</td>
							))}
						</tr>
						<tr>
							<td>Snack 01</td>
							{Array.from({ length: dataLength.length }).map((_, index) => (
								<td key={index} className="text-center">
									Meal {index}
								</td>
							))}
						</tr>
						<tr>
							<td>Lunch</td>
							{Array.from({ length: dataLength.length }).map((_, index) => (
								<td key={index} className="text-center">
									Meal {index}
								</td>
							))}
						</tr>
						<tr>
							<td>Snack 02</td>
							{Array.from({ length: dataLength.length }).map((_, index) => (
								<td key={index} className="text-center">
									Meal {index}
								</td>
							))}
						</tr>
						<tr>
							<td>Dinner</td>
							{Array.from({ length: dataLength.length }).map((_, index) => (
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
	onHide: PropTypes.func,
	title: PropTypes.string
};
