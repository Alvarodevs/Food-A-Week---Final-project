import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";

import "../../styles/index.scss";

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
			<div className="col-12 d-flex flex-column avatar services-description my-2" />
			<div className="avatar-buttons-container flex-row justify-content-around">
				<Form className="d-flex" onSubmit={uploadAvatar}>
					<Button
						className="weekplan-btn btn green-button"
						type="file"
						onChange={e => setFiles(e.target.files)}>
						Change
					</Button>
					<Button className="weekplan-btn btn green-button" type="submit">
						Save
					</Button>
				</Form>
			</div>
		</div>
	);
};
