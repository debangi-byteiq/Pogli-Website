"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const BusinessCards = () => {
	return (
		// <section className="bg-[#f5f5f7] py-14 px-6 md:px-12">

		// 	<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

		// 		{/* CARD 1 */}
		// 		<div className="relative bg-white rounded-2xl shadow-md overflow-hidden">

		// 			{/* Top Label */}
		// 			<div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
		// 				<span className="bg-[#3145a0] text-white text-xs px-5 py-2 rounded-md tracking-wide">
		// 					日本企業向け
		// 				</span>
		// 			</div>

		// 			{/* Image */}
		// 			<img
		// 				src="/picube-img-2.png"
		// 				alt="Japan Business"
		// 				className="w-full h-[220px] object-cover"
		// 			/>

		// 			{/* Content */}
		// 			<div className="p-7">
		// 				<h2 className="text-3xl font-bold text-[#24378f] mb-5">
		// 					自信を持って進む
		// 				</h2>

		// 				<p className="text-gray-600 text-base leading-[1.9] mb-8">
		// 					客観的かつデータに基づいた評価を通じて、
		// 					信頼できるインドのパートナーを見つけ出してください。
		// 				</p>

		// 				<button className="flex items-center gap-3 text-[#00679a] text-lg font-medium hover:gap-4 transition-all">
		// 					インドへの事業展開について詳しく知る
		// 					<ArrowRight size={22} />
		// 				</button>
		// 			</div>
		// 		</div>

		// 		{/* CARD 2 */}
		// 		<div className="relative bg-white rounded-2xl shadow-md overflow-hidden">

		// 			{/* Top Label */}
		// 			<div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
		// 				<span className="bg-[#006b92] text-white text-xs px-5 py-2 rounded-md tracking-wide">
		// 					インド企業向け
		// 				</span>
		// 			</div>

		// 			{/* Image */}
		// 			<img
		// 				src="/picube-img-3.png"
		// 				alt="India Business"
		// 				className="w-full h-[220px] object-cover"
		// 			/>

		// 			{/* Content */}
		// 			<div className="p-7">
		// 				<h2 className="text-3xl font-bold text-[#24378f] mb-5">
		// 					あなたの卓越性を披露しましょう
		// 				</h2>

		// 				<p className="text-gray-600 text-base leading-[1.9] mb-8">
		// 					卓越した業務遂行能力と長期的な
		// 					パートナーシップを求める日本企業との連携を実現してください。
		// 				</p>

		// 				<button className="flex items-center gap-3 text-[#00679a] text-lg font-medium hover:gap-4 transition-all">
		// 					世界的な知名度を高める
		// 					<ArrowRight size={22} />
		// 				</button>
		// 			</div>
		// 		</div>

		// 	</div>
		// </section>

		<section className="bg-[#f5f5f7] py-16 px-6 md:px-12">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* CARD 1 */}
				<div className="relative pt-15">
					{/* TOP LABEL */}
					<div className="absolute top-0 left-50 z-20 ">
						<span className="inline-block bg-[#3145a0] text-white text-sm px-5 py-2 rounded-md tracking-wide shadow-md">
							日本企業向け
						</span>
					</div>

					<div className="bg-white rounded-2xl shadow-md overflow-hidden">
						{/* IMAGE */}
						<img
							src="/picube-img-2.png"
							alt="Japan Business"
							className="w-full h-[220px] object-cover"
						/>

						{/* CONTENT */}
						<div className="p-7">
							<h2 className="text-3xl font-bold text-[#24378f] mb-5">
								自信を持って進む
							</h2>

							<p className="text-gray-600 text-base leading-[1.9] mb-8">
								客観的かつデータに基づいた評価を通じて、
								信頼できるインドのパートナーを見つけ出してください。
							</p>

							<button className="flex items-center gap-3 text-[#00679a] text-lg font-medium hover:gap-4 transition-all">
								インドへの事業展開について詳しく知る
								<ArrowRight size={22} />
							</button>
						</div>
					</div>
				</div>

				{/* CARD 2 */}
				<div className="relative pt-15">
					{/* TOP LABEL */}
					<div className="absolute top-0 left-50 z-20 ">
						<span className="inline-block bg-[#3145a0] text-white text-sm px-5 py-2 rounded-md tracking-wide shadow-md">
							インド企業向け
						</span>
					</div>

					<div className="bg-white rounded-2xl shadow-md overflow-hidden">
						{/* IMAGE */}
						<img
							src="/picube-img-3.png"
							alt="India Business"
							className="w-full h-[220px] object-cover"
						/>

						{/* CONTENT */}
						<div className="p-7">
							<h2 className="text-3xl font-bold text-[#24378f] mb-5">
								あなたの卓越性を披露しましょう
							</h2>

							<p className="text-gray-600 text-base leading-[1.9] mb-8">
								卓越した業務遂行能力と長期的な
								パートナーシップを求める日本企業との連携を実現してください。
							</p>

							<button className="flex items-center gap-3 text-[#00679a] text-lg font-medium hover:gap-4 transition-all">
								世界的な知名度を高める
								<ArrowRight size={22} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BusinessCards;
