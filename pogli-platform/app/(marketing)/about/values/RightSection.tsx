import React from "react";
import { Globe } from "lucide-react";

const RightSection = () => {
	return (
		<section className="relative bg-[#f5f5f5] py-8 px-4 md:px-8 overflow-hidden pb-20">
			{/* Background Shape */}
			<div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-[#dfe3f2] rounded-full opacity-70" />

			{/* Main Layout */}
			<div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_0.85fr_0.9fr] gap-4 items-stretch">
				{/* LEFT CARD */}
				<div className="bg-[#eef8ff] border border-cyan-100 rounded-md px-5 py-6 shadow-sm">
					{/* Icon */}
					<div className="mb-4">
						<Globe size={28} className="text-[#00679a]" strokeWidth={1.8} />
					</div>

					{/* Title */}
					<h2 className="text-[#2f43a0] text-lg md:text-xl font-semibold mb-4 leading-[1.5]">
						データに裏打ちされた知恵
					</h2>

					{/* Content */}
					<div className="space-y-4 text-gray-700 text-xs md:text-sm leading-[1.9]">
						<p>単なる直感ではなく、事実に基づいた体験を。</p>

						<p>
							私たちは数十年にわたる業界での豊富な経験を有しておりますが、決して「勘」に頼ることはありません。専門知識を駆使して客観的な事実や確固たるデータを的確に読み解き、お客様に提供する価値が、検証可能かつ測定可能であり、正確なものであることを確実にしております。
						</p>
					</div>
				</div>

				{/* CENTER CONTENT */}
				<div className="bg-white rounded-md px-5 py-7 shadow-sm flex flex-col justify-center">
					<h2 className="text-[#00679a] text-lg md:text-xl font-semibold mb-4">
						名に込めた目的
					</h2>

					<h3 className="text-[#2f43a0] text-xl md:text-lg leading-[1.5] font-medium mb-4">
						私たちのアイデンティティは、 私たちの約束です。
					</h3>

					<p className="text-gray-700 text-xs md:text-sm leading-[1.9]">
						私たちの価値観は、単に壁に掲げられたリストに過ぎません。それはむしろ、私たちの社名そのものの根幹に深く織り込まれたものなのです。社名を構成する一文字一文字が、市場に対する私たちの誓いを表しており、それによって、私たちの企業アイデンティティと倫理的基準が完全に一体であることを確かなものにしています。
					</p>
				</div>

				{/* RIGHT IMAGE */}
				<div className="rounded-md overflow-hidden shadow-lg h-[360px]">
					<img
						src="/business-img.jpg"
						alt="business"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default RightSection;
