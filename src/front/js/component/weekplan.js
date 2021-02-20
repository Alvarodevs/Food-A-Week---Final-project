import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import {
	Tab,
	Row,
	Col,
	Nav,
	Sonnet,
	TabContainer,
	TabContent,
	TabPane,
	Button,
	InputGroup,
	FormControl
} from "react-bootstrap";
import { DailyPlan } from "./daily_plan";

export const Weekplan = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="w-100">
				<InputGroup className="mb-3">
					<FormControl className="menu-title" placeholder="Week menu title" aria-label="text" />
					<Button className="green-button ml-3">SAVE</Button>
				</InputGroup>
			</div>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column mt-3">
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="first">
									{"Monday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="second">
									{"Tueday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="third">
									{"Wedneday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="fourth">
									{"Thursday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="fifth">
									{"Friday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="sixth">
									{"Saturday"}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="green-button my-1" eventKey="seventh">
									{"Sunday"}
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="mt-4 accord-container">
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
