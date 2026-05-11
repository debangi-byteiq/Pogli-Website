"use client";

import React from "react";

const StatsSection = () => {
	const stats = [
		{
			number: "15+",
			label: "経験年数",
		},
		{
			number: "200+",
			label: "グローバルプロジェクト",
		},
		{
			number: "45%",
			label: "効率向上",
		},
		{
			number: "24/7",
			label: "グローバルサポート",
		},
	];

	return (
		<section className="bg-[#343c97] py-10 px-6">
			
			<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
				
				{stats.map((item, index) => (
					<div key={index}>
						
						<h2 className="text-white text-4xl md:text-5xl font-bold mb-3">
							{item.number}
						</h2>

						<p className="text-white/90 text-sm md:text-lg font-medium">
							{item.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default StatsSection;