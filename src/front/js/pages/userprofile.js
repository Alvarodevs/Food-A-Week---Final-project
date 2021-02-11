import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserData } from "../component/user_info_form";
import "../../styles/userprofile.scss";

export const Userprofile = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="text-center my-3">
				<h1>{"User profile"}</h1>
			</div>
			<div className="d-flex flex-row user-profile-titles mt-2">
				<div className="col-3 " />
				<div className="col-3 ">
					<h3>{"User info"}</h3>
				</div>
				<div className="col-6 text-center">
					<h3>{"Allergies"}</h3>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-around h-60 mt-3">
				<div>
					<div className="col-12 d-flex flex-column avatar services-description" />
					<div className="d-flex weekplan-buttons-container justify-content-around mt-5">
						<button className="weekplan-btn btn green-button" type="submit">
							Change
						</button>
					</div>
				</div>
				<div className="col-3 mx-1 d-flex flex-column my-auto background-green data-container">
					<UserData />
				</div>
				<div className="col-6 mx-1 d-flex flex-column justify-content-center background-green data-container">
					<div className="container mt-3 form-check form-check-inline justify-content-between">
						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/wheat-allergy-amber-icon.png"
							/>
							<p className="text-icon">Celíaco/a</p>
						</div>
						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/milk-allergy-amber-icon.png"
							/>
							<p className="text-icon">Lactosa</p>
						</div>

						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/eggs-allergy-amber-icon.png"
							/>
							<p className="text-icon">Huevo</p>
						</div>

						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/peanut-allergy-amber-icon.png"
							/>
							<p className="text-icon">Frutos secos</p>
						</div>
					</div>
					<div className="container m-auto my-0 form-check form-check-inline justify-content-between">
						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/molluscs-allergy-amber-icon.png"
							/>
							<p className="text-icon">Marisco</p>
						</div>

						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/soya-allergy-amber-icon.png"
							/>
							<p className="text-icon">Frutos rojos</p>
						</div>

						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/soya-allergy-amber-icon.png"
							/>
							<p className="text-icon">Legumbres</p>
						</div>

						<div className="d-flex flex-column col-3 align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/256/fish-allergy-amber-icon.png"
							/>
							<p className="text-icon">Pescado</p>
						</div>
					</div>
					<div className="container mb-1 form-check form-check-inline justify-content-around">
						<div className="d-flex flex-column align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/1024/celery-allergy-amber-icon.png"
							/>
							<p className="text-icon">Vegano</p>
						</div>

						<div className="d-flex flex-column align-items-center">
							<img
								className="allergen-icon"
								src="https://icons.iconarchive.com/icons/erudus/allergy/1024/celery-allergy-amber-icon.png"
							/>
							<p className="text-icon">Otros</p>
						</div>
					</div>
				</div>
			</div>
			<div className="buttons">
				<div className="d-flex weekplan-buttons-container justify-content-end">
					<button className="weekplan-btn btn green-button" type="submit">
						Save
					</button>
					<button className="weekplan-btn btn green-button" type="submit">
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};

// <div>User name</div>
// 					<div>Name & lastnames</div>
// 					<div>Address</div>
// 					<div>Postal code</div>
// 					<div>Email</div>
// 					<div>Phone number</div>
