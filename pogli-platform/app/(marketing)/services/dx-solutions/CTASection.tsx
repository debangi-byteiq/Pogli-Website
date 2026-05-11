"use client";

import React from "react";

const CTASection = () => {
	return (
		<section className="bg-[#343695] py-16 px-6">
			
			<div className="max-w-8xl mx-auto text-center">
				
				{/* HEADING */}
				<h2 className="text-white text-4xl md:text-5xl font-bold leading-[1.4] mb-10">
					信頼できるパートナーと共に、DXの旅を始めましょう
				</h2>

				{/* BUTTONS */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
					
					<button className="bg-[#006b92] hover:bg-[#005978] text-white text-lg px-16 py-5 rounded-md transition-all duration-300 shadow-md">
						材料
					</button>

					<button className="bg-white hover:bg-gray-100 text-[#343695] text-lg px-16 py-5 rounded-md transition-all duration-300 shadow-md">
						お問い合わせ
					</button>
				</div>
			</div>
		</section>
	);
};

export default CTASection;