import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Card, Accordion, Button } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";

export const MealCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<Card>
			<Card.Header className="white-bg">
				<Accordion.Toggle
					as={Button}
					variant="link"
					eventKey={props.mealNumber}
					name={props.dayName}
					value={props.dayNumber}
					uri={props.uri}>
					{props.mealName || "Please add a meal"}
					<ChevronDown />
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey={props.mealNumber} className="justify-content-between">
				<Card.Body>
					<i className="fas fa-times mr-3" />
					{props.recipeName}
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

MealCard.propTypes = {
	dayName: PropTypes.string,
	dayNumber: PropTypes.number,
	uri: PropTypes.string,
	recipeName: PropTypes.string,
	mealName: PropTypes.string,
	mealNumber: PropTypes.string
};

export const DailyPlan = props => {
	const { store, actions } = useContext(Context);

	let mealList = props.meals.map((item, index) => {
		return (
			<MealCard
				key={index}
				dayName={actions.getDayName(props.dayNumber)}
				dayNumber={props.dayNumber}
				mealName={actions.getMealName(index)}
				mealNumber={index.toString()}
				uri={item.url}
				recipeName={item.name}
			/>
		);
	});

	return (
		<div className="container-fluid p-0">
			<Accordion className="accordion">{mealList}</Accordion>
		</div>
	);
};

DailyPlan.propTypes = {
	dayNumber: PropTypes.number,
	meals: PropTypes.array
};
