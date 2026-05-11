import { ArrowRight } from "lucide-react";

const blogs = [
	{
		id: 1,
		tag: "Business",
		date: "2024.05.20",
		title: "日印連携による新規事業の可能性",
		subtitle:
			"Unlocking New Business Opportunities Through Indo-Japan Collaboration",
		desc: "インドのITリソースと日本の製造技術を融合させることで、これまでにない革新的な価値を創出する。",
		img: "/blog-1.png",
	},
	{
		id: 2,
		tag: "Technology",
		date: "2024.05.15",
		title: "インド市場の成長と課題",
		subtitle: "India’s Market Growth and Challenges in 2024",
		desc: "急速なデジタル化が進むインド市場において、外資企業が直面する規制やインフラの壁をどう乗り越えるか。",
		img: "/blog-2.png",
	},

	{
		id: 3,
		tag: "Collaboration",
		date: "2024.05.10",
		title: "POGLIのエコシステムとは？",
		subtitle: "Inside POGLI’s Business Ecosystem for Global Success",
		desc: "POGLIが提供するプラットフォームが、どのように企業の海外進出を包括的にサポートしているの",
		img: "/blog-3.jpg",
	},
	{
		id: 4,
		tag: "DX",
		date: "2024.05.05",
		title: "製造業DXの未来",
		subtitle: "The Future of Manufacturing DX: Trends and Predictions",
		desc: "スマートファクトリー化が進む中で、AIとデータ分析がいかに生産効率を劇的に改善させるか解説",
		img: "/blog-4.jpg",
	},
];

export default function BlogSection() {
	return (
		// <section className="bg-[#f5f5f5] py-16 px-16">
		// 	<div className="max-w-6xl mx-auto px-30 grid md:grid-cols-2 gap-6">
		// 		{blogs.map((blog) => (
		// 			<div
		// 				key={blog.id}
		// 				className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
		// 			>
		// 				<img
		// 					src={blog.img}
		// 					alt={blog.title}
		// 					className="w-full h-[260px] object-cover"
		// 				/>

		// 				<div className="p-6 space-y-5">
		// 					{/* Top */}
		// 					<div className="flex items-center gap-4 text-sm text-[#005ca8]">
		// 						<span className="bg-[#e8f2fb] text-black px-3 py-1 rounded-md font-semibold">
		// 							{blog.tag}
		// 						</span>

		// 						<span className="text-black font-medium">
		// 							{blog.date}
		// 						</span>
		// 					</div>

		// 					{/* Content */}
		// 					<div className="space-y-3">
		// 						<h2 className="text-[34px] font-bold text-black leading-tight">
		// 							{blog.title}
		// 						</h2>

		// 						<h3 className="text-black font-semibold text-xl leading-relaxed">
		// 							{blog.subtitle}
		// 						</h3>

		// 						<p className="text-gray-600 text-lg leading-9">
		// 							{blog.desc}
		// 						</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		))}

		//         <div className="flex justify-center mt-14">
		// 			<button className="bg-[#3343aa] hover:bg-[#25338f] text-white text-2xl font-medium px-14 py-5 rounded-full transition-all duration-300 flex items-center gap-3">
		// 				もっと見る / Load More
		// 				<span className="text-3xl">→</span>
		// 			</button>
		// 		</div>
		// 	</div>
		// </section>
		<section className="bg-[#f5f5f5] py-16">
			<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
				{blogs.map((blog) => (
					<div
						key={blog.id}
						className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
					>
						<img
							src={blog.img}
							alt={blog.title}
							className="w-full h-[260px] object-cover"
						/>

						<div className="p-6 space-y-5">
							{/* Top */}
							<div className="flex items-center gap-4 text-sm text-[#005ca8]">
								<span className="bg-[#e8f2fb] text-[#005ca8] px-3 py-1 rounded-md font-semibold">
									{blog.tag}
								</span>

								<span className="text-gray-500 font-medium">{blog.date}</span>
							</div>

							{/* Content */}
							<div className="space-y-3">
								<h2 className="text-[34px] font-bold text-black leading-tight">
									{blog.title}
								</h2>

								<h3 className="text-[#005ca8] font-semibold text-xl leading-relaxed">
									{blog.subtitle}
								</h3>

								<p className="text-gray-600 text-lg leading-9">{blog.desc}</p>
							</div>
						</div>
					</div>
				))}

				
			</div>
			<div className="flex justify-center mt-8">
					<button className="flex items-center gap-2 bg-[#2c3f8f] hover:bg-[#24357a] text-white px-6 py-3 rounded-full font-medium transition">
						もっと見る / Load More
						<ArrowRight size={18} />
					</button>
				</div>
		</section>
	);
}
