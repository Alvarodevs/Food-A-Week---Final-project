import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Tab, Row, Col, Nav, Button, FormControl, Form } from "react-bootstrap";
import { DailyPlan } from "./daily_plan";

export const Weekplan = props => {
	const { store, actions } = useContext(Context);
	const [titleMenu, setTitleMenu] = useState("");

	const handleSubmit = event => {
		actions.addTitleMenu(titleMenu);
		//actions.newWeek();
	};

	const handleInputChange = e => {
		setTitleMenu(e.target.value);
	};

	return (
		<div className="container-fluid">
			<div className="w-100 ">
				<Form className="mb-3 d-flex">
					<FormControl
						variant="success"
						className="menu-title"
						placeholder="Week menu title"
						aria-label="text"
						onChange={handleInputChange}
					/>
					{/* TRIGGER PARA CREAR EL JSON EN FLUX */}
					<Button variant="none" className="green-button ml-3" onClick={handleSubmit}>
						Save
					</Button>
				</Form>
			</div>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav className="nav-pills flex-column">
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="first" name={props.name}>
									{"Monday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="second" name={props.name}>
									{"Tuesday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="third" name={props.name}>
									{"Wednesday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="fourth" name={props.name}>
									{"Thursday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="fifth" name={props.name}>
									{"Friday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="sixth" name={props.name}>
									{"Saturday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="seventh" name={props.name}>
									{"Sunday"}
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="mt-2 accord-container">
							<Tab.Pane eventKey="first" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
							<Tab.Pane eventKey="second" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
							<Tab.Pane eventKey="third" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
							<Tab.Pane eventKey="fourth" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
							<Tab.Pane eventKey="fifth" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
							<Tab.Pane eventKey="sixth" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
							<Tab.Pane eventKey="seventh" className="accordion">
								{(store.newWeeklyMenu.days[0] && (
									<DailyPlan dayNumber={0} meals={store.newWeeklyMenu.days[0]} />
								)) ||
									"Please add a meal on the day and meal mentioned"}
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

Weekplan.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	uri: PropTypes.string,
	title: PropTypes.string
};
