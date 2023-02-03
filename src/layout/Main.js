import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

const Main = () => {
	return (
		<div className="z-10 flex flex-col shadow-2xl rounded-3xl bg-gradient-to-b from-gray-200 to-pink-300 w-full h-full">
			<Header />
			<SearchBar />
		</div>
	);
};

export default Main;
