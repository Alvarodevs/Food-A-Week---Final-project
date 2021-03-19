import React, { useState, useEffect, useContext } from "react";
import { apiBaseUrl } from "constants";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";

const SignUpForm = props => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const initialInputState = { name: "", lastName: "", email: "", password: "" };
	const [eachEntry, setEachEntry] = useState(initialInputState);
	const { player, score } = eachEntry;
	const handleInputChange = e => {
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
		setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
	};

	const handleFinalSubmit = e => {
		event.preventDefault();

		var raw = JSON.stringify(eachEntry);

		var requestOptions = {
			method: "POST",
			body: raw
		};

		fetch(`${apiBaseUrl}/api/sign_up`, requestOptions)
			.then(response => response.text())
			.then(result => {
				toast("User was created");
				history.push("/");
			})
			.catch(error => console.log("error", error));
	};

	return (
		<form onSubmit={handleFinalSubmit}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail"
					placeholder="Enter email"
					name="email"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputName">Name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputName"
					placeholder="Enter your name"
					name="name"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputLastName">Last Name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputLastName"
					placeholder="Enter your last name"
					name="lastName"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword"
					placeholder="Enter your password"
					name="password"
					onChange={handleInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export const SignUp = props => {
	return (
		<div className="jumbotron">
			<SignUpForm />
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SignUp.propTypes = {
	match: PropTypes.object
};

SignUpForm.propTypes = {
	match: PropTypes.object
};
