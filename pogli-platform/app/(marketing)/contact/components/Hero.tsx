import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-170 grid md:grid-cols-2">
      
      {/* Left Side */}
      <div className="bg-gradient-to-r from-[#3D4FB4] to-[#8EA0C7] flex items-center px-10 md:px-20 pb-50">
        <h2 className="text-white text-6xl md:text-7xl font-bold mt-0">
          Contact Us
        </h2>
      </div>

      {/* Right Side */}
      <div>
        <img
          src="/contact-page-banner.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Hero;