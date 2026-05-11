import { Globe, TrendingUp } from "lucide-react";

const BusinessCards = () => {
	return (
		<section className="bg-[#f5f5f7] py-16 px-6 md:px-23">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
				
				{/* LEFT CARD */}
				<div className="bg-white border border-gray-300 rounded-xl p-10 shadow-sm">
					<div className="w-14 h-7 rounded-full bg-[#0b6d93] flex items-center justify-center mb-6">
						<Globe className="text-white" size={30} />
					</div>

					<h3 className="text-[#2f43a0] text-2xl font-semibold mb-6">
						グローバル拠点
					</h3>

					<p className="text-gray-700 text-lg leading-[1.8]">
						世界12カ国に展開するネットワークを活かした支援。
					</p>
				</div>

				{/* RIGHT CARD */}
				<div className="relative bg-[#006b92] rounded-xl p-10 md:p-14 overflow-hidden">
					
					{/* Arrow Icon */}
					<div className="absolute right-10 bottom-10 opacity-20">
						<TrendingUp className="text-white" size={70} strokeWidth={2} />
					</div>

					<h2 className="text-white text-4xl md:text-3xl font-semibold mb-8 leading-tight">
						次世代のビジネスモデルへ
					</h2>

					<p className="text-white/90 text-xl leading-[2] max-w-3xl">
						デジタルトランスフォーメーションから
						サステナビリティ経営まで、
						時代の要請に応える変革をリードします。
					</p>
				</div>
			</div>
		</section>
	);
};

export default BusinessCards;