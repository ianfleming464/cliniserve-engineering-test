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
		return hist.data.data["09162"].history;
	} catch (err) {}
};
