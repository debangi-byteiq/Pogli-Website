import React from "react";
import Link from "next/link";

const ChallengeSection = () => {
	return (
		// <section className="w-full bg-gradient-to-b from-[#3F5BFF] to-[#151F69] py-24 px-6">
		// 	<div className="max-w-6xl mx-auto text-center">
		// 		{/* Heading */}
		// 		<h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-16">
		// 			POGLIで課題をまとめて解決して
		// 			<br />
		// 			みませんか？
		// 		</h2>

		// 		{/* Buttons */}
		// 		<div className="flex flex-col md:flex-row justify-center gap-6">
		// 			<button className="bg-[#18A8F2] hover:bg-[#1194d8] text-white text-xl font-semibold px-20 py-5 transition duration-300">
		// 				Materials
		// 			</button>

		// 			<Link href="/contact">
		// 				<button className="border border-white hover:bg-white hover:text-[#151F69] text-white text-xl font-semibold px-20 py-5 transition duration-300">
		// 					Contact Us
		// 				</button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </section>
		<section className="bg-gradient-to-r from-[#243C84] via-[#1F5FA8] to-[#2C7FC1] py-16 text-white text-center">
			<h2 className="text-2xl md:text-4xl font-bold mb-8 leading-snug">
				POGLIで課題をまとめて解決して
				<br />
				みませんか？
			</h2>

			<div className="flex justify-center gap-4">
				{/* Primary Button */}
				<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-13 py-4 rounded-full font-semibold">
					材料
				</button>

				{/* Secondary Button */}
				<button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
					お問い合わせ
				</button>
			</div>
		</section>
	);
};

export default ChallengeSection;
