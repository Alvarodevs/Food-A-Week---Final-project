import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { SignUp } from "../component/signUp";
import { Login } from "../component/login";
import { Footer } from "../component/footer";
import "../../styles/index.scss";

export const Pre = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid ">
			<div className="head-prepage d-flex justify-content-begin">
				<div className="title-web ml-5 mr-auto p-2">Food A Week</div>
				<div className="d-flex flex-column buttons-log justify-content-end">
					<button className="btn prebutton green-button  m-0  p-1">New sign up</button>
					<button className="btn prebutton green-button mt-1  p-1">Login</button>
				</div>
			</div>
			<div className="text-pre-page d-flex flex-column align-items-end ">
				<p className="prepage-text">Search your favorite recipes</p>
				<p className="prepage-text">Assaign recipes for every day</p>
				<p className="prepage-text align-item-end">Use & reuse</p>
				<img className="img-prepage" />
			</div>
			<div className="d-flex ">
				<img className="img-prepage2" />
				<p className="prepage-text">& enjoy your time</p>
			</div>
			{/* <div className="hidden">
				<SignUp />
			</div>
			<div>
				<Login />
			</div> */}

			<div>
				<Footer />
			</div>
		</div>
	);
};
