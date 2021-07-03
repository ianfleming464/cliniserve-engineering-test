import React from "react";

const Cards = (props) => {

console.log(props)

	return (
		<>
		  <h4>Cases per week:{props.cases}</h4> <br />
			<h4>Cases (last 30 days): </h4>
			<h4>Incidences per week:{Math.round(props.incidence)}</h4>
		</>
		)
};

export default Cards;
