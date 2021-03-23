import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { SignUp } from "../component/signUp";
import SignIn from "../component/login";
import { Footer } from "../component/footer";
import "../../styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Pre = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid ">
			<div className="head-prepage d-flex justify-content-begin">
				<div className="title-web ml-5 mr-auto p-2">Food A Week</div>
				<div className="d-flex flex-column buttons-log justify-content-end">
					<button
						className="btn prebutton green-button mt-1  p-1"
						type="button"
						data-toggle="collapse"
						data-target="#signUpComponent"
						aria-expanded="false"
						aria-controls="signUpComponent">
						New sign up
					</button>
					<button
						className="btn prebutton green-button mt-1  p-1"
						type="button"
						data-toggle="collapse"
						data-target="#logincomponent"
						aria-expanded="false"
						aria-controls="logincomponent">
						Login
					</button>
				</div>
			</div>
			<div className="text-pre-page d-flex flex-column align-items-end ">
				<p className="prepage-text">Search your favorite recipes</p>
				<p className="prepage-text">Assign recipes for every day</p>
				<p className="prepage-text align-item-end">Use & reuse</p>
				<p className="prepage-text" id="last-prepage-text">
					& enjoy your time
				</p>
				<div className="img-prepage" />
			</div>
			<div className="d-flex ">
				<div className="img-prepage2" />
			</div>
			<div className="collapse" id="signUpComponent">
				<SignUp />
			</div>

			<div className="collapse" id="loginComponent">
				<div>
					<SignIn />
				</div>
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
};
