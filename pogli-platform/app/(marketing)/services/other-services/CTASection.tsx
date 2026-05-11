"use client";

import React from "react";

const CTASection = () => {
	return (
		<section className="relative overflow-hidden bg-[#2f3f98] py-28 px-6">
			
			{/* RIGHT SHAPE */}
			<div className="absolute top-0 right-0 w-[28%] h-full bg-[#3d56b2]/50 skew-x-[-18deg] origin-top"></div>

			{/* CURVE TOP */}
			<div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[140%] h-[120px] bg-[#f7f7f7] rounded-[50%]"></div>

			<div className="relative z-10 max-w-5xl mx-auto text-center">
				
				{/* HEADING */}
				<h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.2] mb-8">
					事業範囲を拡大する準備はできていますか？
				</h2>

				{/* DESCRIPTION */}
				<p className="text-white/70 text-lg md:text-xl leading-[1.9] max-w-4xl mx-auto mb-12">
					POGLIと提携することで、インド市場における課題を競争優位性へと転換させる
					専門的な企業コンサルティングを受けることができます。
				</p>

				{/* BUTTONS */}
				<div className="flex flex-wrap justify-center gap-5">
					
					<button className="bg-white text-[#2f3f98] px-10 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-gray-100 transition">
						今すぐ問い合わせる
					</button>

					<button className="border-2 border-white text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-white hover:text-[#2f3f98] transition">
						パンフレットをダウンロード
					</button>
				</div>
			</div>
		</section>
	);
};

export default CTASection;