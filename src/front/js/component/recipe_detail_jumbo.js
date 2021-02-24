import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Jumbotron, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import person from "../../img/person.png";
import danger from "../../img/danger.png";

export const RecipeDetail = () => {
	//const { store, actions } = useContext(Context);

	//HOOKS Y FUNCTS PARA LLAMAR AL MODAL
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Modal.Dialog className="container w-75" show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Recipe title</Modal.Title>
			</Modal.Header>

			<Modal.Body className="py-1">
				<div className="d-flex icon-modal-recipe">
					<div>
						<img src={person} alt="Servings" className="mr-4 mt-0" />
					</div>
					<div>
						<img src={danger} alt="Allergens" className="mr-2 mt-0" />
					</div>
				</div>
				<p>Modal body text goes here.</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Link to="/newweek">
					<Button className="green-button d-flex text-center m-auto justify-content-center">Edit</Button>
				</Link>
			</Modal.Footer>
		</Modal.Dialog>
	);
};
