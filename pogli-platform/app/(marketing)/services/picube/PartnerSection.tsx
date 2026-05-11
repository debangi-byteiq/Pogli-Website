"use client";

import React from "react";

const PartnerSection = () => {
	return (
		<section className="bg-[#fff] py-16 px-6 md:px-12">
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				
				{/* LEFT HEADING */}
				<div>
					<h2 className="text-4xl md:text-5xl font-bold leading-[1.25] text-[#2f348f]">
						インドで、<br />
						あなたにぴったりの<br />
						パートナーを見つけましょう
					</h2>
				</div>

				{/* RIGHT CONTENT */}
				<div className="flex flex-col items-start lg:items-end">
					
					<p className="text-gray-700 text-lg leading-[2] max-w-2xl text-left lg:text-right mb-8">
						当社の「P-Icube」フレームワークは、
						技術的な卓越性のみならず、
						長期的な成功に不可欠な文化的・戦略的な
						適合性をも確実なものにします。
						もうパートナー探しに時間を費やすのはやめ、
						あなたのビジョンを真に理解する
						パートナーとの連携を今すぐ始めましょう。
					</p>

					{/* BUTTON */}
					<button className="bg-[#cf171d] hover:bg-[#b91318] text-white px-10 py-4 rounded-md text-lg font-medium shadow-lg transition">
						p-icubeプラットフォームを訪問
					</button>
				</div>
			</div>
		</section>
	);
};

export default PartnerSection;