import React from "react";
import Cards from "./components/Cards/Cards.jsx";
import styles from "./App.module.css";
import { fetchData, fetchHistoryData } from "./api";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			munichInfo: {},
			caseHistory: null
		};
	}
	async componentDidMount() {
		// Fetch general data for weekly cases and weekly incidences, store in simple object
		const munichInfo = await fetchData();

		// Fetch history data for cases (last 30 days)

		const caseHistory = await fetchHistoryData();
		// console.log(caseHistory);

		// TO DO:
		// 1. Extract the case numbers from each day of the last 30 days.
		// 2. Get a total case number.
		// 3. Write a method which does this and passes the number as a prop
		// 		to the cards component.
		// 4. Once these main 3 numbers are displayed, work on styling/charts.
		// 5. Write some tests.
		// 6. Double check/refactor if possible (particularly looking at index.js for API

		// update state
		this.setState({ munichInfo: munichInfo, caseHistory: caseHistory });
		// console.log(this.state);
	}

	render() {
		const { casesPerWeek, weekIncidence } = this.state.munichInfo;
		return (
			<>
				<div className={styles.container}>
					<Cards
						cases={casesPerWeek}
						incidence={weekIncidence}
						caseHistory={this.state.caseHistory}
					/>
					<h1></h1>
				</div>
			</>
		);
	}
}
