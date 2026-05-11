import React from "react";
import Link from "next/link";
import { Boxes } from "lucide-react";

const Hero = () => {
	const cards = [1, 2, 3, 4, 5];
	return (
		<section className="bg-gradient-to-r  from-[#2c3f8f] via-[#355aa0] to-[#2c3f8f] text-white py-20 px-6 md:px-16 overflow-hidden">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
				{/* LEFT CONTENT */}
				<div>
					<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
						私たちは、
						<br />
						点と点をつなぐ！
					</h1>

					<p className="text-lg text-white/80 mb-8">
						戦略とテクノロジーを通じて、
						<br />
						日印ビジネスの未来を切り拓く。
					</p>

					{/* Buttons */}
					<div className="flex gap-4">
						<button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold">
							当社の素材
						</button>

						<button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
							お問い合わせ
						</button>
					</div>
				</div>

				{/* RIGHT IMAGE + FLOATING CARDS */}
				<div className="relative">
					{/* Image Container */}
					<div className="rounded-2xl overflow-hidden border border-white/20 ">
						<img
							src="/hero-img-2.jpg" // put your image in public folder
							alt="hero"
							className="w-full h-[440px] object-cover opacity-30 "
						/>
					</div>

					{/* Floating Cards */}
					<div className="hidden md:block absolute top-0 left-1/2 -translate-x-[70%] w-full max-w-3xl pointer-events-none">
						{cards.map((_, i) => {
							const positions = [
								{ top: "20px", left: "0%" },
								{ top: "100px", left: "15%" },
								{ top: "180px", left: "30%" },
								{ top: "260px", right: "15%" },
								{ top: "340px", right: "30%" },
							];

							return (
								<div
									key={i}
									className="absolute bg-white text-black rounded-lg px-4 py-3 flex items-center gap-3 w-[70%] shadow-md"
									style={positions[i]}
								>
									<div className="w-10 h-10 bg-blue-900 text-white rounded-md flex items-center justify-center">
										<Boxes size={18} />
									</div>

									<div>
										<p className="font-semibold text-sm">ニュースの見出し</p>
										<p className="text-xs text-gray-500">ニュース小見出し</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
