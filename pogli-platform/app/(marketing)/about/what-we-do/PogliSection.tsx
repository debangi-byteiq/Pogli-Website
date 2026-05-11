import React from "react";
import Image from "next/image";
const values = [
	{
		letter: "P",
		title: "BE PRO - ACTIVE",
		desc: "揺るぎない誠実さと専門性",
	},
	{
		letter: "O",
		title: "BE ORGANIZED",
		desc: "秩序ある戦略と確実な遂行",
	},
	{
		letter: "G",
		title: "EXPRESS GRATITUDE",
		desc: "世界基準の信頼とネットワーク",
	},
	{
		letter: "L",
		title: "BE LEAN",
		desc: "効率的かつ革新的な解決策",
	},
	{
		letter: "I",
		title: "BE INNOVATIVE",
		desc: "効率的かつ革新的な解決策",
	},
];

const PogliSection = () => {
	return (
		<section className="relative overflow-hidden bg-[#262651] pt-40 px-20">
			{/* TOP WHITE CURVE */}
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-40 bg-[#f3f3f3]"
				style={{
					borderBottomLeftRadius: "80% 150%",
					borderBottomRightRadius: "80% 150%",
				}}
			/>

			{/* BACKGROUND SHAPES */}
			<div className="absolute -top-52 -left-52 w-[700px] h-[700px] rounded-full bg-white/[0.04]" />

			<div className="absolute -bottom-72 right-[-200px] w-[850px] h-[850px] rounded-full bg-white/[0.04]" />

			<div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
				{/* LEFT SIDE */}
				<div className="space-y-7 w-full lg:w-[70%] pl-5">
					{values.map((item, index) => (
						<div
							key={index}
							className="bg-white/[0.06]
						border border-white/[0.03]
						backdrop-blur-md
						rounded-md
						px-8
						py-5
						flex
						items-center
						gap-6
						shadow-[0_10px_40px_rgba(0,0,0,0.25)]
						transition-all
						duration-300
						hover:bg-white/[0.08]
					"
						>
							{/* LETTER */}
							<h2 className="text-4xl font-bold text-cyan-400 min-w-[40px]">
								{item.letter}
							</h2>
							{/* TEXT */}
							<div>
								<h3 className="text-white text-sm font-medium">{item.title}</h3>

								<p className="text-gray-400 text-sm mt-1">{item.desc}</p>
							</div>
						</div>
					))}
				</div>

				{/* RIGHT SIDE */}
				<div className="relative flex justify-center items-center min-h-[650px]">
					{/* IMAGE */}
					<div className="relative z-10 w-full max-w-[1000px]">
						<Image
							src="/pogli-img.png"
							alt="POGLI Values"
							width={1200}
							height={900}
							priority
							className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
						/>
					</div>
				</div>
			</div>

			{/* BOTTOM CYAN BORDER */}
			<div className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400" />
		</section>
	);
};

export default PogliSection;
