import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import HealthyFoodImg from "../../img/eating.png";
import PhoneImg from "../../img/phone.png";
import { SignUp } from "../component/signUp";
import { Login } from "../component/login";
import { Footer } from "../component/footer";
import "../../styles/index.scss";

export const Pre = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid ">
			<div className="head-prepage d-flex justify-content-between">
				<div className="title-web ml-5 mr-auto p-2">Food A Week</div>
				<div className="d-flex flex-column buttons-log">
					<button className="btn btn-lg green-button  m-0 5 p-1">New sign up</button>
					<button className="btn btn-lg green-button mt-5 mr-5 p-1">Login</button>
				</div>
			</div>
			<div className="text-pre-page d-flex flex-column align-items-end ">
				<p className="prepage-text">Search your favorites recipes</p>
				<p className="prepage-text">Assaign recipes for every day</p>
				<p className="prepage-text align-item-end">Use & reuse</p>
				<img className="img-first col-6 " src={HealthyFoodImg} />
			</div>
			<div className="d-flex row ">
				<img className="col-6 " src={PhoneImg} />
				<p className="prepage-text">& enjoy your time</p>
			</div>
			<div>
				<SignUp />
				<Login />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
};
