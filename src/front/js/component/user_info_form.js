import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

//import "../../styles/index.scss";

export const UserData = () => {
	const { store, actions } = useContext(Context);

	const options = {
		body: data, //data is not definied
		headers: {
			Authorization: "Bearer " + store.accessToken
		},
		method: "GET"
	};

	fetch(apiBaseUrl + "api/me", options)
		.then(resp => resp.json())
		.then(data => {
			actions.setUser(data);
			document.getElementById(props.modalId).click(); // https://stackoverflow.com/questions/27064176/typeerror-modal-is-not-a-function-with-bootstrap-modal
		});

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

UserData.propTypes = {
	modalId: PropTypes.string
};
