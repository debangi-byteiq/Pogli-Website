import React from "react";
import Image from "next/image";

const profileData = [
	{
		label: "キャリア",
		text: "大手コンサルティングファームにてシニアパートナーを歴任。",
	},
	{
		label: "実績",
		text: "グローバル展開支援、DX戦略策定など50社以上の変革を主導。",
	},
	{
		label: "教育",
		text: "国内外の著名大学にて経営学修士(MBA)を取得。",
	},
	{
		label: "専門性",
		text: "データ駆動型経営、サプライチェーンの最適化に精通。",
	},
	{
		label: "国際経験",
		text: "インド、東南アジア諸国でのプロジェクトリーダーを10年以上務める。",
	},
	{
		label: "言語",
		text: "日本語・英語を自在に操るバイリンガル・リーダー。",
	},
	{
		label: "ビジョン",
		text: "「情報の非対称性を解消し、透明性の高い市場を創る」を掲げる。",
	},
	{
		label: "活動",
		text: "業界団体の理事を務め、後進の育成にも注力。",
	},
	{
		label: "著作",
		text: "「次世代グローバルリーダーの条件」など多数の執筆実績。",
	},
	{
		label: "信念",
		text: "「現場にこそ答えがある」を信条に全国の拠点を巡る。",
	},
];

const Profile = () => {
	return (
		<section className="w-full bg-[#f5f5f5] py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
					{/* LEFT SIDE */}
					<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
						{/* TITLE */}
						<div className="flex items-center gap-4 mb-3">
							<div className="w-6 h-6 rounded-full flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-8 h-8 text-cyan-600"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75a17.933 17.933 0 01-7.5-1.632z"
									/>
								</svg>
							</div>

							<h2 className="text-2xl font-bold text-[#1d3291]">Profile</h2>
						</div>

						{/* PROFILE LIST */}
						<div className="space-y-1">
							{profileData.map((item, index) => (
								<div
									key={index}
									className="flex items-start gap-6 py-3 border-b border-gray-200"
								>
									{/* LABEL */}
									<div className="bg-cyan-50 text-cyan-700 text-sm font-medium px-4 py-2 rounded-md whitespace-nowrap min-w-fit">
										{item.label}
									</div>

									{/* TEXT */}
									<p className="text-sm leading-relaxed text-black text-semibold">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className="space-y-8">
						{/* IMAGE CARD */}
						<div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-[#eadfdf]">
							<Image
								src="/karan-img.png"
								alt="Profile"
								width={700}
								height={850}
								className="w-full h-auto object-cover"
								priority
							/>
						</div>

						{/* INFO CARD */}
						<div className="bg-[#2e3fa9] rounded-2xl p-9 text-white shadow-lg">
							<h3 className="text-2xl font-semibold mb-5">熊谷 雅史</h3>

							<p className="text-cyan-300 text-lg mb-8">
								Karun Malhotra | カルーン・マルホトラ
							</p>

							<p className="text-lg leading-relaxed text-gray-100">
								POGLIを創設。日本企業の伝統的な強みと最先端のテクノロジーを融合させ、
								真に価値のあるコンサルティングサービスを提供することを目指しています。
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
