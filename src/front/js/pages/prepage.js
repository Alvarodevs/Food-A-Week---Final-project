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
		<div className="container-fluid ">
			<div className="row">
				<div className="first-element col-9">
					<div className="head-prepage d-flex justify-content-begin d-flex ">
						<div className="title-web ml-5 mr-auto p-2">Food A Week</div>
					</div>

					<div className="img-prepage2 col-2" />
					<div className=" text-pre-page d-flex flex-column align-items-end  ">
						<p className="prepage-text">Search your favorite recipes</p>
						<p className="prepage-text">Assign recipes for every day</p>
						<p className="prepage-text align-item-end">Use & reuse</p>
						<p className="prepage-text" id="last-prepage-text">
							& enjoy your time
						</p>
						<div className="img-prepage " />
						<div className="mb-5 mr-2">
							{/* 
				<div className="d-flex flex-column buttons-log justify-content-end ">
					<Button
						className="btn prebutton green-button mt-1  p-1"
						onClick={() => setOpen(!open)}
						aria-controls="example-collapse-text"
						aria-expanded={open}>
						New sign up
					</Button>

					<Button
						className="btn prebutton green-button mt-1  p-1"
						onClick={() => setOpenLogin(!openLogin)}
						aria-controls="example-collapse-text"
						aria-expanded={openLogin}>
						Login
					</Button>
				</div>
			</div> */}
							{/* <div>
				<Collapse in={open}>
					<div>
						<SignUp />
					</div>
				</Collapse>
			</div>
			<div>
				<Collapse in={openLogin}>
					<div>
						<SignIn />
					</div>
				</Collapse>
			</div> */}
						</div>
					</div>
				</div>
				<div className="col-3 mt-5">
					<Accordion defaultActiveKey="2" className="">
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="2">
									Login
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2">
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
		</div>
	);
};
