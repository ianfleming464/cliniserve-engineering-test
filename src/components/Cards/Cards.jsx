import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.css"
import { className } from "postcss-selector-parser";

const Cards = (props) => {
	const { monthlyCases, incidence, recovered, date  } = props;

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cases)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Cases (last 30 days):</Typography>
						<Typography variant="h5">{monthlyCases}</Typography>
						<Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
						<Typography variant="body2">Confirmed cases of Covid-19 for the past 30 days.</Typography>
						</CardContent>
					</Grid>
				<Grid item component={Card} xs={12} md={3}className={cx(styles.card, styles.incidence)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Week incidence:</Typography>
						<Typography variant="h5">{Math.round(incidence)}</Typography>
						<Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
						<Typography variant="body2">Average figure of the weekly incidence number.</Typography>
						</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Total recovered:</Typography>
						<Typography variant="h5">{recovered}</Typography>
						<Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
						<Typography variant="body2">Number of people who have receoved from Covid-19.</Typography>
						</CardContent>
					</Grid>
			</Grid>
		</div>
		)
};

export default Cards;
