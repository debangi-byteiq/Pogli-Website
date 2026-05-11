"use client";

import React from "react";

const QuoteSection = () => {
	return (
		<section className="relative h-[90vh] overflow-hidden bg-[#3949ab] py-16 px-6">
			
			{/* Background Shapes */}
			<div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5" />

			<div className="absolute -top-20 right-[-180px] w-[520px] h-[520px] rounded-full bg-white/5" />

			{/* Main Content */}
			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<p className="text-white/95 text-xl md:text-3xl italic leading-[1.5] font-light drop-shadow-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>

			{/* Decorative Shape */}
			<div className="absolute bottom-28 left-1/4 w-24 h-24 rounded-[30px] border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden rotate-12">
				<div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0.15)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.15)_75%)] bg-[length:12px_12px]" />
			</div>

			{/* Dot Grid */}
			<div className="absolute bottom-24 right-1/4 grid grid-cols-6 gap-2 opacity-20">
				{Array.from({ length: 36 }).map((_, index) => (
					<div
						key={index}
						className="w-1.5 h-1.5 rounded-full bg-white"
					/>
				))}
			</div>

			{/* Bottom Curve */}
			<div
				className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[140%] h-[220px] bg-[#f5f5f5]"
				style={{
					borderRadius: "50%",
				}}
			/>
		</section>
	);
};

export default QuoteSection;