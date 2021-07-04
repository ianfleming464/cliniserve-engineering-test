import React from "react";
import { Cards, Chart } from "./components";
import { Typography, Box } from "@material-ui/core";
import styles from "./App.module.css";
import { fetchData, fetchHistoryData, fetchLastUpdated, fetchVaccinations } from "./api";
import covidImg from "./images/covid_image.png";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			munichInfo: {},
			monthlyCases: null,
			lastUpdate: null,
			vaccinations: null
		};
	}
	async componentDidMount() {
		// Fetch general data for week incidence average and recovered, store in simple object
		const munichInfo = await fetchData();

		// Fetch history data for cases (last 30 days)
		const caseHistory = await fetchHistoryData();
		// console.log(caseHistory);
		// Get total cases in last 30 days
		const monthlyCases = caseHistory.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);

		const lastUpdate = await fetchLastUpdated();
		console.log(lastUpdate);
		// console.log(monthlyCases);

		const vax = await fetchVaccinations();
		console.log(vax);

		// TO DO:
		// 1. Extract the case numbers from each day of the last 30 days_DONE
		// 2. Get a total case number_DONE
		// 3. Write a method which does this and passes the number as a prop
		// 		to the cards component_DONE
		// 4. Once these main 3 numbers are displayed, work on styling/charts_STYLING DONE.
		// 5. Write some tests.
		// 6. Add links to the API and author.
		// 6. Double check/refactor if possible (particularly looking at index.js for API

		// If time, add a chart - specifically to illustrate the vaccination numbers. Focus on TESTING now.

		// update state with info
		this.setState({
			munichInfo: munichInfo,
			monthlyCases: monthlyCases,
			lastUpdate: lastUpdate,
			vaccinations: vax
		});
	}

	render() {
		// Deconstructing info to pass as props
		const { recovered, weekIncidence } = this.state.munichInfo;
		const monthlyCases = this.state.monthlyCases;
		const date = this.state.lastUpdate;
		const vaccinations = this.state.vaccinations;

		return (
			<>
				<div className={styles.container}>
					<img className={styles.image} src={covidImg} alt="Corona virus" />
					<Cards
						recovered={recovered}
						incidence={weekIncidence}
						monthlyCases={monthlyCases}
						date={date}
					/>
					<Box m={2} pt={3}>
						<Typography variant="h5">
							{" "}
							A simple app which takes real-time Covid-19 data for the district of Munich (from the
							Koch Institute API) and displays it.
						</Typography>
					</Box>
					<h1></h1>
				</div>
			</>
		);
	}
}
