"use client";

import {
	Users,
	TrendingUp,
	FileUser,
	BarChart3,
} from "lucide-react";

export default function GrowthMarketSection() {
	return (
		<section className="relative overflow-hidden bg-[#2f43b6] py-16 px-4">

			{/* BG SHAPES */}
			<div className="absolute inset-0 overflow-hidden">

				<div className="absolute -top-[220px] -left-[220px] w-[500px] h-[500px] rounded-full bg-white/5" />

				<div className="absolute -top-[180px] -right-[180px] w-[500px] h-[500px] rounded-full bg-white/5" />

				<div className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-white/10" />

				<div className="absolute bottom-6 right-20 grid grid-cols-5 gap-2 opacity-20">
					{Array.from({ length: 25 }).map((_, i) => (
						<div
							key={i}
							className="w-1.5 h-1.5 rounded-full bg-white"
						/>
					))}
				</div>
			</div>

			{/* CONTENT */}
			<div className="relative z-10 max-w-7xl mx-auto">

				{/* HEADING */}
				<div className="text-center mb-10">

					<h2 className="text-[30px] md:text-[44px] font-black text-white">
						世界最大級の成長市場
					</h2>

					<p className="text-[18px] md:text-[24px] text-white/60 font-semibold mt-2">
						世界最大級の成長市場の1つ
					</p>

					<div className="w-16 h-[4px] bg-[#6ee7ff] rounded-full mx-auto mt-5" />
				</div>

				{/* CARDS */}
				<div className="grid md:grid-cols-3 gap-6">

					{/* CARD */}
					<div className="bg-white rounded-[24px] p-8 text-center shadow-xl">

						<div className="w-20 h-20 rounded-full bg-[#eef3fa] flex items-center justify-center mx-auto mb-6">
							<Users size={34} className="text-[#1d68b3]" />
						</div>

						<h3 className="text-[20px] font-bold text-[#1d68b3]">
							1.47 Billion
						</h3>

						<h4 className="text-lg font-black text-[#1d2433] mt-2">
							総人口
						</h4>

						<p className="text-[16px] text-gray-500 mt-4 leading-relaxed">
							世界人口の17〜18%
						</p>
					</div>

					{/* CARD */}
					<div className="bg-white rounded-[24px] p-8 text-center shadow-xl">

						<div className="w-20 h-20 rounded-full bg-[#eef3fa] flex items-center justify-center mx-auto mb-6">
							<TrendingUp
								size={34}
								className="text-[#1d68b3]"
							/>
						</div>

						<h3 className="text-[20px] font-bold text-[#1d68b3]">
							6.4%
						</h3>

						<h4 className="text-lg font-black text-[#1d2433] mt-2">
							実質GDP成長率
						</h4>

						<div className="flex items-end justify-center gap-2 mt-8">
							<div className="w-8 h-8 bg-[#d7e4f2] rounded-sm" />
							<div className="w-8 h-14 bg-[#9fc0df] rounded-sm" />
							<div className="w-8 h-18 bg-[#1d68b3] rounded-sm" />
						</div>
					</div>

					{/* CARD */}
					<div className="bg-white rounded-[24px] p-8 text-center shadow-xl">

						<div className="w-20 h-20 rounded-full bg-[#eef3fa] flex items-center justify-center mx-auto mb-6">
							<FileUser
								size={34}
								className="text-[#1d68b3]"
							/>
						</div>

						<h3 className="text-[20px] font-bold text-[#1d68b3]">
							28 Years
						</h3>

						<h4 className="text-lg font-black text-[#1d2433] mt-2">
							年齢中央値
						</h4>

						<p className="text-[16px] text-gray-500 mt-4 leading-relaxed">
							若く活気のある労働力
							<br />
							人口構成
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}