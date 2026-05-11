import {
	Building2,
	MapPin,
	ExternalLink,
} from "lucide-react";

const CompanyOverview = () => {
	return (
		<section className="bg-[#f5f5f7] py-16 px-6 md:px-12">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10">

				{/* LEFT IMAGE PANEL */}
				<div className="relative overflow-hidden rounded-xl min-h-[950px]">
					
					{/* Background Image */}
					<img
						src="/company-overview-img.jpg"
						alt="office"
						className="absolute inset-0 w-full h-full object-cover"
					/>

					{/* Dark Overlay */}
					<div className="absolute inset-0 bg-[#132a7a]/75" />

					{/* Content */}
					<div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-14 text-white">
						
						<h2 className="text-5xl md:text-5xl leading-[1.25] font-light mb-10 font-bold">
							未来を形にする、
							<br />
							戦略的パートナー
							<br />
							シップ。
						</h2>

						<p className="text-white/75 text-lg leading-[2] max-w-xl">
							戦略的な洞察力と実行力で、
							企業の持続的な成長を支援する
							グローバル・パートナーシップ。
						</p>
					</div>
				</div>

				{/* RIGHT CONTENT */}
				<div className="flex flex-col">

					{/* HEADING */}
					<div className="flex items-start gap-5 mb-10">
						
						<div className="w-[5px] h-[125px] bg-[#2f43a0]" />

						<div>
							<h2 className="text-4xl font-semibold text-[#2f43a0] mb-5">
								会社概要
							</h2>

							<p className="text-gray-600 text-lg leading-[1.8]">
								POGLI Consulting Groupは、
								世界トップクラスの専門知識と、
								ローカルな市場ニーズを融合させた
								独自のアプローチを提供します。
							</p>
						</div>
					</div>

					{/* COMPANY NAME */}
					<div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-8">
						
						<div className="flex items-start gap-5">
							
							<Building2
								size={30}
								className="text-[#006b92] mt-1"
							/>

							<div>
								<p className="text-gray-400 text-lg mb-2">
									商号
								</p>

								<h3 className="text-[#2f43a0] text-2xl font-medium">
									POGLI コンサルティング株式会社
								</h3>
							</div>
						</div>
					</div>

					{/* ADDRESS */}
					<div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-8">
						
						<div className="flex items-start gap-5">
							
							<MapPin
								size={30}
								className="text-[#006b92] mt-1"
							/>

							<div>
								<p className="text-gray-400 text-lg mb-2">
									本社所在地
								</p>

								<p className="text-gray-700 text-xl leading-[1.8]">
								    100-0005 
									<br />
									丸の内ビルディング 24階
								</p>
							</div>
						</div>
					</div>

					{/* SMALL CARDS */}
					<div className="grid grid-cols-2 gap-5 mb-12">
						
						<div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
							<p className="text-gray-400 text-lg mb-4">
								設立
							</p>

							<h3 className="text-[#2f43a0] text-2xl font-semibold">
								2010年 4月
							</h3>
						</div>

						<div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
							<p className="text-gray-400 text-lg mb-4">
								資本金
							</p>

							<h3 className="text-[#2f43a0] text-2xl font-semibold">
								5,000万円
							</h3>
						</div>
					</div>

					{/* MAP HEADER */}
					<div className="flex items-center justify-between mb-5">
						
						<h2 className="text-2xl font-bold text-[#2f43a0]">
							アクセスマップ
						</h2>

						<button className="flex items-center gap-2 text-[#006b92] text-xl font-medium hover:opacity-80 transition">
							Google Maps
							<ExternalLink size={20} />
						</button>
					</div>

					{/* MAP */}
					<div className="overflow-hidden rounded-2xl border-[4px] border-[#3b2ea3] shadow-lg">
						<img
							src="/map.jpg"
							alt="map"
							className="w-full h-[420px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CompanyOverview;