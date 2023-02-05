import React from "react";

const Header = () => {
	return (
		<div className="w-full flex flex-row justify-between items-center h-20 rounded-t-xl">
			<h1 className="pl-8 font-bold text-lg lg:text-xl">IQBALPA</h1>
			<div className="pr-8">
				<a className="m-2 font-semibold hover:text-gray-700 text-sm hover:text-md lg:text-md lg:hover:text-lg duration-150" href="https://iqbalpa.wordpress.com" rel="noreferrer" target="_blank">
					Blog
				</a>
				<a className="m-2 font-semibold hover:text-gray-700 text-sm hover:text-md lg:text-md lg:hover:text-lg duration-150" href="https://github.com/iqbalpa" rel="noreferrer" target="_blank">
					GitHub
				</a>
				<a className="m-2 font-semibold hover:text-gray-700 text-sm hover:text-md lg:text-md lg:hover:text-lg duration-150" href="https://twitter.com/iiiiiiiiiiqbal" rel="noreferrer" target="_blank">
					Twitter
				</a>
			</div>
		</div>
	);
};

export default Header;
