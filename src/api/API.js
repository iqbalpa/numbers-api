const BASE_URL = "http://numbersapi.com";

const API = {
	fetchTrivia: async (number) => {
		return fetch(`${BASE_URL}/${number}`)
			.then((res) => res.text())
			.then((data) => data);
	},
	fetchMath: async (number) => {
		console.log("fetchMath");
		return fetch(`${BASE_URL}/${number}/math`)
			.then((res) => res.text())
			.then((data) => data);
	},
	fetchDate: async (month, day) => {
		return fetch(`${BASE_URL}/${month}/${day}/date`)
			.then((res) => res.text())
			.then((data) => data);
	},
	fetchYear: async (year) => {
		return fetch(`${BASE_URL}/${year}/year`)
			.then((res) => res.text())
			.then((data) => data);
	},
};

export default API;
