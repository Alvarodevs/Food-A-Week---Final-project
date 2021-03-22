import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Card, Accordion, Button } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";

export const MealCard = props => {
	return (
		<Card>
			<Card.Header className="white-bg">
				<Accordion.Toggle
					as={Button}
					variant="link"
					eventKey="0"
					name={props.dayName}
					value={props.dayNumber}
					uri={props.uri}>
					{"Breakfast"} <ChevronDown />
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey="0" className="justify-content-between">
				<Card.Body>
					<i className="fas fa-times mr-3" />
					{/* <Icon.Trash2Fill className="mr-3" /> */}
					{props.recipeName}
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

MealCard.propTypes = {
	dayName: PropTypes.string,
	dayNumber: PropTypes.string,
	uri: PropTypes.string,
	recipeName: PropTypes.string
};

export const DailyPlan = props => {
	const { store, actions } = useContext(Context);
	debugger;
	return (
		<div className="container-fluid p-0">
			<Accordion className="accordion">
				<MealCard
					dayName={actions.getDayName(props.dayNumber)}
					dayNumber={props.dayNumber}
					uri={store.newWeeklyMenu.days[props.dayNumber][0]["uri"]}
					recipeName={store.newWeeklyMenu.days[props.dayNumber][0]["name"]}
				/>
			</Accordion>
		</div>
	);
};

DailyPlan.propTypes = {
	dayNumber: PropTypes.string,
	meals: PropTypes.object
};
