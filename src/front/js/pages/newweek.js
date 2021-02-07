import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nuevasemana.scss";
//import { Dropdown } from "react-bootstrap/Dropdown";

export const NewWeek = () => {
	return (
		<div className="container-fluid background-pink">
			<div className="title-section text-center mt-2 ">
				<h1>New week plan</h1>
				{/* <div className="imageMenu mt-5 mb-5 col-12">
					<img src="https://dummyimage.com/1200x100&text=selected+menu+image" />
				</div> */}
			</div>
			<div className="weekplan">
				<div className="day-circle">
					<b>Monday</b>
				</div>
				<div className="day-circle">
					<b>Tuesday</b>
				</div>
				<div className="day-circle">
					<b>Wednesday</b>
				</div>
				<div className="day-circle">
					<b>Thursday</b>
				</div>
				<div className="day-circle">
					<b>Friday</b>
				</div>
				<div className="day-circle">
					<b>Saturday</b>
				</div>
				<div className="day-circle">
					<b>Sunday</b>
				</div>
				<div className="weekplan-buttons-container">
					<button className="weekplan-btn btn green-button" type="submit">
						Save
					</button>
					<button className="weekplan-btn btn green-button" type="submit">
						Clear
					</button>
				</div>
			</div>
			<div className="weekplan-body">
				<div className="btns-bar-body">
					{/* AQUI DA ERROR AL METER DROPDOWN-BOOTSTRAP*/}
					<div className="bar-body-dropdown col-4 ml-0">Search Bar</div>
					<div className="bar-body-dropdown">Food type</div>
					<div className="bar-body-dropdown">Allergies</div>
					<div className="bar-body-dropdown">Time cooking</div>
				</div>
				<div className="results-body">
					<div className="results-search col-4">Results search container</div>
					<div className="display-receipt">
						Display receipt
						<div className="create-receipt-btn" type="submit">
							Create
						</div>
						<div className="dragdrop-btn" type="submit">
							Dragdrop
						</div>
					</div>
				</div>
			</div>
			<div className="day-display">
				<button className="uparrow" type="submit" />

				<div className="menu-display my-0">
					<div className="menu-display-box day px-3 mr-1">Lunes</div>
					<div className="menu-display-box col-2 mr-1">Desayuno</div>
					<div className="menu-display-box col-2 mr-1">Snack</div>
					<div className="menu-display-box col-2 mr-1">Almuerzo</div>
					<div className="menu-display-box col-2 mr-1">Merienda</div>
					<div className="menu-display-box col-2">Cena</div>
				</div>

				<button className="downarrow" type="submit" />
			</div>
		</div>
	);
};
