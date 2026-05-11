"use client";

import React from "react";

const solutions = [
	{
		title: "業務効率化ソフトウェア",
		image: "/solution-1.png",
	},
	{
		title: "デジタルマーケティング",
		image: "/solution-2.png",
	},
	{
		title: "システム診断",
		image: "/solution-3.png",
	},
];

const SolutionsSection = () => {
	return (
		<section className="bg-[#f5f5f7] py-14 px-6 md:px-12">
			
			{/* HEADING */}
			<div className="text-center mb-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#2f348f] leading-[1.4]">
					当社のソリューション：デジタル変革の実現
				</h2>

				<div className="w-24 h-[4px] bg-[#0b7b9c] mx-auto rounded-full mt-4"></div>
			</div>

			{/* CARDS */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				
				{solutions.map((item, index) => (
					<div
						key={index}
						className="relative overflow-hidden rounded-2xl shadow-md group"
					>
						
						{/* IMAGE */}
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
						/>

						{/* OVERLAY */}
						<div className="absolute inset-0 bg-gradient-to-t from-[#202a78]/95 via-[#202a78]/30 to-black/40" />

						{/* CONTENT */}
						<div className="absolute bottom-0 left-0 p-6 z-10">
							<h3 className="text-white text-3xl font-bold leading-[1.3] max-w-[240px]">
								{item.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SolutionsSection;