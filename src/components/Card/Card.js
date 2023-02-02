import React from "react";

const Card = ({ number, data }) => {
	const handleClick = () => {
		document.getElementById("card").classList.add("hidden");
	};

	return (
		<div id="card" class="flex justify-center">
			<div class="block p-6 rounded-lg shadow-lg bg-white max-w-lg">
				<h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{number}</h5>
				<p class="text-gray-700 text-base mb-4">{data}</p>
				<button
					onClick={handleClick}
					type="button"
					class=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
				>
					close
				</button>
			</div>
		</div>
	);
};

export default Card;
