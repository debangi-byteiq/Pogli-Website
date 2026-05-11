import React from "react";
import { BrainCircuit } from "lucide-react";

const LeftSection = () => {
	return (
		
		<section className="relative bg-[#f5f5f5] py-8 px-6 md:px-12 overflow-hidden pt-20">
			{/* Background Circle Shapes */}
			<div className="absolute top-[-180px] right-[-180px] w-[500px] h-[500px] bg-[#dfe3f2] rounded-full opacity-80" />

			<div className="absolute bottom-[-180px] left-1/3 w-[320px] h-[320px] bg-[#dfe3f2] rounded-full opacity-70" />

			{/* Main Layout */}
			<div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.6fr_0.8fr] gap-6 items-stretch">
				{/* LEFT SIDE */}
				<div className="relative rounded-md overflow-hidden min-h-[450px]">
					{/* Background Image */}
					<img
						src="/watch-img.jpg"
						alt="process"
						className="absolute inset-0 w-full h-full object-cover"
					/>

					{/* White Overlay */}
					<div className="absolute inset-0 bg-white/88" />

					{/* Content */}
					<div
						className="relative z-10 h-full flex flex-col justify-center px-8 md:px-8 pt-40 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]rounded-md bg-white/70 backdrop-blur-sm"
					>
						<h2 className="text-[#00679a] text-2xl md:text-3xl font-semibold mb-3 leading-tight">
							プロセス主導のアジリティ
						</h2>

						<h3 className="text-[#2f43a0] text-lg font-semibold mb-5">
							妥協なき効率性
						</h3>

						<p className="text-gray-700 text-sm md:text-base leading-[2] max-w-3xl">
							私たちは今、国境を越えて運用する、単一かつ透明性の高い
							「産業品質」のためのフレームワークを構築しています。
							私たちの焦点は「ゼロ・エラー」の哲学にあり、
							ドイツのエンジニアリングが誇る精密さと、
							グローバル金融界のアジャイルな戦略的思考を融合させています。
						</p>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="bg-[#2f3f98] text-white rounded-md px-8 py-10 flex flex-col justify-start shadow-xl">
					{/* Icon */}
					<div className="mb-5">
						<BrainCircuit size={34} className="text-[#27c4ff]" />
					</div>

					{/* Title */}
					<h3 className="text-2xl font-medium mb-5">倫理と誠実</h3>

					{/* Subtitle */}
					<p className="text-lg leading-[1.7] mb-6 font-light">
						あらゆるやり取りにおける 公正さと誠実さ
					</p>

					{/* Description */}
					<p className="text-white/90 text-sm md:text-base leading-[2]">
						透明性は、私たちの事業活動の根幹を成すものです。
						私たちのモットーは、クライアント、パートナー、
						そして従業員に対し、常に揺るぎなく公正かつ誠実であり続けることです。
					</p>
				</div>
			</div>
		</section>
	);
};

export default LeftSection;
