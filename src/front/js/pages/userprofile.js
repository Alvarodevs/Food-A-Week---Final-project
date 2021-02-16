import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UserData } from "../component/user_info_form";
import { AllergensTable } from "../component/allergenstable";
import "../../styles/userprofile.scss";

export const Userprofile = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			{/* <div className="text-center mb-2 mt-0">
				<h1>{"User profile"}</h1>
			</div> */}
			<div className="d-flex flex-row user-profile-titles mt-2">
				<div className="col-2 " />
				<div className="col-4 text-center">
					<h3>{"User info"}</h3>
				</div>
				<div className="col-4 text-center">
					<h3>{"Allergies"}</h3>
				</div>
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
				<div>
					<div className="col-12 d-flex flex-column avatar services-description" />
					<div className="d-flex weekplan-buttons-container justify-content-around mt-5">
						<button className="weekplan-btn btn green-button" type="submit">
							Change
						</button>
					</div>
				</div>
				<div className="col-3 mx-1 d-flex flex-column my-auto">
					<UserData />
				</div>
				<div className="col-6 mx-1 d-flex flex-column justify-content-center data-container">
					<AllergensTable />
				</div>
			</div>
		</div>
	);
};
