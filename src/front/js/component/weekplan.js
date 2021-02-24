import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Tab, Row, Col, Nav, Button, FormControl, Form } from "react-bootstrap";
import { DailyPlan } from "./daily_plan";

export const Weekplan = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="w-100 ">
				<Form className="mb-3 d-flex">
					<FormControl
						variant="success"
						className="menu-title"
						placeholder="Week menu title"
						aria-label="text"
					/>
					<Button variant="none" className="green-button ml-3">
						Save
					</Button>
				</Form>
			</div>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav className="nav-pills flex-column">
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="first">
									{"Monday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="second">
									{"Tueday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="third">
									{"Wedneday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="fourth">
									{"Thursday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="fifth">
									{"Friday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="sixth">
									{"Saturday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-2" eventKey="seventh">
									{"Sunday"}
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="mt-2 accord-container">
							<Tab.Pane eventKey="first" className="accordion">
								<DailyPlan />
							</Tab.Pane>
							<Tab.Pane eventKey="second" className="accordion">
								<DailyPlan />
							</Tab.Pane>
							<Tab.Pane eventKey="third" className="accordion">
								<DailyPlan />
							</Tab.Pane>
							<Tab.Pane eventKey="fourth" className="accordion">
								<DailyPlan />
							</Tab.Pane>
							<Tab.Pane eventKey="fifth" className="accordion">
								<DailyPlan />
							</Tab.Pane>
							<Tab.Pane eventKey="sixth" className="accordion">
								<DailyPlan />
							</Tab.Pane>
							<Tab.Pane eventKey="seventh" className="accordion">
								<DailyPlan />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};
