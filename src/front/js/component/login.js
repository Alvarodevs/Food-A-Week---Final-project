import React, { useState, useEffect, useContext } from "react";
//import withAuth from "../component/withAuth";
import { apiBaseUrl } from "../constants";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";

const SignInForm = props => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const initialInputState = { email: "", password: "" };
	const [eachEntry, setEachEntry] = useState(initialInputState);
	const { player, score } = eachEntry;
	const handleInputChange = e => {
		setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
	};

	const handleFinalSubmit = event => {
		//debugger;
		event.preventDefault();
		var raw = JSON.stringify(eachEntry);
		var requestOptions = {
			method: "POST",
			body: raw,
			headers: { "Content-Type": "application/json" }
		};
		fetch(`${apiBaseUrl}/api/sign_in`, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				localStorage.setItem("accessToken", result["accessToken"]);
				//debugger;
				toast("User was logged");
				history.push("/home");
				//console.log("User was logged");
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
			<button type="submit" className="btn btn-primary float-right">
				Submit
			</button>
		</form>
	);
};

const SignIn = props => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	if (actions.isUserAuthenticated()) {
		toast.success("You're logged as");
		history.push("/home");
	}

	return (
		<div className="jumbotron">
			<h2>Inicio de sesión</h2>
			<SignInForm />
		</div>
	);
};

export default SignIn;
