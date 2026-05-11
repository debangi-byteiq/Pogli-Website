import { Lightbulb, Users } from "lucide-react";

const MissionSection = () => {
	return (
		<section className="bg-[#f5f5f7]  py-5 px-2 md:px-20">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

				{/* LEFT CARD */}
				<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#4956a8] to-[#3c4a99] px-10 md:px-14 py-8 text-white">

					{/* Glow Effect */}
					<div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl" />

					<div className="relative z-10 pr-45">

						{/* Icon */}
						<div className="mb-8">
							<Lightbulb
								size={38}
								strokeWidth={1.8}
								className="text-[#c9d0ff]"
							/>
						</div>

						{/* Heading */}
						<h2 className="text-4xl md:text-4xl font-light mb-5 text-white">
							私たちのミッション
						</h2>

						{/* Description */}
						<p className="text-white/75 text-lg leading-[2] max-w-4xl">
							複雑化するグローバル経済において、
							クライアントの可能性を最大化し、
							確かな未来を共創すること。
							私たちは、データに基づいた客観性と、
							人間にしかできない創造的なインサイトを融合させます。
						</p>
					</div>
				</div>

				{/* RIGHT CARD */}
				<div className="bg-white border border-gray-300 rounded-xl px-10 py-12 shadow-sm">

					{/* Icon */}
					<div className="mb-6">
						<Users
							size={40}
							strokeWidth={1.8}
							className="text-[#006b92]"
						/>
					</div>

					{/* Title */}
					<h3 className="text-[#2f43a0] text-3xl font-medium mb-6">
						エキスパート
					</h3>

					{/* Text */}
					<p className="text-gray-700 text-xl leading-[1.9]">
						多様なバックグラウンドを持つ
						プロフェッショナルが集結しています。
					</p>
				</div>
			</div>
		</section>

		
	);
};

export default MissionSection;
