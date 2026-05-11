"use client";

import React from "react";
import { Mail, Link as LinkIcon } from "lucide-react";

interface Member {
	name: string;
	role: string;
	image: string;
	biography: string;
	message: string;
}

interface LeftSectionProps {
	members: Member[];
	index: number;
}

const LeftSection = ({ members, index }: LeftSectionProps) => {

	// current selected member
	const member = members[index];

	return (
		<section className="relative bg-white py-25 px-6 md:px-20 overflow-hidden">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
				
				{/* LEFT IMAGE */}
				<div className="rounded-xl overflow-hidden shadow-lg">
					<img
						src={member.image}
						alt={member.name}
						className="w-full h-[600px] object-cover"
					/>
				</div>

				{/* RIGHT CONTENT */}
				<div>

					{/* Heading */}
					<h2 className="text-4xl md:text-5xl font-semibold text-[#2f43a0] mb-3">
						{member.name}
					</h2>

					<p className="uppercase tracking-[3px] text-cyan-700 text-lg mb-10">
						{member.role}
					</p>

					{/* Biography Box */}
					<div className="bg-white border border-gray-200 rounded-2xl px-10 py-10 shadow-sm">
						
						{/* Biography */}
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							BIOGRAPHY
						</h3>

						<p className="text-gray-700 leading-[2] text-lg mb-5 whitespace-pre-line">
							{member.biography}
						</p>

						{/* Message */}
						<h3 className="text-xl font-semibold text-gray-700 mb-3">
							MESSAGE
						</h3>

						<div className="border-l-[5px] border-[#2f43a0] pl-6">
							<p className="text-gray-700 text-lg leading-[2] whitespace-pre-line">
								{member.message}
							</p>
						</div>
					</div>

					{/* Icons */}
					<div className="flex gap-6 mt-8 text-[#2f43a0]">
						<button className="hover:scale-110 transition">
							<LinkIcon size={30} />
						</button>

						<button className="hover:scale-110 transition">
							<Mail size={30} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LeftSection;