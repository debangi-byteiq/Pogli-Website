"use client";

import React from "react";

const Hero = () => {
	return (
		<section className="relative h-[90vh] overflow-hidden bg-[#f7f7f7]">
			
			{/* Left Image */}
			<div className="absolute left-0 top-0 w-[40%] h-full">
				<img
					src="/business-bg-1.png"
					alt="business"
					className="w-full h-full object-cover"
				/>

				{/* Dark Overlay */}
			</div>
            
			{/* Center Glass Overlay */}
			<div className="absolute left-[40%] top-0 w-[12%] h-full bg-white/20 backdrop-blur-[2px]" />

			{/* Large Background Text */}
			<h1 className="absolute left-[30%] top-1/2 -translate-y-1/2 text-[140px] font-bold text-white/15 whitespace-nowrap select-none">
				サービス
			</h1>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-end  mt-20">
				
				<div className="max-w-2xl">
					
					{/* Heading */}
					<h2
						className="text-5xl md:text-6xl font-bold text-white mb-10 pl-46"
						style={{
							textShadow: "0 8px 20px rgba(0,0,0,0.4)",
						}}
					>
						新規事業創出
					</h2>

					{/* Description */}
					<p className="text-white/80 text-xl leading-[1.8] max-w-xl">
						データは、正しく解釈されて初めて知見となります。
						私たちは、最先端のAI技術とドメイン知識を融合させ、
						複雑な市場課題に対する解を導き出します。
						理論に裏打ちされた確かな知見を土台に、
						持続可能なエコシステムを構築し、
						未来の社会に不可欠な事業を形にします。
					</p>
				</div>
			</div>
            <div className="absolute inset-0 bg-[#081a4b]/55" />
		</section>
	);
};

export default Hero;