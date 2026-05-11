import React from "react";

const newsData = [
	{
		title: "ニュースのタイトルはこちらです",
		desc: "当社サービスのアップデートに関する最新情報をお知らせします。",
		img: "news-img-1.jpg",
	},
	{
		title: "新サービスリリースのお知らせ",
		desc: "新機能の追加により、より効率的な業務支援が可能になりました。",
		img: "news-img-2.jpg",
	},
];

const blogData = [
	{
		title: "カルンさんの最新ブログタイトルはこちらです",
		desc: "業務効率化のための実践的なヒントをご紹介します。",
		img: "blog-img.jpg",
	},
];

const NewsSection = () => {
	return (
		// <section className="w-full bg-[#f5f5f5] py-7 px-6 md:px-20 pb-25">
		//   <div className="max-w-6xl mx-auto">

		//     {/* Main Heading */}
		//     <h2 className="text-center text-[#2E3E9E] text-5xl md:text-7xl font-bold mb-7">
		//       News
		//     </h2>

		//     {/* News Block */}
		//     <div className="mb-20">
		//       <h3 className="text-[#2E3E9E] text-4xl md:text-5xl font-bold mb-7">
		//         News
		//       </h3>

		//       <div className="space-y-10 ml-25">

		//         {/* News Item 1 */}
		//         <div className="flex items-center gap-10">
		//           <div className="w-28 h-28 bg-gray-300"></div>

		//           <div>
		//             <h4 className="text-[#2E3E9E] text-3xl md:text-4xl font-bold">
		//               Here is the News’ title
		//             </h4>
		//             <p className="text-black text-lg mt-2">
		//               The first short texts shown on this part.
		//             </p>
		//           </div>
		//         </div>

		//         {/* News Item 2 */}
		//         <div className="flex items-center gap-10">
		//           <div className="w-28 h-28 bg-gray-300"></div>

		//           <div>
		//             <h4 className="text-[#2E3E9E] text-3xl md:text-4xl font-bold">
		//               Here is the News’ title
		//             </h4>
		//             <p className="text-black text-lg mt-2">
		//               The first short texts shown on this part.
		//             </p>
		//           </div>
		//         </div>

		//       </div>
		//     </div>

		//     {/* Blog Block */}
		//     <div>
		//       <h3 className="text-[#2E3E9E] text-4xl md:text-5xl font-bold mb-7">
		//         Blog
		//       </h3>

		//       <div className="flex items-center gap-10 ml-25">
		//         <div className="w-28 h-28 bg-gray-300"></div>

		//         <div>
		//           <h4 className="text-[#2E3E9E] text-3xl md:text-4xl font-bold">
		//             Here is Karun san’s latest blog title
		//           </h4>
		//           <p className="text-black text-lg mt-2">
		//             The first short texts shown on this parts.
		//           </p>
		//         </div>
		//       </div>
		//     </div>

		//   </div>
		// </section>
		<section className="bg-gray-100 py-16 px-6 md:px-20">
			<div className="max-w-5xl mx-auto">
				{/* Main Title */}
				<h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-9">
					ニュース
				</h2>

				{/* News Heading */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1 h-6 bg-blue-500"></div>
					<h3 className="text-2xl font-extrabold text-black ">ニュース</h3>
				</div>

				{/* News List */}
				<div className="space-y-6 mb-10">
					{newsData.map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-5 bg-white rounded-xl p-4 hover:shadow-md transition"
						>
							<img
								src={item.img}
								alt="news-image"
								className="w-20 h-20 object-cover rounded-lg"
							/>
							<div>
								<h4 className="font-semibold text-lg mb-1 text-black">{item.title}</h4>
								<p className="text-sm text-gray-600">{item.desc}</p>
							</div>
						</div>
					))}
				</div>

				{/* Blog Heading */}
				<div className="flex items-center gap-3 mb-6">
					<div className="w-1 h-6 bg-blue-500"></div>
					<h3 className="text-2xl font-extrabold text-black">ブログ</h3>
				</div>

				{/* Blog List */}
				<div className="space-y-6">
					{blogData.map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-5 bg-white rounded-xl p-4 hover:shadow-md transition"
						>
							<img
								src={item.img}
								alt=""
								className="w-20 h-20 object-cover rounded-lg"
							/>
							<div>
								<h4 className="font-semibold text-lg mb-1 text-black">{item.title}</h4>
								<p className="text-sm text-gray-600">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
