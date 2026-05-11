"use client";

import React from "react";
import { BarChart3, ShieldCheck } from "lucide-react";

const GrowthBarrierSection = () => {
	return (
		<section className="bg-[#f7f7f7] py-16 px-6 md:px-12">
			<div className="max-w-6xl mx-auto">
				
				{/* HEADING */}
				<div className="text-center mb-8">
					<h2 className="text-4xl md:text-4xl font-bold text-[#2f348f] mb-8">
						成長への障壁を取り除く
					</h2>

					<div className="w-24 h-[4px] bg-[#0a789c] mx-auto rounded-full mb-6" />

					<p className="text-gray-700 text-lg leading-[2] max-w-3xl mx-auto mb-15">
						私たちは、日印間のビジネス関係を阻む2つの重大な課題—
						「情報の隔たり」と「信頼の欠如」—
						を解決します。
					</p>
				</div>

				{/* CARDS */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					
					{/* CARD 1 */}
					<div className="bg-white border border-gray-200 rounded-md p-8 shadow-sm">
						
						<div className="mb-4">
							<BarChart3
								size={32}
								strokeWidth={2}
								className="text-[#046d94]"
							/>
						</div>

						<h3 className="text-2xl font-bold text-[#2f348f] mb-4">
							情報のギャップ
						</h3>

						<p className="text-gray-700 text-sm leading-[2]">
							生データは、それだけではインテリジェンスにはなり得ません。
							私たちは、断片化した市場情報を、
							戦略的な意思決定を推進する
							「行動につながる視覚的なインサイト」
							へと変換します。
						</p>
					</div>

					{/* CARD 2 */}
					<div className="bg-white border border-gray-200 rounded-md p-8 shadow-sm">
						
						<div className="mb-4">
							<ShieldCheck
								size={32}
								strokeWidth={2}
								className="text-[#046d94]"
							/>
						</div>

						<h3 className="text-2xl font-bold text-[#2f348f] mb-4">
							信頼の欠如
						</h3>

						<p className="text-gray-700 text-sm leading-[2]">
							厳格な「9D-Lens」評価を通じて
							パートナーの運用および倫理基準を検証し、
							絶対的な信頼に基づく基盤を確立いたします。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GrowthBarrierSection;