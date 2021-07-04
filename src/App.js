import React from "react";
import Cards from "./components/Cards/Cards.jsx";
import styles from "./App.module.css";
import { fetchData, fetchHistoryData, fetchLastUpdated } from "./api";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			munichInfo: {},
			monthlyCases: null,
			lastUpdate: null
		};
	}
	async componentDidMount() {
		// Fetch general data for week incidence average and recovered, store in simple object
		const munichInfo = await fetchData();

		// Fetch history data for cases (last 30 days)
		const caseHistory = await fetchHistoryData();
		// Get total cases in last 30 days
		const monthlyCases = caseHistory.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);

		const lastUpdate = await fetchLastUpdated();
		console.log(lastUpdate);
		// console.log(monthlyCases);

		// TO DO:
		// 1. Extract the case numbers from each day of the last 30 days_DONE
		// 2. Get a total case number_DONE
		// 3. Write a method which does this and passes the number as a prop
		// 		to the cards component_DONE
		// 4. Once these main 3 numbers are displayed, work on styling/charts.
		// 5. Write some tests.
		// 6. Double check/refactor if possible (particularly looking at index.js for API

		// update state with info
		this.setState({ munichInfo: munichInfo, monthlyCases: monthlyCases, lastUpdate: lastUpdate });
	}

	render() {
		// Deconstructing info to pass as props
		const { recovered, weekIncidence } = this.state.munichInfo;
		const monthlyCases = this.state.monthlyCases;
		const date = this.state.lastUpdate;

		return (
			<>
				<div className={styles.container}>
					<Cards
						recovered={recovered}
						incidence={weekIncidence}
						monthlyCases={monthlyCases}
						date={date}
					/>
					<h1></h1>
				</div>
			</>
		);
	}
}
