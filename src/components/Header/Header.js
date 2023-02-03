import React from "react";

const Header = () => {
	return (
		<div className="w-full flex flex-row justify-between items-center h-20 rounded-t-xl">
			<h1 className="pl-8 font-bold text-xl">IQBALPA</h1>
			<div className="pr-8">
				<a className="m-2 font-semibold" href="https://iqbalpa.wordpress.com" rel="noreferrer" target="_blank">
					Blog
				</a>
				<a className="m-2 font-semibold" href="https://github.com/iqbalpa" rel="noreferrer" target="_blank">
					GitHub
				</a>
				<a className="m-2 font-semibold" href="https://twitter.com/iiiiiiiiiiqbal" rel="noreferrer" target="_blank">
					Twitter
				</a>
			</div>
		</div>
	);
};

export default Header;
