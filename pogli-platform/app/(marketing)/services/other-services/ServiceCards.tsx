"use client";

import React from "react";
import { Layers3, Cog } from "lucide-react";

const ServiceCards = () => {
	return (
		<section className="bg-[#f7f7f7] py-12 px-6   md:px-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
				
				{/* LEFT CARD */}
				<div className="bg-[#006d93] rounded-xl shadow-md px-6  py-6 flex items-start gap-5 max-h-[180px]">
					
					<div className="w-24 h-24 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
						<Layers3 className="text-white" size={42} />
					</div>

					<div className="pt-1">
						<h3 className="text-xl font-bold text-white mb-6">
							AMソリューション
						</h3>

						<p className="text-white/90 text-lg leading-[1.8] max-w-sm">
							先進的な製造技術と導入戦略。
						</p>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6  py-6 flex items-start gap-5 max-h-[180px]">
					
					<div className="w-24 h-24 rounded-2xl bg-[#f1f2fb] flex items-center justify-center shrink-0">
						<Cog className="text-[#2d348f]" size={42} />
					</div>

					<div className="pt-1">
						<h3 className="text-2xl font-bold text-[#2d348f] mb-4">
							エンジニアリングサービス
						</h3>

						<p className="text-gray-600 text-lg leading-[1.8] max-w-sm">
							複雑なインフラストラクチャおよび製品開発に関する
							エンドツーエンドの技術サポート。
						</p>
					</div>
				</div>

			</div>
		</section>
	);
};

export default ServiceCards;