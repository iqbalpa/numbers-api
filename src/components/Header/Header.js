import React from "react";

const Header = () => {
	return (
		<div className="w-full flex flex-row justify-between items-center h-20 rounded-t-xl">
			<h1 className="pl-8 font-bold text-lg lg:text-xl">IQBALPA</h1>
			<div className="pr-8">
				<a className="m-2 font-semibold hover:text-gray-700 text-lg hover:text-xl lg:text-md lg:hover:text-xl duration-150" href="https://medium.com/@iqbalpa" rel="noreferrer" target="_blank">
					Medium
				</a>
				<a className="m-2 font-semibold hover:text-gray-700 text-lg hover:text-xl lg:text-md lg:hover:text-xl duration-150" href="https://github.com/iqbalpa" rel="noreferrer" target="_blank">
					GitHub
				</a>
				<a className="m-2 font-semibold hover:text-gray-700 text-lg hover:text-xl lg:text-md lg:hover:text-xl duration-150" href="https://kaggle.com/iqbalpahlevi" rel="noreferrer" target="_blank">
					Kaggle
				</a>
				<a className="m-2 font-semibold hover:text-gray-700 text-lg hover:text-xl lg:text-md lg:hover:text-xl duration-150" href="https://linkedin.com/in/iqbalpahlevia" rel="noreferrer" target="_blank">
					LinkedIn
				</a>
			</div>
		</div>
	);
};

export default Header;
