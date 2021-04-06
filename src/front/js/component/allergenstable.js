import React, { useContext } from "react";
//import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const AllergensTable = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container mt-3 form-check form-check-inline justify-content-between">
				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/wheat-allergy-amber-icon.png"
					/>
					<p className="text-icon">Celíaco/a</p>
				</div>
				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/milk-allergy-amber-icon.png"
					/>
					<p className="text-icon">Lactosa</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/eggs-allergy-amber-icon.png"
					/>
					<p className="text-icon">Huevo</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/peanut-allergy-amber-icon.png"
					/>
					<p className="text-icon">Frutos secos</p>
				</div>
			</div>
			<div className="container m-auto my-0 form-check form-check-inline justify-content-between">
				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/molluscs-allergy-amber-icon.png"
					/>
					<p className="text-icon">Marisco</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/soya-allergy-amber-icon.png"
					/>
					<p className="text-icon">Frutos rojos</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/soya-allergy-amber-icon.png"
					/>
					<p className="text-icon">Legumbres</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/fish-allergy-amber-icon.png"
					/>
					<p className="text-icon">Pescado</p>
				</div>
			</div>
			<div className="container mb-1 form-check form-check-inline justify-content-around">
				<div className="d-flex flex-column align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/1024/celery-allergy-amber-icon.png"
					/>
					<p className="text-icon">Vegano</p>
				</div>

				<div className="d-flex flex-column align-items-center">
					<img
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/1024/celery-allergy-amber-icon.png"
					/>
					<p className="text-icon">Otros</p>
				</div>
			</div>
		</div>
	);
};
