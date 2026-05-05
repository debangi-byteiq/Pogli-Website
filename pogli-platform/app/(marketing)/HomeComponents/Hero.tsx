// "use client";
// import React from "react";

// interface HeroSectionProps {
//   image?: string;
// }

// export default function Hero({ image }: HeroSectionProps) {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden
//                         bg-gradient-to-br from-[#4C5BD4] via-[#3B82F6] to-[#38BDF8] text-white">

//       {/* LEFT CONTENT */}
//       <div className="flex flex-col justify-center h-full px-8 sm:px-16 lg:px-24 max-w-3xl">

//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 pt-59">
//           We Connect Dot!
//         </h1>

//         <p className="text-base sm:text-lg lg:text-2xl text-white/90 max-w-lg mb-10 leading-relaxed pt-7">
//           Pioneering the future of Japan-India business <br />through strategy and technology
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 pt-7">

//           <button className="px-8 py-3 bg-indigo-900 hover:bg-indigo-800
//                              text-white font-medium rounded-md shadow-md
//                              transition-all duration-300">
//             Materials
//           </button>

//           <button className="px-8 py-3 border border-white
//                              text-white font-medium rounded-md
//                              hover:bg-white hover:text-indigo-900
//                              transition-all duration-300">
//             Contact Us
//           </button>

//         </div>
//       </div>

//       {/* FLOATING RIGHT IMAGE */}
//       <div className="hidden lg:block absolute top-16 right-10
//                       w-[50%] h-[95%] bg-gray-300 shadow-xl rounded-sm overflow-hidden mt-10">

//         {image ? (
//           <img
//             src={image}
//             alt="Hero"
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-gray-500">Image placeholder</p>
//           </div>
//         )}
//       </div>

//     </section>
//   );
// }

import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="w-full h-200 bg-gradient-to-r from-[#4A5ACD] to-[#19B5F3] px-6 md:px-12 py-10">
			<div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-5 items-center">
				{/* Left Content */}
				<div className="text-white flex flex-col justify-start h-full ml-40 mt-90">
					<h2 className="text-5xl md:text-6xl font-bold mb-15">
						We Connect Dot!
					</h2>

					<p className="text-xl md:text-2xl leading-relaxed mb-15">
						Pioneering the future of Japan–India business
						<br />
						through strategy and technology
					</p>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="bg-[#253A9B] hover:bg-[#1b2b77] px-14 py-4 text-xl font-semibold transition">
							Materials
						</button>

						<Link href="/contact">
							<button className="border border-white px-14 py-4 text-xl font-semibold hover:bg-white hover:text-[#253A9B] transition">
								Contact Us
							</button>
						</Link>
					</div>
				</div>

				{/* Right Box */}
				<div className="w-full h-[900px] bg-gray-300"></div>
			</div>
		</section>
	);
};

export default Hero;
