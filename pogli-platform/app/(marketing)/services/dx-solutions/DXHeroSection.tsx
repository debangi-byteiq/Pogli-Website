"use client";

import React from "react";

const DXHeroSection = () => {
	return (
		<section className="relative overflow-hidden bg-[#eef4fb] h-[90vh py-10]">
			{/* BACKGROUND SPLIT */}
			<div className="absolute inset-0 flex">
				<div className="w-1/2 bg-[#eef4fb]" />
				<div className="w-1/2 bg-[#dfe9f2]" />
			</div>

			{/* ANGLED SHAPE */}
			<div className="absolute left-[38%] top-0 h-full w-[180px] bg-white/70 skew-x-[-12deg]" />

			<div className="absolute inset-0 bg-white/25 backdrop-blur-[2px] z-[1]" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
					{/* LEFT CONTENT */}
					<div className="max-w-2xl">
						<h1 className="text-4xl md:text-4xl font-bold leading-[1.45] text-[#2f348f] mb-8">
							トータルプロダクトソリューション：
							お客様の成長に合わせたオーダーメイドの
							デジタルトランスフォーメーション（DX）
						</h1>

						<p className="text-gray-700 text-lg leading-[1.9] mb-10 max-w-xl">
							インドのエリートソフトウェアエンジニアの才能と
							日本の精密技術を融合させ、
							お客様のビジネスを未来へと成長させるための
							包括的なデジタルトランスフォーメーション戦略を 提供します。
						</p>

						{/* BUTTONS */}
						<div className="flex flex-wrap gap-4">
							<button className="bg-[#046d94] hover:bg-[#035b7a] text-white px-12 py-4 rounded-md text-lg font-medium shadow-md transition">
								材料
							</button>

							<button className="bg-[#2f348f] hover:bg-[#252a73] text-white px-12 py-4 rounded-md text-lg font-medium shadow-md transition">
								お問い合わせ
							</button>
						</div>
					</div>

				
					<div className="relative flex justify-center">
						{/* Glow */}
						<div className="absolute w-[420px] h-[420px] bg-cyan-100/50 rounded-full blur-3xl" />

						{/* IMAGE */}
						<img
							src="/dx-hero.png"
							alt="DX Illustration"
							className="relative z-10 w-full max-w-[520px] object-contain opacity-90"
						/>

						{/* SCREEN EFFECT */}
						<div className="absolute inset-0 bg-white/25 backdrop-blur-[2px] z-20 rounded-xl" />
					</div>
				</div>
			</div>
		</section>

	);
};

export default DXHeroSection;
