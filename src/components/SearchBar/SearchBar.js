import React, { useState } from "react";
import Card from "../Card/Card";
import API from "../../api/API";

const SearchBar = () => {
	const [value, setValue] = useState("");
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [type, setType] = useState("trivia");

	const selectedFunction = () => {
		switch (type) {
			case "math":
				return API.fetchMath(value);
			case "year":
				return API.fetchYear(value);
			case "date":
				const [month, day] = value.split("/");
				return API.fetchDate(month, day);
			default:
				return API.fetchTrivia(value);
		}
	};

	const handleChange = (e) => setValue(e.target.value);
	const handleTypeChange = (e) => setType(e.target.value);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);

		if (type !== "date" && isNaN(value)) {
			setError(true);
			setLoading(false);
			setData(null);
			alert("not a number");
			return;
		}

		selectedFunction()
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="flex pb-20 lg:pb-0 h-full lg:h-min flex-col justify-center items-center">
			<div className="flex flex-col lg:flex-row justify-center items-center">
				<form className="flex flex-col justify-center items-center text-white">
					<select value={type} name="type" onChange={handleTypeChange} className="select select-bordered w-36 px-4 py-2 rounded-md">
						<option value="trivia">Trivia</option>
						<option value="math">Math</option>
						<option value="year">Year</option>
						<option value="date">Date</option>
					</select>
				</form>
				<form className="w-screen px-5 lg:w-[34rem] m-3 lg:m-6" onSubmit={handleSubmit}>
					<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div class="relative">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter the number"
							value={value}
							onChange={handleChange}
							required
						/>
						<button
							type="submit"
							class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search
						</button>
					</div>
				</form>
			</div>
			<div>
				{loading && (
					<button
						type="button"
						class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-500 hover:bg-blue-400 transition ease-in-out duration-150 cursor-not-allowed"
						disabled=""
					>
						<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Loading...
					</button>
				)}
				{error && (
					<div className="alert alert-error shadow-lg">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span>Something went wrong.</span>
						</div>
					</div>
				)}
				{!loading && data && <Card number={value} data={data} />}
			</div>
		</div>
	);
};

export default SearchBar;
