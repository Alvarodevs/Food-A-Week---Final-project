import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Card, Accordion, Button } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";

export const DailyPlan = props => {
	const { store, actions } = useContext(Context);

	// const showRecipe = props => {
	// 	if (store.day === props.name) {
	// 		console.log(props.name);
	// 	} else null;
	// };

	return (
		//console.log(props),
		<div className="container-fluid p-0">
			<Accordion className="accordion">
				<Card>
					<Card.Header className="white-bg">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="0"
							name={props.name}
							value={props.value}
							uri={props.uri}>
							{"Breakfast"} <ChevronDown />
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0" className="justify-content-between">
						<Card.Body>
							<i className="fas fa-times mr-3" />
							{/* <Icon.Trash2Fill className="mr-3" /> */}
							{props.title}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className="white-bg">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="1"
							name={props.name}
							value={props.value}
							uri={props.uri}>
							{"Snack"} <ChevronDown />
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<i className="fas fa-times mr-3" />
							{/* <Icon.Trash2Fill className="mr-3" /> */}
							{props.title}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className="white-bg">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="2"
							name={props.name}
							value={props.value}
							uri={props.uri}>
							{"Lunch"} <ChevronDown />
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							<i className="fas fa-times mr-3" />
							{/* <Icon.Trash2Fill className="mr-3" /> */}
							{props.title}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className="white-bg">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="3"
							name={props.name}
							value={props.value}
							uri={props.uri}>
							{"Snack"} <ChevronDown />
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
							<i className="fas fa-times mr-3" />
							{/* <Icon.Trash2Fill className="mr-3" /> */}
							{props.title}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className="white-bg">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="4"
							name={props.name}
							value={props.value}
							uri={props.uri}>
							{"Dinner"} <ChevronDown />
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="4">
						<Card.Body>
							<i className="fas fa-times mr-3" />
							{/* <Icon.Trash2Fill className="mr-3" /> */}
							{props.title}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

DailyPlan.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	uri: PropTypes.string,
	title: PropTypes.string
};
