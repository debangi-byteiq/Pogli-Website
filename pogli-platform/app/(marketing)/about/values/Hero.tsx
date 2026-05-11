import React from "react";

const Hero = () => {
	return (
		<section className="relative w-full h-[700px] overflow-hidden">

			{/* Background Image */}
			<img
				src="/values-hero.jpg"
				alt="core-value"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-[#0b2b4a]/65" />

			{/* Large Circle Shape */}
			<div className="absolute left-[-120px] bottom-[-180px] w-[750px] h-[750px] bg-[#0b3554]/40 rounded-full blur-sm" />

			{/* Content */}
			<div className="relative z-10 max-w-9xl mx-3 h-full flex items-center px-6 md:px-16 ">

				<div className="grid md:grid-cols-2 gap-20 items-center w-full">

					{/* LEFT CONTENT */}
					<div className="mb-25">

						<h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-10">
							コア・バリュー：POGLIの柱
						</h1>

						<p className="text-white/85 text-lg md:text-xl leading-[2] max-w-2xl">
							誠実さを指針に、データを原動力に、
							そして皆様のグローバルな成功に尽力いたします。
						</p>
					</div>

					{/* RIGHT BOX */}
					<div className="flex justify-center md:justify-end mt-20">

						<div className="w-[320px] h-[320px] bg-white/20 backdrop-blur-sm rounded-[8px] border border-white/10 shadow-2xl" />

					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;