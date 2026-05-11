"use client";

import React from "react";
import { ShieldCheck, Handshake, Lightbulb } from "lucide-react";

const features = [
	{
		icon: ShieldCheck,
		title: "TRUST",
	},

	{
		icon: Handshake,
		title: "PARTNERSHIP",
	},

	{
		icon: Lightbulb,
		title: "INNOVATION",
	},
];

const PogliSection = () => {
	return (
		<section className="bg-[#f5f5f5] py-10 px-15 md:px-8">
			
			<div className="max-w-5xl mx-auto bg-white rounded-[28px] shadow-md px-20 md:px-12 py-10">
				
				{/* Heading */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#04152f]">
						なぜPOGLIなのか？
					</h2>

					<div className="w-14 h-[3px] bg-cyan-400 mx-auto rounded-full mt-4 mb-8"></div>

					{/* Main Text */}
					<p className="text-gray-700 text-lg md:text-2xl font-semibold leading-[1.7] max-w-3xl mx-auto px-5">
						日印間の架け橋として、確かな信頼とイノベーションを創出します。
						現地に根ざした独自のネットワークと、
						日本の品質基準を融合させたビジネス構築が強みです。
					</p>

					{/* Sub Text */}
					<p className="text-gray-500 text-sm md:text-lg leading-[1.8] max-w-3xl mx-auto mt-8 px-8">
						日本とインドを結ぶ架け橋として、
						私たちは揺るぎない信頼と革新を創造します。
						私たちの強みは、現地のネットワークと日本の品質基準を
						融合させた事業を構築することにあります。
					</p>
				</div>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
					{features.map((item, index) => {
						const Icon = item.icon;

						return (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								
								{/* Icon Box */}
								<div className="w-28 h-28 rounded-[24px] bg-[#3346b0] flex items-center justify-center shadow-lg mb-5">
									<Icon
										size={42}
										strokeWidth={2}
										className="text-white"
									/>
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold tracking-[2px] text-[#04152f]">
									{item.title}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default PogliSection;