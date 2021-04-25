import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button, Jumbotron, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WeekJumbo = props => {
	const [dataLength, setDataLength] = useState([]);
	//const [sortedArray, setSortedArray] = useContext;
	const { store, actions } = useContext(Context);

	useEffect(() => {
		setDataLength(props.data);
	}, []);


	let sortedArray = dataLength.sort((a, b) => (a.position > b.position ? 1 : -1));

	//ver todos los nombres de recetas guardadas
	// pendiente aquí listar por ejemplo desayunos


	return (
		<Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton className="modal-header">
				<Modal.Title id="contained-modal-title-center">Weekly menu: {props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				WeeklyMenu
				<Table responsive>
					<thead>
						<tr>

							<th></th>
							{sortedArray.map((item, index) => (

								<th key={index} className="text-center">
									{actions.getDayName(item.position)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>

						{["Breakfast ", "Snack 01 ", "Lunch ", "Snack 02 ", "Dinner "].map((mealName, index2) => (
							<tr key={index2} className="text-center">
								<td>{mealName}</td>
								{sortedArray.map((item2, index3) => (
									<td key={index3}>{actions.getMealContent(sortedArray, index3, index2)}</td>
								))}
							</tr>
						))}

					</tbody>
				</Table>{" "}
			</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Link
					className="green-button d-flex text-center m-auto justify-content-center"
					onClick={props.onHide}
					to="/weeks">
					Back
				</Link>
			</Modal.Footer>
		</Modal>
	);
};

WeekJumbo.propTypes = {
	data: PropTypes.array,
	onHide: PropTypes.func,
	title: PropTypes.string
};
