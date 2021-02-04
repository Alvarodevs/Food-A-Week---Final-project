import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/nuevasemana.scss";

export const NuevaSemana = () => {
	return (
		<div className="container">
			<div className="weekplan">
				<div className="day-circle">Monday</div>
				<div className="day-circle">Tuesday</div>
				<div className="day-circle">Wednesday</div>
				<div className="day-circle">Thursday</div>
				<div className="day-circle">Friday</div>
				<div className="day-circle">Saturday</div>
				<div className="day-circle">Sunday</div>
				<div className="weekplan-buttons-container">
					<button className="weekplan-btn">Save</button>
					<button className="weekplan-btn">Clear</button>
				</div>
			</div>
			<div className="weekplan-body">
				<div className="btns-bar-body">
					<div className="search-bar col-4">Search Bar</div>
					<div className="foodtype-dropdown">Food type</div>
					<div className="allergies-dropdown">Allergies</div>
					<div className="timecooking-dropdown">Time cooking</div>
				</div>
				<div className="results-body">
					<div className="results-search col-4">Results search container</div>
					<div className="display-receipt">
						Display receipt
						<div className="create-receipt-btn">Create</div>
						<div className="dragdrop-btn">Dragdrop</div>
					</div>
				</div>
			</div>
			<div className="day-display">
				<div className="uparrow" />
				<div className="menu-display">
					<div className="menu-display-box mr-1">Lunes</div>
					<div className="menu-display-box col-2 mr-1">Desayuno</div>
					<div className="menu-display-box col-2 mr-1">Snack</div>
					<div className="menu-display-box col-2 mr-1">Almuerzo</div>
					<div className="menu-display-box col-2 mr-1">Merienda</div>
					<div className="menu-display-box col-2">Cena</div>
				</div>
				<div className="downarrow" />
			</div>
		</div>
	);
};
