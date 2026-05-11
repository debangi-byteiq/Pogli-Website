"use client";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function About() {
	return (
		<section className="bg-white py-20 px-6 md:px-16">
			<div className="max-w-4xl mx-auto mb-20 text-center px-23">
				{/* Heading */}
				<h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
					新規事業プロデューサー
				</h2>

				{/* Description */}
				<p className="text-black text-3sm md:text-base leading-relaxed">
					私たちは、主に日本およびインドにおいて、製造・設計開発・販売企業といった既存のエコシステムを活用し、
					新たな事業を創出し育成する「新事業プロデューサー」です。
				</p>
			</div>
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Left Image Box */}
				<div className="bg-[#e0ecfc] rounded-2xl p-6 md:p-10">
					<img
						src="/handshake-img-2.jpg" // put your image in public folder
						alt="partnership"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>

				{/* Right Content */}
				<div className="px-3">
					{/* Heading */}
					<h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-black">
						日印ビジネスの未来を創る：
						<br />
						<span className="text-blue-900">あなたの共創パートナー</span>
					</h2>

					{/* Paragraphs */}
					<p className="text-black text-3sm leading-relaxed mb-6">
						2017年の創業以来、私たちは日本の「卓越の精神」とインドの「ダイナミックなエコシステム」を融合させることで、
						新たなビジネスモデルを構築し、育成してまいりました。単に助言やレポートを提供するにとどまらず、
						クライアントの皆様と緊密に連携し、実体のあるビジネスの設計、構築、そして事業拡大を共に実現いたします。
					</p>

					<p className="text-black text-sm leading-relaxed mb-8">
						独自の知見と強力なパートナーネットワークを駆使し、私たちは日本およびインドの企業がイノベーションを推進し、
						世界舞台へと飛躍できるよう支援します。単なるアドバイザーとしてではなく、
						真の「事業構築のパートナー」として。
					</p>

					{/* Button */}
					<button className="flex items-center gap-2 bg-[#2c3f8f] hover:bg-[#24357a] text-white px-6 py-3 rounded-full font-medium transition">
						私たちについて詳しく知る
						<ArrowRight size={18} />
					</button>
				</div>
			</div>
		</section>
	);
}
