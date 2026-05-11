"use client";

import React from "react";
import {
	Lightbulb,
	Code2,
	Tag,
	Users,
	Scale,
	Building2,
	BadgeCheck,
	Microscope,
	Megaphone,
	Factory,
} from "lucide-react";

const ecosystemItems = [
	{
		icon: Lightbulb,
		title: "プロトタイピング",
		subtitle: "Prototyping",
	},
	{
		icon: Code2,
		title: "IT・エンジニアリング",
		subtitle: "IT Engineering",
	},
	{
		icon: Tag,
		title: "販路開拓",
		subtitle: "Sales Channels",
	},
	{
		icon: Users,
		title: "人材・財務",
		subtitle: "HR & Finance",
	},
	{
		icon: Scale,
		title: "法務・知財",
		subtitle: "Law & IP",
	},
	{
		icon: Building2,
		title: "政府渉外",
		subtitle: "Gov Liaison",
	},
	{
		icon: BadgeCheck,
		title: "許認可",
		subtitle: "Authority",
	},
	{
		icon: Microscope,
		title: "研究開発設備",
		subtitle: "R&D Equipment",
	},
	{
		icon: Megaphone,
		title: "マーケティング",
		subtitle: "Marketing",
	},
	{
		icon: Factory,
		title: "量産・EMS",
		subtitle: "EMS",
	},
];

const EcosystemSection = () => {

	// PERFECT CIRCLE POSITIONING
	const radius = 330;
	const center = 400;

	return (
		<section className="bg-[#f5f7fa] py-10 px-8 overflow-hidden">

			{/* Heading */}
			<div className="text-center mb-14">
				<h2 className="text-3xl md:text-4xl font-bold text-[#04152f]">
					私たちのエコシステム
				</h2>

				<div className="w-20 h-1 bg-cyan-300 rounded-full mx-auto mt-4" />
			</div>

			{/* Circle Layout */}
			<div className="relative w-[800px] h-[800px] mx-auto">

				{/* Outer Ring */}
				<div className="absolute inset-0 rounded-full " />

				{/* Center Logo */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
					<div className="w-48 h-48 rounded-full bg-white shadow-xl border-[6px] border-white flex items-center justify-center">
						
						<div className="w-full h-full rounded-full bg-[#1b1b92] flex items-center justify-center">
							<img
								src="/nav-logo.png"
								alt="logo"
								className="w-32 object-contain"
							/>
						</div>
					</div>
				</div>

				{/* ITEMS */}
				{ecosystemItems.map((item, index) => {

					const angle =
						(index / ecosystemItems.length) * (Math.PI * 2) -
						Math.PI / 2;

					const x = center + radius * Math.cos(angle);
					const y = center + radius * Math.sin(angle);

					const Icon = item.icon;

					return (
						<React.Fragment key={index}>

							{/* Connection Line */}
							<div
								className="absolute bg-cyan-100 origin-left"
								style={{
									width: `${radius - 90}px`,
									height: "2px",
									left: `${center}px`,
									top: `${center}px`,
									transform: `rotate(${angle}rad)`,
								}}
							/>

							{/* Item */}
							<div
								className="absolute z-10"
								style={{
									left: `${x}px`,
									top: `${y}px`,
									transform: "translate(-50%, -50%)",
								}}
							>
								<div className="flex flex-col items-center text-center w-[150px]">
									
									{/* Circle */}
									<div className="w-24 h-24 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mb-4">
										<Icon
											size={30}
											strokeWidth={1.8}
											className="text-[#0064a7]"
										/>
									</div>

									{/* Text */}
									<h3 className="text-lg font-bold text-[#04152f] leading-snug">
										{item.title}
									</h3>

									<p className="text-gray-600 text-sm font-medium mt-1">
										{item.subtitle}
									</p>
								</div>
							</div>
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
};

export default EcosystemSection;