"use client";

import React from "react";

import {
	Factory,
	PlaneLanding,
	Network,
} from "lucide-react";

const ConsultingCardsSection = () => {
	return (
		<section className="bg-[#f7f7f7] py-6 px-6 md:px-12">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				
				{/* CARD 1 */}
				<div className="bg-white border border-gray-200 rounded-lg p-10 shadow-sm hover:shadow-md transition">
					
					<div className="mb-20">
						<Factory
							size={42}
							strokeWidth={2}
							className="text-[#2f348f]"
						/>
					</div>

					<h3 className="text-xl font-bold text-[#2f348f] leading-[1.5] mb-8">
						製造提案評価および生産性コンサルティング
					</h3>

					<p className="text-gray-700 text-lg leading-[2]">
						データに基づいた分析で、
						製造現場のパフォーマンスと
						運用投資収益率（ROI）を
						最適化します。
					</p>
				</div>

				{/* CARD 2 */}
				<div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#4a58ae] to-[#2f348f] p-10 shadow-lg">
					
					{/* GLOW */}
					<div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-white/10 rounded-full blur-3xl" />

					<div className="relative z-10">
						
						<div className="mb-20">
							<PlaneLanding
								size={42}
								strokeWidth={2}
								className="text-cyan-300"
							/>
						</div>

						<h3 className="text-xl font-bold text-white leading-[1.5] mb-8">
							日本人専門家の短期派遣
						</h3>

						<p className="text-white/80 text-lg leading-[2]">
							技術知識と「ものづくり」の卓越性を、
							お客様の施設へ直接お届けします。
						</p>
					</div>
				</div>

				{/* CARD 3 */}
				<div className="bg-white border border-gray-200 rounded-lg p-10 shadow-sm hover:shadow-md transition">
					
					<div className="mb-20">
						<Network
							size={42}
							strokeWidth={2}
							className="text-[#2f348f]"
						/>
					</div>

					<h3 className="text-xl font-bold text-[#2f348f] leading-[1.5] mb-8">
						官民の利害関係者ネットワーク
					</h3>

					<p className="text-gray-700 text-lg leading-[2]">
						規制当局および主要な業界関係者との
						重要な連携を促進する。
					</p>
				</div>
			</div>
		</section>
	);
};

export default ConsultingCardsSection;