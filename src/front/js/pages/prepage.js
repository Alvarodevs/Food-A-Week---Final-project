import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import { SignUp } from "../component/signUp";
import SignIn from "../component/login";
import { Footer } from "../component/footer";
import "../../styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Collapse, Card, Accordion } from "react-bootstrap";

export const Pre = () => {
	const { store, actions } = useContext(Context);
	const [open, setOpen] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);

	return (
		<div className="container-fluid container-prepage ">
			<div className="row">
				<div className="first-element col-9">
					<div className="head-prepage d-flex justify-content-begin d-flex ">
						<div className="title-web ml-5 mr-auto">Food A Week</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className=" col-8 text-pre-page d-flex ml-5 justify-content-begin  ">
					<p className="prepage-text">Search your favorite recipes & save your weekplan</p>
				</div>
			</div>

			<div className="col-4 signElements">
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="3">
								Login
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="3">
							<SignIn />
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								Sign up
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<SignUp />
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</div>
	);
};
