import React from "react";

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
		<section className="w-full bg-white py-24 px-6 md:px-20">
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<h2 className="text-center text-[#2E3E9E] text-4xl md:text-6xl font-bold leading-tight mb-24">
					Creating New Business
					<br />
					Through Unique Capabilities
				</h2>

				{/* Cards */}
				<div className="grid md:grid-cols-3 gap-16 ml-10">
					{capabilities.map((item, index) => (
						<div key={index}>
							{/* Placeholder Box */}
							<div className="w-28 h-28 bg-gray-300 mb-8"></div>

							{/* Title */}
							<div>
								<h3 className="text-[#2E3E9E] text-2xl font-bold leading-tight mb-8">
									{item.title}
								</h3>
							</div>

							{/* Description */}
							<div className="mt-5">
								<p className="text-black text-lg leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
            <h2 className="text-center text-[#2E3E9E] text-3xl md:text-5xl font-bold leading-tight mt-20">
                    Leveraging these strengths, we create entirely <br /> new business opportunities for our clients.
                </h2>
		</section>
	);
};

export default CapabilitiesSection;
