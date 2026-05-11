import React from "react";
import Hero from "./Hero";
import PogliSection from "./PogliSection";
import Profile from "./Profile";
import BusinessSection from "./BusinessSection";

const page = () => {
	return (
		<>
			<Hero />
			<Profile />
			<BusinessSection />
			<PogliSection />
		</>
	);
};

export default page;
