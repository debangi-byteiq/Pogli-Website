import React from "react";

const services = [
	{
		title: "New Business Creation",
		description:
			"Delivering ‘Turnkey’ Business Models Optimized for the Indian Market. We provide fully developed, ready-to-operate business models tailored to the Indian market.",
	},
	{
		title: "P-Icube",
		subtitle: "Japan–India Business Matching Platform",
		description:
			"Find your ideal partner through our data-driven 9D framework. We visualize trust and ensure the perfect synergy for long-term growth.",
	},
	{
		title: "DX Solutions",
		description:
			"Tailor-made software development for SMEs. Combining Japanese quality standards with India's elite engineering to optimize your business efficiency.",
	},
	{
		title: "On-Demand Services",
		description: null,
	},
];

const ServiceSection = () => {
	return (
		<section className="w-full bg-[#f5f5f5] py-24 px-6 md:px-20 pb-40">
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<h2 className="text-center text-[#2E3E9E] text-5xl md:text-7xl font-bold mb-8">
					Service
				</h2>

				{/* Paragraph */}
				<p className="text-center max-w-4xl mx-auto text-black font-bold text-lg md:text-xl mb-20">
					We provide comprehensive support from idea generation to the creation
					and execution of new businesses by leveraging our expertise in both
					technology and business domains. In addition, we assist in identifying
					the best-fit Japan–India partners through our proprietary technologies
					and data-driven analysis.
				</p>

				{/* Cards */}
				<div className="grid md:grid-cols-2 gap-10 w-210 h-250 mx-auto">
					{services.map((service, index) => (
						<div
							key={index}
							className="rounded-2xl p-10 min-h-[500px] flex flex-col justify-between
              bg-gradient-to-b from-[#D9D9D9] via-[#9DA6D8] to-[#2E3E9E]"
						>
							<div>
								<div className="h-25">
									<h3 className="text-white text-5xl font-bold mb-4">
										{service.title}
									</h3>

									{service.subtitle && (
										<h4 className="text-white text-2xl font-semibold mb-6">
											{service.subtitle}
										</h4>
									)}
								</div>

								<p className="text-white text-xl leading-relaxed mt-15">
									{service.description}
								</p>
							</div>

							{/* Bottom Icon */}
							<div className="text-white text-4xl mt-10">↦</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
