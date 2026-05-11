"use client";

import React from "react";
import { Zap, ShieldCheck, GitBranch } from "lucide-react";

const EngineeringBenefits = () => {
	return (
		<section className="bg-white py-14 px-6 md:px-12">
			
			{/* HEADING */}
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-[#2f348f] leading-[1.4]">
					インドのハイエンドエンジニアリングが日本
					<br />
					向けに最適化される
				</h2>

				<div className="w-24 h-[4px] bg-[#0d7896] mx-auto rounded-full mt-5"></div>
			</div>

			{/* CARDS */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				
				{/* CARD 1 */}
				<div className="bg-white border border-gray-100 rounded-2xl px-7 py-10 text-center shadow-sm hover:shadow-md transition">
					
					<div className="w-20 h-20 rounded-2xl bg-[#dfe2ff] flex items-center justify-center mx-auto mb-7">
						<Zap size={34} className="text-[#2f348f]" />
					</div>

					<h3 className="text-2xl font-bold text-[#23256d] mb-5">
						スピードと競争力
					</h3>

					<p className="text-gray-600 text-base leading-[1.9]">
						インドの膨大な人材プールと最適化された
						ワークフロー効率によって実現される、
						迅速な開発サイクル。
					</p>
				</div>

				{/* CARD 2 */}
				<div className="bg-white border border-gray-100 rounded-2xl px-7 py-10 text-center shadow-sm hover:shadow-md transition">
					
					<div className="w-20 h-20 rounded-2xl bg-[#dfe2ff] flex items-center justify-center mx-auto mb-7">
						<ShieldCheck size={34} className="text-[#2f348f]" />
					</div>

					<h3 className="text-2xl font-bold text-[#23256d] mb-5">
						品質保証
					</h3>

					<p className="text-gray-600 text-base leading-[1.9]">
						日本基準の品質管理を、
						エンジニアリングライフサイクルの
						あらゆる段階に統合。
					</p>
				</div>

				{/* CARD 3 */}
				<div className="bg-white border border-gray-100 rounded-2xl px-7 py-10 text-center shadow-sm hover:shadow-md transition">
					
					<div className="w-20 h-20 rounded-2xl bg-[#dfe2ff] flex items-center justify-center mx-auto mb-7">
						<GitBranch size={34} className="text-[#2f348f]" />
					</div>

					<h3 className="text-2xl font-bold text-[#23256d] mb-5">
						戦略的洞察
					</h3>

					<p className="text-gray-600 text-base leading-[1.9]">
						グローバルなテクノロジー動向に対する
						深い理解を、実行可能な地域密着型
						ビジネス戦略へと落とし込む。
					</p>
				</div>

			</div>
		</section>
	);
};

export default EngineeringBenefits;