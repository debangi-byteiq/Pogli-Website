"use client";

import React from "react";
import { BadgeCheck, Network, Gauge, Shield } from "lucide-react";

const PartnershipSection = () => {
	return (
		<section className="bg-[#fff] py-16 px-6 md:px-12">
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 items-start">
				{/* LEFT SIDE */}
				<div className="pt-15">
					<h2 className="text-4xl md:text-3xl font-bold text-[#27348b] leading-[1.3] mb-3">
						なぜ当社と提携すべき
						<br />
						なのか？
					</h2>

					<p className="text-gray-600 text-lg leading-[1.9] mb-4">
						当社のパートナーシップモデルは、 透明性、卓越した技術力、
						そして長期的な戦略的成功への コミットメントに基づいています。
					</p>

					{/* CERTIFICATION CARD */}
					<div className="bg-white border-l-4 border-[#0b7b9c] shadow-sm rounded-r-xl px-2 py-3 flex items-center gap-4">
						<div className="w-10 h-5 rounded-xl bg-[#eef7fb] flex items-center justify-center">
							<BadgeCheck size={30} className="text-[#0b7b9c]" />
						</div>

						<div>
							<h4 className="text-[#27348b] text-xl font-semibold">
								ISO 9001 CERTIFIED
							</h4>

							<p className="text-gray-500 text-sm">
								Global Standard Compliance
							</p>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className="space-y-5">
					{/* CARD 1 */}
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-7 py-7 flex gap-5 items-start">
						<div className="w-15 h-15 rounded-xl bg-[#2f348f] flex items-center justify-center shrink-0">
							<Network size={25} className="text-white" />
						</div>

						<div>
							<h3 className="text-2xl font-bold text-[#27348b] mb-3">
								統合されたエコシステム
							</h3>

							<p className="text-gray-600 text-base leading-[1.9]">
								私たちは単に部品を製造するだけでなく、
								企業全体で相互に連携する包括的なシステムを設計します。
							</p>
						</div>
					</div>

					{/* CARD 2 */}
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-7 py-7 flex gap-5 items-start">
						<div className="w-15 h-15 rounded-xl bg-[#006b92] flex items-center justify-center shrink-0">
							<Gauge size={25} className="text-white" />
						</div>

						<div>
							<h3 className="text-2xl font-bold text-[#27348b] mb-3">
								迅速な配送
							</h3>

							<p className="text-gray-600 text-base leading-[1.9]">
								アジャイル開発手法とインドの開発スピードを活用し、
								ハイエンドソリューションをより迅速に市場へ投入します。
							</p>
						</div>
					</div>

					{/* CARD 3 */}
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-7 py-7 flex gap-5 items-start">
						<div className="w-15 h-15 rounded-xl bg-[#1f1d6b] flex items-center justify-center shrink-0">
							<Shield size={25} className="text-white" />
						</div>

						<div>
							<h3 className="text-2xl font-bold text-[#27348b] mb-3">
								戦略的安全保障
							</h3>

							<p className="text-gray-600 text-base leading-[1.9]">
								当社のエンジニアリングおよびソフトウェアアーキテクチャのあらゆる層に、
								機関レベルのセキュリティプロトコルが組み込まれています。
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PartnershipSection;
