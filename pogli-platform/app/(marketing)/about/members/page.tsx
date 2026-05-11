import Contact from "./Contact";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const page = () => {
	const members = [
		{
			name: "Karun Malhotra",
			role: "Managing Partner & Founder",
			image: "/member-img-1.jpg",

			biography: `20年以上にわたる国際ビジネスコンサルティングの経験を持ち、POGLIの戦略部門を統括。欧州およびアジア圏の市場参入戦略において数多くの成功実績を誇ります。`,

			message: `"「不確実な時代だからこそ、データに基づいた確固たる戦略が必要です。」"`,
		},

		{
			name: "Mayu San",
			role: "PRINCIPAL CONSULTANT, ASIA-PACIFIC",
			image: "/member-img-4.jpg",

			biography: `Kenji brings deep expertise in Japanese market entry and partnership cultivation. His work focuses on bridging Western corporate governance with traditional Asian business philosophies.`,

			message: `"Trust is the currency of every successful strategy, built through consistency and transparency."`,
		},
	];
	return (
		<>
			<Hero />
			<LeftSection members={members} index={0} />
			<RightSection />
			<LeftSection members={members} index={1} />
            <Contact />
		</>
	);
};

export default page;
