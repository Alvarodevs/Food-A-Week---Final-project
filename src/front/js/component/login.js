import React, { useState, useEffect, useContext } from "react";
import { apiBaseUrl } from "../constants";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";

const LoginForm = props => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const initialInputState = { user: "", password: "" };
	const [eachEntry, setEachEntry] = useState(initialInputState);
	const { player, score } = eachEntry;
	const handleInputChange = e => {
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
		setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
	};

	const handleFinalSubmit = () => {
		event.preventDefault();
		var raw = JSON.stringify(eachEntry);

		var requestOptions = {
			method: "POST",
			body: raw
		};

		fetch(`${apiBaseUrl}/api/sign_in`, requestOptions)
			.then(response => response.text())
			.then(result => {
				history.push("/");
			})
			.catch(error => console.log("error", error));
	};

	return (
		<form onSubmit={handleFinalSubmit}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail">User name</label>
				<input
					type="user_name"
					className="form-control"
					id="user_name"
					placeholder="Enter your user name"
					name="user_name"
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
			<button type="submit" className="green-button btn">
				Submit
			</button>
		</form>
	);
};

export const Login = props => {
	return (
		<div className="jumbotron">
			<LoginForm />
			<hr className="my-4" />

			<Link to="/">
				<span className="green-button btn" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Login.propTypes = {
	match: PropTypes.object
};

LoginForm.propTypes = {
	match: PropTypes.object
};
