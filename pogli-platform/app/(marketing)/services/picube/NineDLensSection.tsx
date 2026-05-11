"use client";

import React from "react";

import {
	ShieldCheck,
	BarChart3,
	Building2,
	Settings,
	Lightbulb,
	Handshake,
	TrendingUp,
	Users,
	Factory,
	CheckCircle2,
} from "lucide-react";

const NineDLensSection = () => {
	const items = [
		{ icon: BarChart3, label: "FINANCE" },
		{ icon: Users, label: "LEADERSHIP" },
		{ icon: Building2, label: "GEOPRESENCE" },

		{ icon: ShieldCheck, label: "ESG" },
		{ icon: CheckCircle2, label: "9D", active: true },
		{ icon: Settings, label: "VALUATION" },

		{ icon: TrendingUp, label: "PRODUCTS" },
		{ icon: Lightbulb, label: "RATINGS" },
		{ icon: Handshake, label: "CUSTOMER" },
	];

	return (
		<section className="relative overflow-hidden bg-[#26367D] py-16 px-6 md:px-12">
			
			{/* BACKGROUND SHAPE */}
			<div className="absolute right-0 top-0 w-[30%] h-full bg-white/[0.03] skew-x-[-10deg]" />

			<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
				
				{/* LEFT CONTENT */}
				<div className="max-w-lg">
					<h2 className="text-3xl md:text-3xl font-bold text-white leading-[1.2] mb-8">
						9Dレンズ・アセスメントの力
					</h2>

					<p className="text-white/85 text-lg leading-[2] mb-10 max-w-2xl">
						貸借対照表の枠を超えた、
						包括的な「ビジネス・ヘルスチェック」。
						最適なパートナーマッチングを実現するため、
						組織の健全性を構成する9つの重要指標を分析します。
					</p>

					{/* FEATURES */}
					<div className="grid grid-cols-2 gap-y-5 gap-x-10 mb-10">
						
						<div className="flex items-start gap-3">
							<CheckCircle2
								size={24}
								className="text-cyan-400 mt-1"
							/>

							<p className="text-white text-lg">
								検証済みオペレーション
							</p>
						</div>

						<div className="flex items-start gap-3">
							<CheckCircle2
								size={24}
								className="text-cyan-400 mt-1"
							/>

							<p className="text-white text-lg">
								文化的整合性
							</p>
						</div>

						<div className="flex items-start gap-3">
							<CheckCircle2
								size={24}
								className="text-cyan-400 mt-1"
							/>

							<p className="text-white text-lg">
								拡張性の可能性
							</p>
						</div>

						<div className="flex items-start gap-3">
							<CheckCircle2
								size={24}
								className="text-cyan-400 mt-1"
							/>

							<p className="text-white text-lg">
								データ成熟度
							</p>
						</div>
					</div>

					{/* BUTTON */}
					<button className="bg-cyan-400 hover:bg-cyan-300 text-[#163b72] px-10 py-4 rounded-md text-lg font-semibold shadow-lg transition">
						評価フレームワークを探す
					</button>
				</div>

				{/* RIGHT GRID */}
				<div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
					
					<div className="grid grid-cols-3 gap-4">
						{items.map((item, index) => {
							const Icon = item.icon;

							return (
								<div
									key={index}
									className={`h-[170px] rounded-md flex flex-col items-center justify-center transition
										${
											item.active
												? "bg-white text-[#2f3d97]"
												: "bg-white/[0.06] text-white"
										}
									`}
								>
									<Icon
										size={32}
										strokeWidth={2}
										className="mb-5"
									/>

									<p className="text-sm font-semibold tracking-wide">
										{item.label}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NineDLensSection;