"use client";

import React from "react";
import { Mail, Link as LinkIcon } from "lucide-react";

const RightSection = () => {
	return (
		<section className="relative bg-white py-25 px-6 md:px-20 overflow-hidden">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
				{/* Background Circle */}
				<div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#dfe3ff]/60"></div>
				{/* LEFT IMAGE */}

				{/* RIGHT CONTENT */}
				<div className="pt-5">
					{/* Heading */}
					<h2 className="text-4xl md:text-5xl font-semibold text-[#2f43a0] mb-3">
						Yash Malhotra
					</h2>

					<p className="uppercase tracking-[3px] text-cyan-700 text-lg mb-10">
						CHIEF STRATEGY OFFICER
					</p>

					{/* Biography Box */}
					<div className="bg-white border border-gray-200 rounded-2xl px-15 py-10 shadow-sm">
						{/* Biography */}
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							BIOGRAPHY
						</h3>

						<p className="text-gray-700 leading-[2] text-sm mb-5">
							デジタルトランスフォーメーション（DX）と業務効率化のスペシャリスト。
							フォーチュン500企業を対象に、テクノロジーを基盤とした組織改革を推進してきました。
							実践的かつ持続可能なイノベーションの導入において高い評価を得ています。
						</p>

						{/* Message */}
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							MESSAGE
						</h3>

						<div className="border-l-[5px] border-[#2f43a0] pl-6">
							<p className="text-gray-700 text-sm leading-[2]">
								The most resilient strategies are those that can adapt to
								cultural nuances without losing their core purpose.
							</p>
						</div>
					</div>

					{/* Icons */}
					<div className="flex gap-6 mt-8 text-[#2f43a0] ml-[83%]">
						<button className="hover:scale-110 transition">
							<LinkIcon size={30} />
						</button>

						<button className="hover:scale-110 transition">
							<Mail size={30} />
						</button>
					</div>
				</div>

				<div className="relative z-10">
					<div className="rounded-2xl overflow-hidden shadow-2xl">
						<img
							src="/member-img-3.jpg"
							alt="team-member"
							className="w-full h-[600px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RightSection;
