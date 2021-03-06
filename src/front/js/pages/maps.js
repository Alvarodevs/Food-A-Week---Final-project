import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import planeImageUrl from "../../img/plane.png";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Form } from "react-bootstrap";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Map = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-0 d-flex flex-column justify-content-center">
				<h1 className="mb-3">{"Find your local store"}</h1>
				<div className="d-flex flex-row">
					<p className="col-4 flex-column">
						<img className="col-7 d-flex align-items-center" src={planeImageUrl} />
						<Form className="mt-5">
							<Form.Control
								placeholder="Search local shops"
								// onChange={handleInput}
								className="bar-body-dropdown col-12 p-3 m-auto mt-5 w-100"
							/>
						</Form>
					</p>
					<div className="col-md-9 p-3 ">
						<MapContainer
							center={[41.3818, 2.1685]}
							zoom={13}
							scrollWheelZoom={false}
							style={{ height: 300 }}>
							<TileLayer
								attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker position={[41.3818, 2.1685]}>
								<Popup>
									A pretty CSS3 popup. <br /> Easily customizable.
								</Popup>
							</Marker>
						</MapContainer>
					</div>
				</div>
			</div>

			<div />
		</div>
	);
};
