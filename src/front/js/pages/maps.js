import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Form } from "react-bootstrap";
import Geocode from "react-geocode";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Map = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = useState("");
	const [state, setState] = useState({
		longitude: 41.3818,
		latitude: 2.1685
	});

	//const location =useLocation();
	console.log(state);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				setState({
					longitude: position.coords.longitude,
					latitude: position.coords.latitude
				});
			},
			function(error) {
				console.log(error);
			},
			{
				enableHighAccuracy: true
			}
		);
	}, []);

	const handleInput = event => {
		setValue(event.target.value);
	};
	//Hay que definir lat y lng, si no, da error en Geocode.fromAddress, que aun no funciona.
	// let lat = 0;
	// let lng = 0;

	// Geocode.fromAddress(value).then(
	// 	response => {
	// 		const { lat, lng } = response.results[0].geometry.location;
	// 		console.log(lat, lng);
	// 	},
	// 	error => {
	// 		console.error(error);
	// 	}
	// );

	//POSITION ORIGINAL: 41.3818, 2.1685

	return (
		<div className="container">
			<div className="text-center mt-0 d-flex flex-column justify-content-center">
				{/* <h1 className="mt-0">{"Find your local store"}</h1> */}
				<Form className="mt-1">
					<Form.Control
						placeholder="Search local shops"
						value={value}
						onChange={handleInput}
						className="bar-body-dropdown col-11 p-3 m-auto mt-5 w-100"
					/>
				</Form>
				<div className="d-flex flex-row">
					<div className="col-md-12 mt-3">
						<MapContainer
							center={[state.longitude, state.latitude]}
							zoom={13}
							scrollWheelZoom={true}
							style={{ height: 550 }}>
							<TileLayer
								attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>

							{/* <Marker position={{ lat, lng }}>
								<Popup>
									A pretty CSS3 popup. <br /> Easily customizable.
								</Popup>
							</Marker> */}
						</MapContainer>
					</div>
				</div>
			</div>

			<div />
		</div>
	);
};
