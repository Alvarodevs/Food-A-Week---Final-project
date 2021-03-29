import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserData } from "../component/user_info_form";
import { AllergensTable } from "../component/allergenstable";
import { Avatar } from "../component/avatar";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { apiBaseUrl } from "../constants";
import { toast } from "react-toastify";
import rigoImageUrl from "../../img/rigo-baby.jpg";
//import "../../styles/userprofile.scss";
export const AvatarForm = props => {
	const { store, actions } = useContext(Context);
	const [files, setFiles] = useState([]);

	let history = useHistory();

	const onAvatarChange = event => {
		console.log("La foto ha cambiado!");
		console.log(event.target.files);
		setFiles(event.target.files);
	};

	const onSubmitAvatar = event => {
		event.preventDefault();
		const data = new FormData();
		data.append("avatar", files[0]);
		const options = {
			body: data,
			headers: {
				Authorization: "Bearer " + store.accessToken
			},
			method: "PUT"
		};

		fetch(`${baseUrl}api/me`, options)
			.then(resp => resp.json())
			.then(data => {
				actions.setUser(data);
				document.getElementById(props.modalId).click();
			});
	};

	return (
		<div
			className="modal fade"
			id={props.modalId}
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Actualiza tu avatar
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form onSubmit={onSubmitAvatar}>
							<div className="form-group">
								<label htmlFor="exampleFormControlFile1">
									Favor ingresa el archivo que deseas como avatar
								</label>
								<input
									type="file"
									className="form-control-file"
									id="exampleFormControlFile1"
									onChange={onAvatarChange}
								/>
							</div>
							<button className="btn btn-primary float-right" type="submit">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Userprofile = props => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialInputState = {
		user_name: "",
		name: "",
		lastName: "",
		address: "",
		postal_code: ""
	};
	const [eachEntry, setEachEntry] = useState(initialInputState);
	const { player, score } = eachEntry;
	const handleInputChange = e => {
		setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
	};

	const handleFinalSubmit = event => {
		debugger;
		event.preventDefault();
		var raw = JSON.stringify(eachEntry);
		var requestOptions = {
			method: "PUT",
			body: raw
		};
		fetch(`${apiBaseUrl}/api/sign_up_post`, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				localStorage.setItem("accessToken", result["accessToken"]);
				actions.setCurrentUser(result["user"]);
				debugger;
				history.push("/home");
				//console.log("User was created");
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="container">
			<div className="d-flex flex-row user-profile-titles mt-2">
				<div className="col-2 " />
				<div className="col-4 text-center">
					<h3>{"User info"}</h3>
				</div>
				{/* <div className="col-4 text-center">
					<h3>{"Allergies"}</h3>
				</div> */}
				<div className="buttons col-2">
					<div className="d-flex weekplan-buttons-container">
						<button className="weekplan-btn btn green-button" type="submit">
							Save
						</button>
						<button className="weekplan-btn btn green-button" type="submit">
							Clear
						</button>
					</div>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-around h-60 mt-3">
				<AvatarForm />

				<div className="col-3 mx-1 d-flex flex-column my-auto">
					<form onSubmit={handleFinalSubmit}>
						<div className="form-group">
							<label htmlFor="user_name">User name</label>
							<input
								type="user_name"
								className="form-control"
								id="user_name"
								placeholder={store.user ? store.user.user_name : "Insert here your user name"}
								name="user_name"
								onChange={handleInputChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder={store.user ? store.user.name : "Insert here your name"}
								name="name"
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Last Name</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								placeholder={store.user ? store.user.last_name : "Insert here your last name"}
								name="lastName"
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="Address">Address</label>
							<input
								type="Address"
								className="form-control"
								id="Address"
								placeholder={store.user ? store.user.address : "Insert here your address"}
								name="Address"
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="postal_code">Postal Code</label>
							<input
								type="postal_code"
								className="form-control"
								id="postal_code"
								placeholder={store.user ? store.user.postal_code : "Insert here your postal_code"}
								name="postal_code"
								onChange={handleInputChange}
							/>
						</div>
						<button type="submit" className="green-button btn">
							Submit
						</button>
					</form>

					{/* <div className="col-6 mx-1 d-flex flex-column justify-content-center data-container">
					<AllergensTable />
				</div> */}
				</div>
			</div>
		</div>
	);
};
AvatarForm.propTypes = {
	modalId: PropTypes.string
};

Userprofile.propTypes = {
	modalId: PropTypes.string
};
