import React from "react";
import "../styleSheets/testimony.css";

//const Testimony = () =>

function Testimony(props) {
	return (
		<div className="testimonyContainer">
			<img className="testimonyImg" src={require(`../img/${props.img}.jpeg`)} alt="SonoSapiens Pic 01" />
			<div className="testimonyTextContainer">
				<p className="testimonyName">
					<strong>{props.name}</strong> de {props.country}
				</p>
				<p className="testimonyJob">
					{props.job} en <strong>{props.company}</strong>
				</p>
				<p className="testimonyText">"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimony;
