const PogliMissionSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#3344a8] text-white py-20 px-6 md:px-12 ">

      {/* Background Shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5"></div>

      <div className="absolute top-20 right-[-200px] w-[700px] h-[700px] rounded-full bg-white/5"></div>

      <div className="absolute bottom-[-300px] right-20 w-[600px] h-[600px] rounded-full bg-white/5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-10">

        {/* Heading */}
        <h2 className="text-xl md:text-4xl font-bold mb-15 drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
          POGLIのミッション
        </h2>

        {/* Description */}
        <div className="space-y-10 text-xl md:text-2xl leading-[2.2] font-light text-white/95">

          <p>
            POGLIは、日本の製造業が世界に誇る卓越した技術・精神性と、
            インドが持つダイナミックな革新性およびデジタル・パワーを融合させることで、
            次世代のグローバル・ビジネスエコシステムを構築することを使命としています。
          
            私たちは、単なる進出支援の枠を超え、
            両国の強みが相乗効果を発揮できる持続可能なプラットフォームを提供します。
            日本の伝統的な『ものづくり』の緻密さと、
            インドの俊敏な『イノベーション』を繋ぐ架け橋となり、
            クライアントやパートナーと共に、
            国境を越えた新たな産業のスタンダードを共創してまいります。
          </p>

        </div>
      </div>

      {/* Bottom Curve */}
      

    </section>
  );
};

export default PogliMissionSection;