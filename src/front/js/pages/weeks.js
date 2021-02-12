import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export const AllWeeks = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid background-white">
			<div className="text-center mt-3 d-flex row justify-content-center">
				<h1>{"All your weeks"}</h1>
				<button type="submit" className="btn green-button ml-5">
					Get me out of here! I want to generate a new week
				</button>
			</div>
			<div>
				<div className="card-deck justify-content-center mt-5">
					<div className="card col-4 menuWeek">
						<img className="card-img-top" src="..." alt="Card image cap" />
						<div className="card-body">
							<div className="card-title">Semana sin pescado</div>
							<div className="card-title">Some information</div>
						</div>
						<div className="card-footer">
							<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
					<div className="card col-4 menuWeek" />
					<div className="card col-4 menuWeek" />
				</div>
			</div>
		</div>
	);
};
