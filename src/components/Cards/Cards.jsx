import React from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/CardComponent";
import styles from "./Cards.module.css"


const Cards = (props) => {
	const { threeMonthCases, incidence, recovered, date  } = props;

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<CardComponent
					className={styles.cases}
					cardTitle="Cases: (last 90 days)"
					value={threeMonthCases}
					date={date} 
					cardSubtitle="Confirmed cases of Covid-19 for the past 90 days." />
				<CardComponent
					className={styles.incidence}
					cardTitle="Weekly Incidences: (last 90 days)"
					value={incidence}
					date={date} 
					cardSubtitle="Average figure of the weekly incidence number (per 100,000 people) for the past 90 days." />
				<CardComponent
					className={styles.recovered}
					cardTitle="Recovered:"
					value={recovered}
					date={date} 
					cardSubtitle="Number of people who have recovered from Covid-19." />
			</Grid>
		</div>
		)
};

export default Cards;
