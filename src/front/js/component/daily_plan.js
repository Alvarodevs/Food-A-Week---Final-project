import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import injectContext, { Context } from "../store/appContext";
import { Card, Accordion, Button } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";

export const MealCard = props => {
	const { store, actions } = useContext(Context);
	debugger;
	return (
		<li>
			{props.mealName || "Please add a meal"} : {props.recipeName}
		</li>
	);
};

MealCard.propTypes = {
	dayName: PropTypes.string,
	dayNumber: PropTypes.number,
	uri: PropTypes.string,
	recipeName: PropTypes.string,
	mealName: PropTypes.string,
	mealNumber: PropTypes.number
};

export const DailyPlan = props => {
	const { store, actions } = useContext(Context);

	//if(!store.newWeeklyMenu.days[props.dayNumber][props.mealNumber] &&
	//for (var i in props.meals) {
	debugger;

	let mealList = props.meals.map((item, index) => {
		debugger;
		return (
			<ul key={index}>
				<MealCard
					dayName={actions.getDayName(props.dayNumber)}
					dayNumber={props.dayNumber}
					mealName={actions.getMealName(index)}
					mealNumber={index}
					uri={item.url}
					recipeName={item.name}
				/>
			</ul>
		);
	});
	return (
		<div className="container-fluid p-0">
			<Accordion className="accordion">{mealList}</Accordion>
		</div>
	);
	//}
};

DailyPlan.propTypes = {
	dayNumber: PropTypes.number,
	meals: PropTypes.array
};
