const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/mission-vision-hero.jpg"
        alt="vision"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#243b8f]/90 via-[#2d4b9a]/75 to-[#1c5d7a]/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-25">
        <div className="max-w-3xl text-white">

          {/* Small Tag */}
          <div className="inline-block bg-cyan-400 text-[#2f43a0] text-sm md:text-base font-medium px-6 py-2 rounded-full mb-8 shadow-md">
            POGLIの戦略
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-7xl font-bold leading-tight mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
            ビジョンとミッション
          </h1>

          {/* Description */}
          <div className="space-y-8 text-xl md:text-2xl leading-[1.8] text-white/110 font-light text-semibold">

            <p>
              日本の製造業が誇る卓越した実力と、
              インドのダイナミックな革新性を融合させ
            </p>

            <p>
              持続可能なグローバル・
              ビジネスエコシステムを構築する。
            </p>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;