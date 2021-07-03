import React from "react";

const Cards = (props) => {
	const { cases, incidence, monthlyCases } = props;

	return (
		<>
		  <h4>Cases per week:{cases}</h4> <br />
			<h4>Cases (last 30 days): {monthlyCases}</h4>
			<h4>Incidences per week:{Math.round(incidence)}</h4>
		</>
		)
};

export default Cards;
