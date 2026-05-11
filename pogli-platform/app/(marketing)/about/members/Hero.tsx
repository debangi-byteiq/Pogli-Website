const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/pogli-member-hero.jpg"
        alt="vision"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#243b8f]/90 via-[#2d4b9a]/75 to-[#1c5d7a]/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-30 pb-25">
        <div className="max-w-3xl text-white">

          {/* Small Tag */}
          <div className="inline-block bg-cyan-400 text-[#2f43a0] text-sm md:text-base font-medium px-6 py-2 mb-3 shadow-md">
            OUR EXPERTS
          </div>

          {/* Heading */}
          <h1 className="text-xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
            Team POGLI
          </h1>

          {/* Description */}
          <div className="space-y-8 text-xl md:text-2xl leading-[1.8] text-white/110 font-light text-bold">

            <h2 className="text-lg md:text-4xl font-bold leading-tight mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
            コンサルティングの精鋭たち
            </h2>

            <p>
                グローバルな知見とローカルな実行力を兼ね備えた、
                POGLIの専門家チーム。
                お客様の課題に対して最適な戦略を提供します。
            </p>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;