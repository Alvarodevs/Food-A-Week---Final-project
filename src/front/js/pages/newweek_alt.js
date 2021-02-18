import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import injectContext, { Context } from "../store/appContext";
import "../../styles/newweek_alt.scss";
import { Form, InputGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export const NewWeekAlt = () => {
	return (
		<div className="newweek-container container-fluid d-flex">
			<div className="container-fluid col-6 m-0">
				{/* <div className="title-section text-center my-1 ">
				<h1>New week plan</h1>
			</div> */}
				<div className="weekplan-body ">
					<div className="bar-body-dropdown col-12 p-3 m-auto w-100">Search Bar</div>
					<div className="btns-bar-body mx-0 w-100 justify-content-between my-2">
						<Dropdown dropup className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Food type</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Rice</Dropdown.Item>
								<Dropdown.Item>Pasta</Dropdown.Item>
								<Dropdown.Item>Fish</Dropdown.Item>
								<Dropdown.Item>Meat</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Allergens</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Celery</Dropdown.Item>
								<Dropdown.Item>Gluten</Dropdown.Item>
								<Dropdown.Item>Shellfish</Dropdown.Item>
								<Dropdown.Item>Lactose</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown className="bar-body-dropdown">
							<Dropdown.Toggle className="toggle">Time cooking</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>{"< 20 minutes"}</Dropdown.Item>
								<Dropdown.Item>{"20 - 30 minutes"}</Dropdown.Item>
								<Dropdown.Item>{"30 - 45 minutes"}</Dropdown.Item>
								<Dropdown.Item>{"> 45 minutes"}</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				<div className="results-body">
					<div className="results-search w-100 mr-0">Results search container</div>
				</div>
			</div>
			<div className="d-flex flex-column col-6 mt-5">
				<div className="weekplan d-flex container-fluid justify-content-center">
					<div className="day-circle mx-4">
						<Dropdown>
							<Dropdown.Toggle variant="" className="dropdown-basic">
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
					<div className="day-circle  mx-5">
						<b>Tuesday</b>
					</div>
					<div className="day-circle mx-4">
						<b>Wednesday</b>
					</div>
				</div>
				<div className="weekplan d-flex container-fluid justify-content-between mt-5">
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
				</div>
			</div>
		</div>
	);
};
