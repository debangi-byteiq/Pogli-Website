const BusinessSection = () => {
  return (
    <section className="bg-[#f5f5f5] px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-[#2f43a0] mb-14">
          当社の事業について
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl leading-[2.2] tracking-wide">
          当社は、日本国内で培った豊かで深い経験を基盤に、
          日本企業がインドという成長著しい市場で製造拠点を確立するための包括的な下地づくりを支援しています。
          特に、日本の製造業におけるスタートアップや中小企業がインド国内で持続的に成長できるよう、
          現地のビジネスエコシステムの構築に尽力し、
          『Make in India』の精神に基づいた高度なものづくり技術や手法を積極的に導入しています。
          また、単なる進出支援に留まらず、
          インドの最先端技術を日本企業へ紹介する双方向の技術交流を促進することで、
          両国の強みを融合させた革新的な価値創造と、
          強固なパートナーシップの実現を目指しています。
        </p>

      </div>
    </section>
  );
};

export default BusinessSection;