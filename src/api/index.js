import axios from "axios";

const url = "https://api.corona-zahlen.org/districts/09162";

// Fetch general info
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

export const fetchHistoryData = async () => {
	try {
		const hist = await axios.get(`${url}/history/cases/30`);
		// console.log(hist);
		// return hist.data.data["09162"].history;
		const histArr = hist.data.data["09162"].history;
		// console.log(histArr);
		// create array with key
		const newHistArray = histArr.map((element) => element.cases);
		return newHistArray;
	} catch (err) {}
};
