import React from "react";
import { TrendingUp, Globe, Lightbulb } from "lucide-react";

const CapabilitiesSection = () => {
	const capabilities = [
		{
			title:
				"Sharp Insight into the Connection Between Technology and Business",
			description:
				"We accurately evaluate how technologies translate into real business value, enabling clients to make confident, future-oriented decisions.",
		},
		{
			title: "Extensive and Trusted Network Across India",
			description:
				"Our close relationships with a wide range of Indian partners—spanning manufacturing, design, development, and sales—allow us to build strong, reliable ecosystems tailored to each project.",
		},
		{
			title:
				"Strategic Planning Capabilities to Design Winning Business Scenarios",
			description:
				"We craft practical and compelling business scenarios that turn ideas into executable, scalable new ventures.",
		},
	];

	return (
		// <section className="w-full bg-white py-24 px-6 md:px-20">
		// 	<div className="max-w-7xl mx-auto">
		// 		{/* Heading */}
		// 		<h2 className="text-center text-[#2E3E9E] text-4xl md:text-6xl font-bold leading-tight mb-24">
		// 			Creating New Business
		// 			<br />
		// 			Through Unique Capabilities
		// 		</h2>

		// 		{/* Cards */}
		// 		<div className="grid md:grid-cols-3 gap-16 ml-10">
		// 			{capabilities.map((item, index) => (
		// 				<div key={index}>
		// 					{/* Placeholder Box */}
		// 					<div className="w-28 h-28 bg-gray-300 mb-8"></div>

		// 					{/* Title */}
		// 					<div>
		// 						<h3 className="text-[#2E3E9E] text-2xl font-bold leading-tight mb-8">
		// 							{item.title}
		// 						</h3>
		// 					</div>

		// 					{/* Description */}
		// 					<div className="mt-5">
		// 						<p className="text-black text-lg leading-relaxed">
		// 							{item.description}
		// 						</p>
		// 					</div>
		// 				</div>
		// 			))}
		// 		</div>
		// 	</div>
		//     <h2 className="text-center text-[#2E3E9E] text-3xl md:text-5xl font-bold leading-tight mt-20">
		//             Leveraging these strengths, we create entirely <br /> new business opportunities for our clients.
		//         </h2>
		// </section>
		<section className="bg-white py-14 px-6 md:px-16">
			<div className="max-w-7xl mx-auto text-center">
				{/* Heading */}
				<h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-16">
					独自の能力を活かした新規事業の創出
				</h2>

				{/* 3 Columns */}
				<div className="grid md:grid-cols-3 gap-10 my-20">
					{/* Card 1 */}
					<div className="text-center">
						<div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-200 flex items-center justify-center">
							<TrendingUp className="text-blue-800" size={28} />
						</div>
						<h3 className="text-lg font-semibold mb-3 text-black">
							テクノロジーとビジネスへの鋭い洞察
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
							We accurately evaluate how technologies translate into real
							business value, enabling clients to make confident,
							future-oriented decisions.
						</p>
					</div>

					{/* Card 2 */}
					<div className="text-center">
						<div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-200 flex items-center justify-center">
							<Globe className="text-blue-800" size={28} />
						</div>
						<h3 className="text-lg font-semibold mb-3 text-black">
							インド全土に広がる
							<br />
							広範かつ信頼のネットワーク
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
							Our close relationships with a wide range of Indian
							partners—spanning manufacturing, design, and sales—allow us to
							build strong, reliable ecosystems.
						</p>
					</div>

					{/* Card 3 */}
					<div className="text-center">
						<div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gray-200 flex items-center justify-center">
							<Lightbulb className="text-blue-800" size={28} />
						</div>
						<h3 className="text-lg font-semibold mb-3 text-black">
							戦略策定能力
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
							We craft practical and compelling business scenarios that turn
							ideas into executable, scalable new ventures with proven
							methodologies.
						</p>
					</div>
				</div>

				{/* Bottom CTA Strip */}
				<div className="mt-16">
					<div className="bg-[#2c3f8f] text-white py-6 px-6 rounded-xl text-center text-lg md:text-xl italic">
						Leveraging these strengths, we create entirely
						<br />
						new business opportunities for our clients.
					</div>
				</div>
			</div>
		</section>
	);
};

export default CapabilitiesSection;
