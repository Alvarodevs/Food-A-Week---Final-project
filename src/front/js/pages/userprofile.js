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
export const AvatarForm = props => {
	const { store, actions } = useContext(Context);
	const [files, setFiles] = useState([]);

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
			method: "PUT",
			headers: {
				Authorization: "Bearer " + localStorage.getItem("accessToken"),
				"Content-Type": "application/json"
			}
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

export const ProfileCard = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialInputState = {
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
				toast.success("Guardaste tus cambios exitosamente!");
				actions.setCurrentUser(result);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div>
			<form onSubmit={handleFinalSubmit}>
				<div className="form-group">
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
				<div className="form-group">
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
				<div className="form-group">
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
				<button type="submit" className="green-button btn">
					Save changes
				</button>
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
		<div className="container">
			<div className="row user-profile-titles mt-2">
				{/* <div className="col-2 " /> */}
				<div className="col-4 text-left">
					<h3>
						<p />
						Hi {store.user ? store.user.user_name : ""}; <br />
						<br />
						<p />
						<p>You can change your data here:</p>
					</h3>
				</div>
			</div>

			<div className="row">
				<div className="d-flex flex-row col-12">
					<div className="col-5">
						<ProfileCard />
					</div>

					<div className="col-5">
						{/* <AvatarForm modalId={modalId} /> */}
						<p>Avatar Form</p>
					</div>
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
