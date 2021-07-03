import axios from "axios";

const url = "https://api.corona-zahlen.org/districts/09162";

// Fetch general info for Munich: from here, we'll get incidence and weekly case numbers.
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
