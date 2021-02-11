import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";
import planeImageUrl from "../../img/plane.png";
export const Map = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container background-pink">
			<div className="text-center mt-3  d-flex flex-column justify-content-center">
				<h1 className="mb-5">{"Find your local store"}</h1>
				<div className="d-flex flex-row">
					<p>
						<img className="col-7 d-flex align-items-stretch" src={planeImageUrl} />
					</p>
					<img clasName="mt-5" src="https://dummyimage.com/800x400&text=placeholder+map" />
				</div>
			</div>

			<div />
		</div>
	);
};
