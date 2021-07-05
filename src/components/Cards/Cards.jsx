import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.css"
import { className } from "postcss-selector-parser";

const Cards = (props) => {
	const { threeMonthCases, incidence, recovered, date  } = props;

	// Rounding average incidence to 2 decimal places...just because.
	const rounderIncidence = Math.round(incidence * 100) / 100;
	// converting to string to avoid NaN console errors
	const strIncidence = rounderIncidence.toString();


	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cases)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Cases (last 90 days):</Typography>
						<Typography className="threeMonthCases" variant="h5" gutterBottom>{threeMonthCases}</Typography>
						<Typography color="textSecondary" gutterBottom>Last updated: {new Date(date).toDateString()}</Typography>
						<Typography variant="body2">Confirmed cases of Covid-19 for the past 90 days.</Typography>
						</CardContent>
					</Grid>
				<Grid item component={Card} xs={12} md={3}className={cx(styles.card, styles.incidence)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Incidence numbers (last 90 days):</Typography>
						<Typography variant="h5" gutterBottom>{strIncidence}</Typography>
						<Typography color="textSecondary" gutterBottom>Last updated: {new Date(date).toDateString()}</Typography>
						<Typography variant="body2">Average figure of the week incidence number for the past 90 days.</Typography>
						</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Total recovered:</Typography>
						<Typography variant="h5" gutterBottom>{recovered} </Typography>
						<Typography color="textSecondary" gutterBottom>Last updated: {new Date(date).toDateString()}</Typography>
						<Typography variant="body2">Number of people who have recovered from Covid-19.</Typography>
						</CardContent>
					</Grid>
			</Grid>
		</div>
		)
};

export default Cards;
