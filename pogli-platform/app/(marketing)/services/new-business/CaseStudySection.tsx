"use client";

import React from "react";

const caseStudies = [
	{
		id: 1,
		title: "ケーススタディ 1",
		image: "/service-img-1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
	},

	{
		id: 2,
		title: "ケーススタディ 2",
		image: "/service-img-2.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
	},

	{
		id: 3,
		title: "ケーススタディ 3",
		image: "/service-img-3.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
	},
];

const CaseStudySection = () => {
	return (
		<section className="bg-[#f5f5f5] py-12 px-4 md:px-10 overflow-hidden">
			{/* Heading */}
			<div className="text-center mb-17">
				<h2 className="text-3xl md:text-4xl font-bold text-[#04152f] mb-4">
					ケーススタディ
				</h2>

				<div className="w-14 h-[3px] bg-cyan-400 mx-auto rounded-full"></div>
			</div>

			{/* Cards */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-9 items-start">
				{caseStudies.map((item, index) => (
					<div
						key={item.id}
						className={`relative ${index === 1 ? "md:-mt-8" : "md:mt-8"}`}
					>
						{/* Image */}
						<div className="relative overflow-hidden rounded-lg shadow-md">
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-[260px] object-cover"
							/>

							{/* Button */}
							<button className="absolute bottom-0 right-0 bg-[#3949ab] hover:bg-[#2f3f98] text-white px-4 py-2 text-sm font-medium transition">
								ケーススタディを見る
							</button>
						</div>

						{/* Content */}
						<div className="pt-4">
							<h3 className="text-2xl font-semibold text-black mb-3">
								{item.title}
							</h3>

							<p className="text-gray-500 text-lg leading-[1.8]">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Slider Dots */}
			<div className="flex items-center justify-center gap-3 mt-10">
				<div className="w-6 h-2 rounded-full bg-gray-300"></div>

				<div className="w-10 h-2 rounded-full bg-[#3949ab]"></div>

				<div className="w-6 h-2 rounded-full bg-gray-300"></div>
			</div>
		</section>
	);
};

export default CaseStudySection;
