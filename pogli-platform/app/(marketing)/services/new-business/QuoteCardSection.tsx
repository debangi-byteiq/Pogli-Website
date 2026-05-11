"use client";

import React from "react";

const QuoteCardSection = () => {
	return (
		<section className="bg-[#f5f5f5] px-2 py-3">
			
			<div className="max-w-7xl mx-auto bg-[#f5f5f5] border border-gray-200 rounded-xl shadow-sm overflow-hidden">
				
				<div className="flex">
					
					{/* Left Accent Line */}
					<div className="w-[5px] bg-cyan-400" />

					{/* Content */}
					<div className="flex-1 px-8 md:px-16 py-12">
						<p className="text-center text-black text-lg md:text-2xl italic font-medium leading-[1.7]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default QuoteCardSection;