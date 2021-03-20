import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import HealthyFoodImg from "../../img/eating.png";
import PhoneImg from "../../img/phone.png";
import { SignUp } from "../component/signUp";
import { Login } from "../component/login";
import "../../styles/index.scss";

export const Pre = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid pre-page-container">
			<div className="container">
				<div className="text-pre-page">
					<p className="title-web ml-5">Food A Week</p>

					<p className="pre-text ml-5">Search, Organize and Reuse your work</p>
					<p className="pre-text ml-5">Make your time more effective & enjoy your food</p>
				</div>
				<div className="button-group-pre d-flex flex-column justify-content-end align-items-end">
					<button className="btn btn-lg green-button">New sign up</button>
					<SignUp />
					<button className="btn green-button">Login</button>
					<Login />
				</div>
				<div className="d-flex row">
					<p className="prepage-text">Search your favorites recipes</p>
					<img className="col-6 " src={PhoneImg} />
					<p className="prepage-text">Assaign recipes for every day</p>
				</div>
				<div className="d-flex row ">
					<p className="prepage-text align-item-start">Search your favorites recipes</p>
					<img className="col-6 " src={HealthyFoodImg} />
					<p className="prepage-text align-item-end">Use & reuse</p>
				</div>
				<div className="d-flex justify-content-center">
					<p className="prepage-text">& enjoy your time</p>
				</div>
			</div>
			{/* <div>
				{/* <Footer />
			</div> */}
		</div>
	);
};
