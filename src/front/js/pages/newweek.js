import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import injectContext, { Context } from "../store/appContext";
//import "../../styles/newweek.scss";
import { Form, InputGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export const NewWeek = () => {
	return (
		<div className="container-fluid">
			{/* <div className="title-section text-center my-1 ">
				<h1>New week plan</h1>
			</div> */}
			<div className="weekplan">
				<div className="day-circle">
					<Dropdown>
						<Dropdown.Toggle variant="" className="dropdown-basic day-circle  mr-5">
							Monday
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="" className="d-flex row align-items-center justify-content-around">
								Breakfast <Icon.Check2All /> <Icon.Eraser />
							</Dropdown.Item>
							<Dropdown.Item href="" className="d-flex row align-items-center justify-content-around">
								Lunch <Icon.Circle />
							</Dropdown.Item>
							<Dropdown.Item href="" className="d-flex row align-items-center justify-content-around">
								Snack
								<Icon.Check2All /> <Icon.Eraser />{" "}
							</Dropdown.Item>
							<Dropdown.Item href="" className="d-flex row align-items-center justify-content-around">
								Dinner
								<Icon.Circle />
							</Dropdown.Item>
							<Dropdown.Item href="" className="d-flex row align-items-center justify-content-around">
								Others
								<Icon.Circle />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
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

					<Dropdown dropup className="bar-body-dropdown col-2 ml-1">
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
					<div className="about-recipe">
						<div className="display-recipe mb-1">
							Display recipe
							{/* <div className="create-receipt-btn" type="submit">
								Create
							</div> */}
							{/* <div className="dragdrop-btn" type="submit">
								Dragdrop
							</div> */}
						</div>
						<div className=" mt-1 day-assign-recipe ">
							<form className="form-inline">
								<div className="form-row align-items-center ">
									<div className="d-flex row justify-items-around">
										<select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
											<option selected>Select day</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
											<option selected>Select meal</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<button type="submit" className="green-button btn">
											Submit
										</button>
									</div>
								</div>
								<div className="col-auto my-1" />
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="day-display mt-4">
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
			</div> */}
		</div>
	);
};
