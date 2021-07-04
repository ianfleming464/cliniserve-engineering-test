import axios from "axios";

const url = "https://api.corona-zahlen.org/districts/09162";

const vaxUrl = "https://api.corona-zahlen.org/vaccinations";

// Fetch general info for Munich: from here, we'll get week incidence and recovered //numbers.
export const fetchData = async () => {
	try {
		const {
			data: { data }
		} = await axios.get(url);
		return data["09162"];
	} catch (error) {
		console.log(error);
	}
};

// Fetch case data for the last 30 days
export const fetchHistoryData = async () => {
	try {
		const hist = await axios.get(`${url}/history/cases/30`);

		const histArr = hist.data.data["09162"].history;

		// create array with of daily case numbers
		const newHistArray = histArr.map((element) => element.cases);
		return newHistArray;
	} catch (error) {
		console.log(error);
	}
};

// Fetch Last Updated date
export const fetchLastUpdated = async () => {
	try {
		const {
			data: { meta }
		} = await axios.get(url);
		const lastUpdate = meta.lastUpdate;
		return lastUpdate;
	} catch (error) {
		console.log(error);
	}
};

export const fetchVaccinations = async () => {
	try {
		const {
			data: { data }
		} = await axios.get(vaxUrl);
		// const totalVax = vaxInfo.vaccinated;
		return data;
	} catch (error) {
		console.log(error);
	}
};
