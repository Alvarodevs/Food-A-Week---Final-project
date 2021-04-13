import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserData } from "../component/user_info_form";
import { AllergensTable } from "../component/allergenstable";
//import { Avatar } from "../component/avatar";
import { Form } from "react-bootstrap";
import { Button, AlertMessageBox } from "react-bootstrap";
import { apiBaseUrl } from "../constants";
import { toast, ToastContainer } from "react-toastify";
import rigoImageUrl from "../../img/rigo-baby.jpg";
//import "../../styles/userprofile.scss";

export const ProfileCard = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialInputState = {
		user_name: store.user ? store.user.user_name : "",
		name: store.user ? store.user.name : "",
		address: store.user ? store.user.address : "",
		postal_code: store.user ? store.user.postal_code : ""
	};
	const [eachEntryChanges, setEachEntryChanges] = useState(initialInputState);
	const { player, score } = eachEntryChanges;
	const handleInputChange = e => {
		setEachEntryChanges({ ...eachEntryChanges, [e.target.name]: e.target.value });
	};

	const handleFinalSubmit = event => {
		event.preventDefault();

		var requestOptions = {
			method: "PUT",
			body: JSON.stringify(eachEntryChanges),
			headers: {
				Authorization: "Bearer " + localStorage.getItem("accessToken"),
				"Content-Type": "application/json"
			}
		};
		fetch(`${apiBaseUrl}/api/sign_up_put`, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				toast.success("You saved your changes successfully!");
				actions.setCurrentUser(result);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="d-flex justify-content-center">
			<form onSubmit={handleFinalSubmit}>
				<div className="form-group form-group-user">
					<label htmlFor="user_name">User Name</label>

					<input
						type="text"
						className="form-control"
						id="name"
						placeholder={store.user ? store.user.user_name : "Insert here your user name"}
						name="user_name"
						value={eachEntryChanges.user_name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group form-group-user ">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder={store.user ? store.user.name : "Insert here your name"}
						name="name"
						value={eachEntryChanges.name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group form-group-user">
					<label htmlFor="address">Address</label>
					<input
						type="address"
						className="form-control"
						id="address"
						placeholder={store.user ? store.user.address : "Insert here your address"}
						name="address"
						value={eachEntryChanges.address}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group form-group-user">
					<label htmlFor="postal_code">Postal Code</label>
					<input
						type="postal_code"
						className="form-control"
						id="postal_code"
						placeholder={store.user ? store.user.postal_code : "Insert here your postal_code"}
						name="postal_code"
						value={eachEntryChanges.postal_code}
						onChange={handleInputChange}
					/>
				</div>

				<div className="d-flex justify-content-end">
					<button type="submit" className="green-button btn mt-4 py-2 col-10">
						Save changes
					</button>
				</div>
			</form>
		</div>
	);
};

export const Userprofile = props => {
	const modalId = "exampleModal";
	const { store, actions } = useContext(Context);
	let history = useHistory();
	if (!actions.isUserAuthenticated()) {
		toast.info("Please, login!");
		history.push("/");
	}

	return (
		<div className="container-user">
			<div className="row-user user-profile-titles mt-2">
				<div className="text-left">
					<h3>
						<p />
						Hi {store.user ? store.user.user_name : ""}; <br />
						<br />
						<p />
						<p>You can change your data here:</p>
					</h3>
				</div>
			</div>

			<div className="row items-profile">
				<div className="d-flex justify-content-center">
					<ProfileCard />
				</div>
			</div>
		</div>
	);
};

Userprofile.propTypes = {
	modalId: PropTypes.string
};
