import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Pre = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid background-white pre-page-img">
			<div className="container">
				<div className="text-pre-page">
					<p className="title-web ml-5">Food A Week</p>
					<p className="pre-text ml-5">Search, Organize and Reuse your work</p>
					<p className="pre-text ml-5">Make your time more effective & enjoy your food</p>
				</div>
				<div className="button-group-pre d-flex flex-column justify-content-end align-items-end">
					<button type="submit" className="btn btn-lg green-button mb-4 p-2">
						Login
					</button>
					<button type="submit" className="btn btn-lg green-button mb-4 p-2 ">
						Sign in
					</button>
				</div>
			</div>
		</div>
	);
};
