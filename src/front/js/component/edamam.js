// import React, { useContext } from "react";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
// import "../../styles/edamam.scss";

// export const Edamam = ({ label, totalTime, image, ingredients, healthLabels, url }) => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="edamam">
// 			<h2>{label}</h2>
// 			<img src={image} className={style.image} alt="" />
// 			{/* MAP DE ALERGENOS */}
// 			<ul>
// 				{healthLabels.map(healthLabel => (
// 					<li>
// 						<h4>{healthLabel.text}</h4>
// 					</li>
// 				))}
// 			</ul>
// 			{/* MAP DE ingredients O MEJOR ARRAY DE ingredientList */}
// 			<ol>
// 				{ingredients.map(ingredient => (
// 					<li>
// 						{ingredient.weight} of {ingredient.text}{" "}
// 					</li>
// 				))}
// 			</ol>
// 			{/* COMENSALES
//             <p>Cook it for: </p>{yield}<p> people</p> */}
// 			{/* TIEMPO DE PREPARACION */}
// 			<p>{totalTime}</p>
// 			{/* LINK A RECETA ORIGINAL CON LA DESCRIPCION DE COMO HACER RECETA */}
// 			<h3>
// 				Want to prepare it?
// 				{url}
// 			</h3>
// 		</div>
// 	);

// 	Edamam.propTypes = {
// 		label: PropTypes.string,
// 		yield: PropTypes.number,
// 		totalTime: PropTypes.number,
// 		image: PropTypes.string,
// 		//REVISAR ESTAS 2 ULTIMAS PROPS, ¿CORRECTAS?
// 		healthLabels: PropTypes.arrayOf(PropTypes.string),
// 		ingredients: PropTypes.arrayOf(PropTypes.object)
// 	};
// };
