import React from "react";

const BusinessSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h3 className="text-[#2E3E9E] text-2xl md:text-4xl font-semibold mb-4">
            Creating the Future of Japan–India Business
          </h3>

          <h2 className="text-[#2E3E9E] text-5xl md:text-7xl font-bold">
            Your Co-Creation Partners
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 p-5">

          {/* Left Paragraph */}
          <div>
            <p className="text-black text-lg md:text-lg  font-bold">
              Since our founding in 2017, we have been building and nurturing
              new business models by bridging Japan’s spirit of excellence with
              India’s dynamic ecosystem.
              
              Rather than offering advice or reports, we work side-by-side with
              our clients to design, build, and scale real businesses.
            
              With unique insights and a powerful partner network, we empower
              companies in both Japan and India to drive innovation and expand
              onto the global stage—not as advisors, but as true
              business-building partners.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full h-[400px] bg-gray-300"></div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#2E3E9E] text-white px-16 py-4 text-2xl font-semibold hover:bg-[#24338a] transition duration-300">
            More
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;