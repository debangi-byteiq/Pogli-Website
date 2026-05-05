import React from "react";
import Link
 from "next/link";

const ChallengeSection = () => {
	return (
		<section className="w-full bg-gradient-to-b from-[#3F5BFF] to-[#151F69] py-24 px-6">
			<div className="max-w-6xl mx-auto text-center">
				{/* Heading */}
				<h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-16">
					Why Not Solve Your Challenges
					<br />
					All In One Go With POGLI?
				</h2>

				{/* Buttons */}
				<div className="flex flex-col md:flex-row justify-center gap-6">
					<button className="bg-[#18A8F2] hover:bg-[#1194d8] text-white text-xl font-semibold px-20 py-5 transition duration-300">
						Materials
					</button>

					<Link href="/contact">
						<button className="border border-white hover:bg-white hover:text-[#151F69] text-white text-xl font-semibold px-20 py-5 transition duration-300">
							Contact Us
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ChallengeSection;
