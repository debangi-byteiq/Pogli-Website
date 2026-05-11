import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		
		<section className="w-full h-[90vh] flex relative overflow-hidden">
			{/* LEFT SIDE */}
			<div className="w-[70%] bg-gradient-to-r from-[#08142f] via-[#5f6572] to-[#e8e8f9] flex items-center px-16 relative">
				{/* BIG FADED BACKGROUND TEXT */}
				<h1 className="absolute text-[120px] font-bold text-white/20 right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none">
					私たちの事業内容
				</h1>

				<div className="max-w-2xl space-y-4 z-10 ">
					{/* Heading */}
					<h1 className="text-6xl font-bold leading-tight drop-shadow-xl pl-10">
						私たちの事業内容
					</h1>

					{/* Quote Section */}
					<div className="relative pl-10">
						{/* Vertical Line */}
						<div className="absolute left-0 top-2 h-[85%] w-[3px] bg-blue-500"></div>

						<div className="flex flex-col">
							{/* Opening Quote */}
							<div className="text-9xl text-gray-300 leading-none -mb-6">“</div>

							{/* Text */}
							<p className="text-2xl text-gray-200 leading-relaxed italic tracking-wide px-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</p>

							{/* Closing Quote */}
							<div className="text-9xl text-gray-300 text-right leading-none -mt-6">
								”
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* RIGHT SIDE IMAGE */}
			<div className="w-[30%] absolute right-0 top-0 h-full">
				<Image
					src="/about-hero.jpg"
					alt="Team working"
					fill
					className="object-cover"
					priority
				/>
			</div>
		</section>
	);
};

export default Hero;
