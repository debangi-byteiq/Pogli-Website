"use client";

import React from "react";
import { Rocket, TrendingUp, Users, GitBranch, ArrowRight } from "lucide-react";

const processSteps = [
	{
		icon: GitBranch,
		title: "コンセプト",
		description: "市場分析および\n戦略ロードマップの策定",
	},

	{
		icon: Users,
		title: "パートナー",
		description: "主要な現地パートナー\nの特定と審査。",
	},

	{
		icon: Rocket,
		title: "実行",
		description: "共同事業モデルの実\n施。",
	},

	{
		icon: TrendingUp,
		title: "成長",
		description: "運用規模の拡大と継続的\nな最適化。",
	},
];

const ProcessSection = () => {
	return (
		<section className="relative bg-[#edf5ff] py-10 px-4 md:px-8 overflow-hidden">
			{/* Top Curve */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[10px] bg-[#f5f5f5] rounded-b-[100%]" />

			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-10">
					<h2 className="text-2xl md:text-4xl font-bold text-[#04152f] mb-3">
						私たちのプロセス
					</h2>

					<div className="w-12 h-[3px] bg-cyan-400 mx-auto rounded-full"></div>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
					{processSteps.map((step, index) => {
						const Icon = step.icon;

						return (
							<div key={index} className="relative">
								{/* Arrow */}
								{index !== processSteps.length - 1 && (
									<div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
										<ArrowRight size={24} className="text-[#0065a3]" />
									</div>
								)}

								{/* Card */}
								<div className="bg-white rounded-2xl shadow-md px-4 py-6 text-center min-h-[240px] flex flex-col items-center">
									{/* Icon */}
									<div className="w-18 h-18 rounded-2xl bg-[#0065a3] flex items-center justify-center shadow mb-5">
										<Icon size={28} strokeWidth={2} className="text-white" />
									</div>

									{/* Title */}
									<h3 className="text-xl font-semibold text-[#0065a3] mb-4">
										{step.title}
									</h3>

									{/* Description */}
									<p className="text-gray-700 text-sm leading-[1.7] whitespace-pre-line">
										{step.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
