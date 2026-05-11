"use client";

import {
	Factory,
	ShieldCheck,
	Store,
	Users,
	Handshake,
	ShoppingCart,
} from "lucide-react";

export default function FactoryCandidateSection() {
	return (
		<section className="bg-[#f5f5f5] py-16 px-4">

			<div className="max-w-7xl mx-auto">

				{/* HEADING */}
				<div className="text-center mb-10">

					<h2 className="text-[26px] md:text-[40px] font-black text-[#071a37]">
						“世界の工場”の次の候補
					</h2>

					<p className="text-[18px] md:text-[24px] text-gray-600 mt-2">
						The next candidate for factories of the world
					</p>

					<div className="w-16 h-[4px] bg-[#67d3ef] mx-auto mt-5 rounded-full" />
				</div>

				{/* CARD */}
				<div className="grid lg:grid-cols-2 rounded-[22px] overflow-hidden shadow-xl">

					{/* LEFT */}
					<div className="relative bg-[#f3f3f3] p-8">

						<img
							src="/china-factory.jpg"
							alt="China"
							className="absolute inset-0 w-full h-full object-cover opacity-10"
						/>

						<div className="relative z-10">

							<div className="flex items-center gap-3 mb-5">
								<h3 className="text-[34px] font-black text-gray-700">
									中国
								</h3>

								<p className="text-[18px] text-gray-500">
									（過去の焦点）
								</p>
							</div>

							<div className="h-[1px] bg-gray-300 mb-7" />

							<div className="space-y-8">

								<div className="flex gap-4">
									<Factory
										size={28}
										className="text-[#566273] mt-1 shrink-0"
									/>

									<div>
										<h4 className="text-[22px] font-bold text-gray-700">
											労働力
										</h4>

										<p className="text-[16px] text-gray-500 mt-1">
											高齢化する労働力、コストの上昇
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<ShieldCheck
										size={28}
										className="text-[#566273] mt-1 shrink-0"
									/>

									<div>
										<h4 className="text-[22px] font-bold text-gray-700">
											政治
										</h4>

										<p className="text-[16px] text-gray-500 mt-1">
											地政学的な摩擦の増加
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<Store
										size={28}
										className="text-[#566273] mt-1 shrink-0"
									/>

									<div>
										<h4 className="text-[22px] font-bold text-gray-700">
											市場規模
										</h4>

										<p className="text-[16px] text-gray-500 mt-1">
											国内消費の飽和
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT */}
					<div className="relative p-8 overflow-hidden">

						<img
							src="/factory-img.jpg"
							alt="India"
							className="absolute inset-0 w-full h-full object-cover"
						/>

						<div className="absolute inset-0 bg-[#0066cc]/75" />

						<div className="relative z-10 text-white">

							<div className="flex items-center gap-3 mb-8">
								<h3 className="text-[34px] font-black">
									インド
								</h3>

								<p className="text-[18px] text-white/80">
									（現在の成長）
								</p>
							</div>

							<div className="space-y-8">

								<div className="flex gap-4">

									<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
										<Users size={24} />
									</div>

									<div>
										<h4 className="text-[22px] font-bold">
											労働力
										</h4>

										<p className="text-[16px] text-white/85 mt-1">
											大規模で若く、英語を話す人材プール
										</p>
									</div>
								</div>

								<div className="flex gap-4">

									<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
										<Handshake size={24} />
									</div>

									<div>
										<h4 className="text-[22px] font-bold">
											政治
										</h4>

										<p className="text-[16px] text-white/85 mt-1">
											安定した民主的統治
										</p>
									</div>
								</div>

								<div className="flex gap-4">

									<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
										<ShoppingCart size={24} />
									</div>

									<div>
										<h4 className="text-[22px] font-bold">
											市場規模
										</h4>

										<p className="text-[16px] text-white/85 mt-1">
											急速に拡大する中間層消費
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}