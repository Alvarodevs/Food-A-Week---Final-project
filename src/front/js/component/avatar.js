import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button, Image } from "react-bootstrap";

//import "../../styles/index.scss";

export const Avatar = () => {
	const { store, actions } = useContext(Context);
	const [files, setFiles] = useState(null);

	const uploadAvatar = event => {
		event.preventDefault();
		console.log("Avatar uploaded");
		// let body = new FormData();
		// body.append("avatar_image", files[0]);
		// const options = {
		// 	body,
		// 	method: "POST"
	};

	// fetch("process.env.BACKEND_URL", options)
	// 	.then(resp => resp.json())
	// 	.then(data => data.json())
	// 	.catch((error = ("Error to upload", error)));
	// };
	return (
		<div>
			<Image className="col-12 d-flex flex-column avatar services-description my-2" roundedCircle />
			<div className="avatar-buttons-container flex-row justify-content-around">
				<Form className="d-flex" onSubmit={uploadAvatar}>
					<Form.Group className="d-flex">
						<Form.File
							id="input-file-avatar"
							className="d-flex weekplan-btn btn green-button"
							onChange={e => setFiles(e.target.files)}
						/>

						<Button className="weekplan-btn btn green-button d-flex" type="submit">
							Save
						</Button>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};
