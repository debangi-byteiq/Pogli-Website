"use client";

import React from "react";

interface HeroSectionProps {
	title: string;
}

const BlogHero = ({ title }: HeroSectionProps) => {
	return (
		// <section className="relative h-[420px] overflow-hidden">

		// 	{/* BACKGROUND IMAGE */}
		// 	<img
		// 		src="/blog-hero.jpg"
		// 		alt="Blog Hero"
		// 		className="absolute inset-0 w-full h-full object-cover"
		// 	/>

		// 	{/* DARK OVERLAY */}
		// 	<div className="absolute inset-0 bg-black/55"></div>

		// 	{/* BIG BACK TEXT */}
		// 	<h1 className="absolute inset-0 flex items-center justify-center text-[180px] md:text-[240px] font-bold text-white/10 select-none">
		// 		704
		// 	</h1>

		// 	{/* MAIN TITLE */}
		// 	<div className="relative z-10 flex items-center justify-center h-full">
		// 		<h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl">
		// 			ブログ/ニュース
		// 		</h2>
		// 	</div>
		// </section>
		<section className="relative h-[420px] overflow-hidden">
			{/* BACKGROUND IMAGE */}
			<img
				src="/blog-hero.jpg"
				alt="Blog Hero"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* DARK OVERLAY */}
			<div className="absolute inset-0 bg-black/70 z-[1]" />

			{/* MAIN TITLE */}
			<div className="relative z-[3] flex items-center justify-center h-full">
				<h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl">
					{title}
				</h2>
			</div>
		</section>
		
	);
};

export default BlogHero;
