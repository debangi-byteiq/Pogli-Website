import React from "react";

const Contact = () => {
	return (
		<section className="bg-white py-10 px-7">
			<div className="max-w-4xl mx-auto text-center">

				{/* Heading */}
				<h2 className="text-3xl md:text-4xl font-semibold text-[#2f43a0] mb-8">
					最適なパートナーを見つけましょう
				</h2>

				{/* Description */}
				<p className="text-gray-600 text-lg leading-[2] max-w-3xl mx-auto mb-8">
					お客様のビジネスニーズに合わせた、最適なコンサルタントをご紹介いたします。
					<br />
					まずはお気軽にご相談ください。
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6">

					{/* Primary Button */}
					<button className="bg-[#2f43a0] hover:bg-[#243582] text-white px-10 py-4 rounded-md text-xl shadow-md transition duration-300">
						今すぐ相談する
					</button>

					{/* Secondary Button */}
					<button className="border-2 border-[#2f43a0] text-[#2f43a0] hover:bg-[#2f43a0] hover:text-white px-10 py-4 rounded-md text-xl transition duration-300">
						資料 (Materials)
					</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;