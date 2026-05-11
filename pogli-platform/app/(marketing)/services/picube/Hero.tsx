// "use client";

// import React from "react";

// const Hero = () => {
// 	return (
// 		<section className="bg-[#f5f5f5] py-16 px-6 md:px-16 ">
			
// 			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

// 				{/* LEFT CONTENT */}
// 				<div className="max-w-xl">

// 					{/* Small Tag */}
// 					<div className="inline-block bg-[#4956a8] text-white text-sm md:text-base px-6 py-3 rounded-2xl mb-8">
// 						日印戦略の架け橋
// 					</div>

// 					{/* Heading */}
// 					<h1 className="text-5xl md:text-7xl font-bold text-[#2f43a0] leading-[1.15] mb-8">
// 						信頼を可視化し、
// 						<br />
// 						成功へと導く。
// 					</h1>

// 					{/* Description */}
// 					<p className="text-gray-700 text-lg md:text-2xl leading-[1.9] mb-10">
// 						高精度なアセスメントと確かな信頼を通じて、
// 						日本の精密さとインドの可能性を結びつける、
// 						究極のデータ駆動型プラットフォーム。
// 					</p>

// 					{/* CTA Button */}
// 					<button className="bg-[#cf1e25] hover:bg-[#b9181e] text-white text-xl md:text-2xl font-semibold px-10 py-5 rounded-2xl transition shadow-lg">
// 						p-icubeプラットフォームを訪問
// 					</button>
// 				</div>

// 				{/* RIGHT IMAGE */}
// 				<div className="relative">
					
// 					<div className="rounded-2xl overflow-hidden shadow-2xl">
// 						<img
// 							src="/business-city.jpg"
// 							alt="business-city"
// 							className="w-full h-[650px] object-cover"
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

"use client";

import React from "react";

const Hero = () => {
	return (
		<section className="bg-white py-10 px-6 md:px-12 h-[85vh]">
			
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-10">

				{/* LEFT CONTENT */}
				<div className="max-w-xl px-15">

					{/* Small Tag */}
					<div className="inline-block bg-[#4956a8] text-white text-xs md:text-sm px-5 py-2 rounded-xl mb-7">
						日印戦略の架け橋
					</div>

					{/* Heading */}
					<h1 className="text-4xl md:text-5xl font-bold text-[#2f43a0] leading-[1.2] mb-7">
						信頼を可視化し、
						<br />
						成功へと導く。
					</h1>

					{/* Description */}
					<p className="text-gray-700 text-base md:text-lg leading-[1.8] mb-7">
						高精度なアセスメントと確かな信頼を通じて、
						日本の精密さとインドの可能性を結びつける、
						データ駆動型プラットフォーム。
					</p>

					{/* CTA Button */}
					<button className="bg-[#cf1e25] hover:bg-[#b9181e] text-white text-base md:text-lg font-semibold px-7 py-3 rounded-xl transition shadow-md">
						p-icubeプラットフォームを訪問
					</button>
				</div>

				{/* RIGHT IMAGE */}
				<div className="relative">
					
					<div className="rounded-2xl overflow-hidden shadow-2xl">
						<img
							src="/picube-bg-1.png"
							alt="business-city"
							className="w-full h-[450px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;