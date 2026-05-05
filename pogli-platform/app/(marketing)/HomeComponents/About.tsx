"use client";
import React from "react";

export default function About() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-white">
      
      {/* BACKGROUND IMAGE (document texture) */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/paper-texture.jpg" // replace with your image
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY (soft white fade) */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-12">
          New Business Producer
        </h2>

        {/* Description */}
        <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-6">
          
          <p className="mb-0">
            We are new business producers who create and nurture new businesses <br /> by leveraging existing ecosystems—such as manufacturing, design and development, <br /> and sales companies—primarily in Japan and India.
          </p>

          <p className="mb-0">
            With unique ideas, specialized know-how, extensive experience, and a broad network <br /> that cannot be found elsewhere, we support our clients from the initial ideation stage <br /> all the way to delivering a fully realized new business.
          </p>

          <p>
            Furthermore, by integrating technology and business, we provide a business-matching platform <br /> that utilizes cutting-edge technologies to help clients identify the most suitable local partners.
          </p>

        </div>
      </div>
    </section>
  );
}