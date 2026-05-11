"use client";

import React from "react";

const StrategyHero = () => {
	return (
		<section className="relative overflow-hidden">
			
			{/* BACKGROUND IMAGE */}
			<div
				className="relative bg-cover bg-center min-h-[620px] flex items-center"
				style={{
					backgroundImage: "url('/city-bg-1.png')",
				}}
			>
				
				{/* BLUE OVERLAY */}
				<div className="absolute inset-0 bg-[#2f3f98]/70"></div>

				{/* CENTER LIGHT STRIP */}
				<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[240px] h-full bg-white/5"></div>

				{/* CONTENT */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-1 w-full">
					
					{/* LABEL */}
					<div className="inline-block bg-[#18b8f2] text-[#08314d] text-sm px-6 py-2 rounded-full mb-8 font-medium">
						グローバル戦略
					</div>

					{/* HEADING */}
					<h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] drop-shadow-lg max-w-9xl mb-8">
						インド市場向け戦略的企業サービス。
					</h1>

					{/* DESCRIPTION */}
					<p className="text-white/90 text-xl leading-[1.9] max-w-xl">
						私たちは、グローバルな専門知識と現地での実行力を融合させ、
						インドの産業・製造業の複雑な状況を乗り越えようとする企業に対し、
						包括的なソリューションを提供します。
					</p>
				</div>
			</div>

			{/* CURVED BOTTOM */}
			<div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[140%] h-[160px] bg-[#f7f7f7] rounded-[50%]"></div>
		</section>
	);
};

export default StrategyHero;