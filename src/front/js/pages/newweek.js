import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";
import "../../styles/newweek.scss";
import { Form, InputGroup } from "react-bootstrap";

export const NewWeek = () => {
	return (
		<div className="container-fluid background-white">
			<div className="title-section text-center my-1 ">
				<h1>New week plan</h1>
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
				<div className="btns-bar-body ml-0 mt-2 justify-content-between">
					<div className="bar-body-dropdown col-4 ml-0">Search Bar</div>

					<Dropdown className="bar-body-dropdown col-2 ml-1">
						<Dropdown.Toggle className="toggle">Food type</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item>Rice</Dropdown.Item>
							<Dropdown.Item>Pasta</Dropdown.Item>
							<Dropdown.Item>Fish</Dropdown.Item>
							<Dropdown.Item>Meat</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="bar-body-dropdown col-2 ml-1">
						<Dropdown.Toggle className="toggle">Allergens</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item>Celery</Dropdown.Item>
							<Dropdown.Item>Gluten</Dropdown.Item>
							<Dropdown.Item>Shellfish</Dropdown.Item>
							<Dropdown.Item>Lactose</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="bar-body-dropdown col-2 ml-1">
						<Dropdown.Toggle className="toggle">Time cooking</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item>{"< 20 minutes"}</Dropdown.Item>
							<Dropdown.Item>{"20 - 30 minutes"}</Dropdown.Item>
							<Dropdown.Item>{"30 - 45 minutes"}</Dropdown.Item>
							<Dropdown.Item>{"> 45 minutes"}</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
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
			<div className="day-display mt-4">
				<div className="d-flex justify-content-around mb-4">
					<div className="col-5" />
					<button className="uparrow" type="submit" />
					<button className="downarrow" type="submit" />
					<div className="col-5" />
				</div>
				<div className="menu-display my-0">
					<div className="menu-display-box day px-3 mr-1">Lunes</div>
					<div className="menu-display-box col-2 mr-1">Desayuno</div>
					<div className="menu-display-box col-2 mr-1">Snack</div>
					<div className="menu-display-box col-2 mr-1">Almuerzo</div>
					<div className="menu-display-box col-2 mr-1">Merienda</div>
					<div className="menu-display-box col-2">Cena</div>
				</div>
			</div>
		</div>
	);
};
