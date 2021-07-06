import axios from "axios";

const url = "https://api.corona-zahlen.org/districts/09162";
const vaxUrl = "https://api.corona-zahlen.org/vaccinations";

// Fetch case data for the last 90 days
export const fetchCaseData = async () => {
	try {
		const hist = await axios.get(`${url}/history/cases/90`);
		const histArr = hist.data.data["09162"].history;

		// create array with daily case numbers
		const newHistArray = histArr.map((element) => element.cases);
		// calculate total cases for last 90 days
		const threeMonthCases = newHistArray.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
		return threeMonthCases;
	} catch (error) {
		console.log(error);
	}
};

// Fetch incidence data for the last 90 days
export const fetchHistoryData = async () => {
	try {
		const incObj = await axios.get(`${url}/history/incidence/90`);
		const incArr = incObj.data.data["09162"].history;

		// create array with daily weekIncidence figures
		const newIncArr = incArr.map((element) => element.weekIncidence);

		// calculate total for last 90 days
		const threeMonthIncidences = newIncArr.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
		const threeMonthIncidencesAverage = threeMonthIncidences / 90;
		// rounded
		const threeMonthIncidencesAverageRound = threeMonthIncidencesAverage.toFixed(2);
		return threeMonthIncidencesAverageRound;
	} catch (error) {
		console.log(error);
	}
};

// Fetch general info for Munich: from here, we'll get the recovered numbers.
export const fetchData = async () => {
	try {
		const { data: { data }} = await axios.get(url);
		return data["09162"];
	} catch (error) {
		console.log(error);
	}
};

// Fetch Last Updated date
export const fetchLastUpdated = async () => {
	try {
		const { data: { meta }} = await axios.get(url);
		const lastUpdate = meta.lastUpdate;
		return lastUpdate;
	} catch (error) {
		console.log(error);
	}
};

// Fetch vaccinated figures
export const fetchVaccinations = async () => {
	try {
		const { data: { data }} = await axios.get(vaxUrl);
		const totalVax = data.vaccinated;
		return totalVax;
	} catch (error) {
		console.log(error);
	}
};
