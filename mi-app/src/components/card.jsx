import React from "react";
import img01 from "../img/01.jpeg";

function Card() {
	return (
		<div className="cardContainer">
			<img className="cardImg" src={img01} alt="Imagen" />
			<div className="cardText">
				<p>NOMBRE</p>
				<p>Descripcion</p>
			</div>
		</div>
	);
}

export default Card;
