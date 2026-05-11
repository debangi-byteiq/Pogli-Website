const RightSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-2 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-10">

        {/* Left CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-lg md:text-3xl font-bold text-[#2f43a0] mb-5">
            ミッション2
          </h2>

          {/* Quote Block */}
          <div className="flex items-start gap-6 mb-5">

            {/* Vertical Line */}
            <div className="w-[5px] h-16 bg-cyan-600 rounded-full mt-1"></div>

            {/* Quote */}
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed font-light mt-5 font-semibold">
              “インドのビジネスの独創性と、費用対効果に優れた革新性を、日本の産業のために活用する”
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-lg leading-[2] font-light font-semibold">
            インドが誇る急速なイノベーションと、費用対効果の高い事業拡大戦略は、技術のグローバルな事業化を目指す日本企業に対し、確固たる競争優位性をもたらします。
          </p>

        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Shadow */}
          <div className="absolute -bottom-10 left-10 w-[85%] h-16 bg-black/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden relative z-10">
            <img
              src="/right-img.jpg"
              alt="mission"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;