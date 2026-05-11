import { ArrowRight } from "lucide-react";
import React from "react";

// const services = [
// 	{
// 		title: "New Business Creation",
// 		description:
// 			"Delivering ‘Turnkey’ Business Models Optimized for the Indian Market. We provide fully developed, ready-to-operate business models tailored to the Indian market.",
// 	},
// 	{
// 		title: "P-Icube",
// 		subtitle: "Japan–India Business Matching Platform",
// 		description:
// 			"Find your ideal partner through our data-driven 9D framework. We visualize trust and ensure the perfect synergy for long-term growth.",
// 	},
// 	{
// 		title: "DX Solutions",
// 		description:
// 			"Tailor-made software development for SMEs. Combining Japanese quality standards with India's elite engineering to optimize your business efficiency.",
// 	},
// 	{
// 		title: "On-Demand Services",
// 		description: null,
// 	},
// ];

const services = [
	{
		title: "New Business Creation",
		desc: `ターンキー型ビジネスモデルを提供します。インド市場向けに最適化された、すぐに運用可能な、完全に開発済みのビジネスモデルを提供することで、お客様が初日から自信を持って事業を立ち上げ、拡大できるよう支援します。`,
	},
	{
		title: "P-lcube",
		descTitle : "JAPAN-INDIA BUSINESS MATCHING",
		desc: `データに基づいた9Dフレームワークで、理想的なパートナーを見つけましょう。私たちは信頼関係を可視化し、日本企業とインド企業間の長期的な成長に向けた完璧なシナジー効果を実現します。`,
	},
	{
		title: "DX Solutions",
		descTitle : "中小企業向けオーダーメイドソフトウェア開発",
		desc: `日本の品質基準とインドのエリートエンジニアリングを融合させ、お客様のビジネス効率とデジタルプレゼンスを最適化します。`,
	},
	{
		title: "On-demand Services",
		desc: `アイデア創出から実行まで、包括的なサポートを提供します。当社独自の技術とデータ駆動型分析を活用し、最適な日印パートナーシップの特定を支援します。`,
	},
];

const ServiceSection = () => {
	return (
		// <section className="w-full bg-[#f5f5f5] py-24 px-6 md:px-20 pb-40">
		// 	<div className="max-w-7xl mx-auto">
		// 		{/* Heading */}
		// 		<h2 className="text-center text-[#2E3E9E] text-5xl md:text-7xl font-bold mb-8">
		// 			Service
		// 		</h2>

		// 		{/* Paragraph */}
		// 		<p className="text-center max-w-4xl mx-auto text-black font-bold text-lg md:text-xl mb-20">
		// 			We provide comprehensive support from idea generation to the creation
		// 			and execution of new businesses by leveraging our expertise in both
		// 			technology and business domains. In addition, we assist in identifying
		// 			the best-fit Japan–India partners through our proprietary technologies
		// 			and data-driven analysis.
		// 		</p>

		// 		{/* Cards */}
		// 		<div className="grid md:grid-cols-2 gap-10 w-210 h-250 mx-auto">
		// 			{services.map((service, index) => (
		// 				<div
		// 					key={index}
		// 					className="rounded-2xl p-10 min-h-[500px] flex flex-col justify-between
		//       bg-gradient-to-b from-[#D9D9D9] via-[#9DA6D8] to-[#2E3E9E]"
		// 				>
		// 					<div>
		// 						<div className="h-25">
		// 							<h3 className="text-white text-5xl font-bold mb-4">
		// 								{service.title}
		// 							</h3>

		// 							{service.subtitle && (
		// 								<h4 className="text-white text-2xl font-semibold mb-6">
		// 									{service.subtitle}
		// 								</h4>
		// 							)}
		// 						</div>

		// 						<p className="text-white text-xl leading-relaxed mt-15">
		// 							{service.description}
		// 						</p>
		// 					</div>

		// 					{/* Bottom Icon */}
		// 					<div className="text-white text-4xl mt-10">↦</div>
		// 				</div>
		// 			))}
		// 		</div>
		// 	</div>
		// </section>
		<section className="bg-gray-100 py-20 px-6 md:px-16">
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-7">
						サービス
					</h2>
					<p className="text-black max-w-2xl mx-auto text-sm md:text-base text-semibold">
						当社は、技術およびビジネスの両領域における専門知識を活かし、アイデア創出から新規事業の構築・実行に至るまで、
						包括的なサポートを提供いたします。
					</p>
				</div>

				{/* Cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((item, index) => (
						<div
							key={index}
							className="group relative rounded-2xl p-10 text-white overflow-hidden
              bg-gradient-to-br from-[#7f8fb0] via-[#4a5fa3] to-[#2c3f8f]
              shadow-md hover:shadow-xl transition duration-300"
						>
							{/* Content */}
							<div className="flex flex-col h-full justify-between">
								<div>
									<h3 className="text-2xl font-semibold mb-4 leading-snug">
										{item.title}
									</h3>
									{item.descTitle && (
										<h4 className="text-sm font-medium mb-3 text-white/90">
											{item.descTitle}
										</h4>
									)}

									<p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">
										{item.desc}
									</p>
								</div>

								{/* Arrow */}
								<div className="mt-6">
									<div className="w-10 h-10 border border-white rounded-md flex items-center justify-center group-hover:bg-white group-hover:text-blue-900 transition">
										<ArrowRight size={18} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
