"use client";

import React from "react";
import { Users, Headphones } from "lucide-react";

const TalentSection = () => {
	return (
		<section className="bg-[#f7f7f7] py-4 px-6 md:px-12">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
				
				{/* LEFT CARD */}
				<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#4a58ae] to-[#2c3b8f] p-10 md:p-12 shadow-lg">
					
					{/* GLOW */}
					<div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] bg-white/10 rounded-full blur-3xl" />

					<div className="relative z-10">
						
						{/* ICON */}
						<div className="mb-8">
							<Users
								size={38}
								strokeWidth={2}
								className="text-cyan-300"
							/>
						</div>

						{/* TITLE */}
						<h2 className="text-2xl md:text-3xl font-bold text-white leading-[1.4] mb-28">
							経営人材の採用とオンボーディング
						</h2>

						{/* TEXT */}
						<p className="text-white/80 text-lg leading-[2] max-w-xl">
							多様な地域にまたがるチームを率いるための、
							文化的な理解力と高いリーダーシップ能力を備えた
							人材を発掘し、組織に統合する。
						</p>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm flex flex-col justify-between">
					
					<div>
						{/* ICON */}
						<div className="mb-8">
							<Headphones
								size={42}
								strokeWidth={2}
								className="text-[#2f348f]"
							/>
						</div>

						{/* TITLE */}
						<h3 className="text-2xl font-bold text-[#2f348f] leading-[1.5] mb-8">
							エグゼクティブアシスタントトレーニング
						</h3>

						{/* TEXT */}
						<p className="text-gray-700 text-lg leading-[2]">
							グローバルな企業基準に適合するよう、
							重要なサポート業務を専門化する。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TalentSection;