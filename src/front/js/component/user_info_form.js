import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";

//import "../../styles/index.scss";

export const UserData = () => {
	//const { store, actions } = useContext(Context);

	return (
		<Form className="m-2">
			<Form.Group controlId="Username">
				<Form.Control className="form" type="text" placeholder="User name" />
			</Form.Group>

			<Form.Group controlId="Name">
				<Form.Control className="form" type="text" placeholder="Name & last name" />
			</Form.Group>

			<Form.Group controlId="Address">
				<Form.Control className="form" type="text" placeholder="Enter address" />
			</Form.Group>

			<Form.Group controlId="PostalCode">
				<Form.Control className="form" type="text" placeholder="Enter postal code" />
			</Form.Group>

			<Form.Group controlId="Email">
				<Form.Control className="form" type="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group controlId="PhoneNumber">
				<Form.Control className="form" type="text" placeholder="Enter phone" />
			</Form.Group>
		</Form>
	);
};
