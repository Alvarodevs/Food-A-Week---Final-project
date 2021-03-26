import React, { useContext, useState } from "react";
//import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const AllergensTable = props => {
	const { store, actions } = useContext(Context);
	const [allergens, setAllergens] = useState("");

	const updateAllergy = e => {
		let img = e.target;
		let allergen = img.getAttribute("data-allergen");
		setAllergens(allergen);
		console.log(allergens);
	};

	const userAllergens = [];

	const handleAllergens = () => {
		userAllergens.push("health=" + allergens + "&");
		console.log(userAllergens);
	};

	return (
		<div>
			<div className="container mt-3 form-check form-check-inline justify-content-between">
				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="wheat-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/wheat-allergy-amber-icon.png"
					/>
					<p className="text-icon">Wheat-free</p>
				</div>
				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="celery-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/milk-allergy-amber-icon.png"
					/>
					<p className="text-icon">Celery-free</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="egg-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/eggs-allergy-amber-icon.png"
					/>
					<p className="text-icon">Egg-free</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="tree-nut-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/peanut-allergy-amber-icon.png"
					/>
					<p className="text-icon">Tree-nut-free</p>
				</div>
			</div>
			<div className="container m-auto my-0 form-check form-check-inline justify-content-between">
				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="shellfish-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/molluscs-allergy-amber-icon.png"
					/>
					<p className="text-icon">Shellfish-free</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="crustacean-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/soya-allergy-amber-icon.png"
					/>
					<p className="text-icon">Crustacean-free</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="gluten-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/soya-allergy-amber-icon.png"
					/>
					<p className="text-icon">Gluten</p>
				</div>

				<div className="d-flex flex-column col-3 align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="fish-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/256/fish-allergy-amber-icon.png"
					/>
					<p className="text-icon">Fish</p>
				</div>
			</div>
			<div className="container mb-1 form-check form-check-inline justify-content-around">
				<div className="d-flex flex-column align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="vegan"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/1024/celery-allergy-amber-icon.png"
					/>
					<p className="text-icon">Vegan</p>
				</div>

				<div className="d-flex flex-column align-items-center">
					<img
						onMouseEnter={updateAllergy}
						onClick={handleAllergens}
						data-allergen="peanut-free"
						className="allergen-icon"
						src="https://icons.iconarchive.com/icons/erudus/allergy/1024/celery-allergy-amber-icon.png"
					/>
					<p className="text-icon">Peanut</p>
				</div>
			</div>
		</div>
	);
};
