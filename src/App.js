import React from "react";
import { Cards } from "./components";
import { Typography, Box } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./App.module.css";
import {
	fetchData,
	fetchHistoryData,
	fetchCaseData,
	fetchLastUpdated,
	fetchVaccinations
} from "./api";
import covidImg from "./images/covid_image.png";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			threeMonthCases: null,
			incidenceHistory: [],
			lastUpdate: null,
			munichInfo: {},
			vaccinations: null
		};
	}
	async componentDidMount() {
		// Fetch case data for cases (last 90 days)
		const threeMonthCases = await fetchCaseData();

		// Fetch incidence data for last 90 days
		const incidenceHistory = await fetchHistoryData();
		console.log(incidenceHistory);

		// Fetch last updated information
		const lastUpdate = await fetchLastUpdated();
		// console.log(lastUpdate);

		// Fetch general data for recovered, store in simple object
		const munichInfo = await fetchData();

		// Fetch total vaccination numbers info
		const vaccinations = await fetchVaccinations();
		// console.log(vax);

		// To do: in ReadMe, talk about lack of chart; lack of understanding of epidemiological factors.

		// update state with info
		this.setState({
			threeMonthCases: threeMonthCases,
			incidenceHistory: incidenceHistory,
			lastUpdate: lastUpdate,
			munichInfo: munichInfo,
			vaccinations: vaccinations
		});
	}

	render() {
		// Destructuring info to pass as props
		const threeMonthCases = this.state.threeMonthCases;
		const date = this.state.lastUpdate;
		const { recovered } = this.state.munichInfo;
		const incidenceHistory = this.state.incidenceHistory;
		const vaccinations = this.state.vaccinations;
		console.log(typeof vaccinations);

		return (
			<>
				<div className={styles.container}>
					<img className={styles.image} src={covidImg} alt="Corona virus" />
					<Cards
						recovered={recovered}
						incidence={incidenceHistory}
						threeMonthCases={threeMonthCases}
						date={date}
					/>
					<Box m={2} pt={4} className="vaxBox">
						<Typography variant="h5">
							Total vaccinations:
							<CountUp start={0} end={vaccinations} duration={2} separator="," />
						</Typography>
					</Box>
					<Box m={1}>
						<Typography variant="h6">
							A simple app which takes real-time Covid-19 data for the district of Munich (from the
							{<a href="https://api.corona-zahlen.org/docs/"> Koch Institute API</a>}) and displays
							it.
						</Typography>
					</Box>
				</div>
			</>
		);
	}
}
