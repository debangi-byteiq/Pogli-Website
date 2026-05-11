const LeftSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-15 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-10">

        {/* LEFT IMAGE */}
        <div className="relative">

          {/* Shadow */}
          <div className="absolute -bottom-10 left-10 w-[150%] h-40 bg-black/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden relative z-10">
            <img
              src="/left-img-3.jpg"
              alt="mission"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-lg md:text-3xl font-bold text-[#2f43a0] mb-5">
            ミッション1
          </h2>

          {/* Quote Block */}
          <div className="flex items-start gap-6 mb-5">

            {/* Vertical Line */}
            <div className="w-[5px] h-16 bg-cyan-600 rounded-full mt-1"></div>

            {/* Quote */}
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed font-light mt-5 font-semibold">
              “日本の製造業の力と価値をインドで活用する”
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-lg leading-[2] font-light font-semibold">
            何世紀にもわたる洗練された日本の産業専門知識と妥協のない品質基準を、
            急成長するインドの製造業の状況にもたらし、
            協力によって成長を促進します。
          </p>

        </div>
      </div>
    </section>
  );
};

export default LeftSection;