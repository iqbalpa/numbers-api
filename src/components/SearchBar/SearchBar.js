import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import API from "../../api/API";

const SearchBar = () => {
	const [value, setValue] = useState("");
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (e) => setValue(e.target.value);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (isNaN(value)) {
			setError(true);
			setLoading(false);
			setData(null);
			console.log("not a number");
			return;
		}

		API.fetchMath(value)
			.then((data) => {
				setData(data);
				console.log("data is: ", data);
			})
			.catch((err) => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
				setError(false);
			});
	};

	useEffect(() => {
		console.log("data is: ", data);
	}, [data]);

	return (
		<div className="flex flex-col justify-center items-center">
			<form className="w-[34rem] m-6" onSubmit={handleSubmit}>
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
			<div>
				{loading && (
					<button
						type="button"
						class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-red-500 hover:bg-red-400 transition ease-in-out duration-150 cursor-not-allowed"
						disabled=""
					>
						<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Loading...
					</button>
				)}
				{
					error && (
						<div className="flex justify-center items-center w-[17rem] h-[7rem] text-white font-semibold hover:scale-105 duration-150 bg-red-500 hover:bg-red-700 hover:cursor-pointer rounded-lg">
							<p>Something went wrong...</p>
						</div>
					)
					// <p>Something went wrong...</p>
				}
				{!loading && data && <Card number={value} data={data} />}
			</div>
		</div>
	);
};

export default SearchBar;
