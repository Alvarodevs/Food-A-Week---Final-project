import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { apiBaseUrl } from "../constants";
import { toast } from "react-toastify";
//import "../../styles/profile.scss";
import rigoImageUrl from "../../img/rigo-baby.jpg";

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

		fetch(apiBaseUrl + "api/me", options)
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

	const imageUrl = store.user ? store.user.avatarUrl : rigoImageUrl;
	return (
		<div className="card">
			<a href="#" className="avatar-container" data-toggle="modal" data-target={`#${props.modalId}`}>
				<img className="card-img-top user-avatar" src={imageUrl} alt="Card image cap" />
			</a>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some text</p>
			</div>
		</div>
	);
};

export const Profile = props => {
	const { store, actions } = useContext(Context);
	const modalId = "exampleModal";

	let history = useHistory();
	if (!actions.isUserAuthenticated()) {
		toast.info("Favor inicia sesión!");
		history.push("/");
		console.log(store.accessToken);
	}

	return (
		<div className="row">
			<div className="col-4" />
			<div className="col-4">
				<ProfileCard modalId={modalId} />
			</div>
			<div className="col-4">
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
			<AvatarForm modalId={modalId} />
		</div>
	);
};

AvatarForm.propTypes = {
	modalId: PropTypes.string
};

ProfileCard.propTypes = {
	modalId: PropTypes.string
};
