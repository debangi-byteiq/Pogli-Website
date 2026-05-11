"use client";

import React from "react";

const ExpertiseHeader = () => {
	return (
		<section className="bg-[#f7f7f7] py-14 px-6 md:px-12">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
				
				{/* LEFT */}
				<div className="pt-10">
					<h2 className="text-xl md:text-4xl font-bold text-[#2d348f] leading-tight">
						私たちの専門知識
					</h2>

					<div className="w-28 h-[6px] bg-[#00769a] mt-6 rounded-full"></div>
				</div>

				{/* RIGHT */}
				<div className="pl-29">
					<p className="text-gray-700 text-xl leading-[1.9] max-w-lg">
						成長を加速させ、競争の激しい環境下で持続可能な
						生産性を確保するために設計された、
						カスタマイズされた運用サポート。
					</p>
				</div>

			</div>
		</section>
	);
};

export default ExpertiseHeader;