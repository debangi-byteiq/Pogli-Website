import { Building2, Leaf, Zap } from "lucide-react";

const initiatives = [
  {
    icon: Building2,
    title: "製造の基盤づくり",
    description:
      "日本における当社の豊富かつ奥深い経験を活かし、製造業のスタートアップや中小企業のインドでの成長を支援いたします。",
  },
  {
    icon: Leaf,
    title: "インドの製造基盤を強化する",
    description:
      "日本の中小企業に向け、包括的かつ持続可能なビジネスエコシステムの構築を支援します。また、日本の製造技術を導入し、『Make in India』への貢献を目指します。",
  },
  {
    icon: Zap,
    title: "最先端のインド技術を紹介する",
    description:
      "インドの技術革新を国内外で迅速に事業化することで、日本企業がそれぞれの領域において優位性を確立できるよう支援する。",
  },
];

const StrategicInitiatives = () => {
  return (
    <section className="bg-[#f5f5f5] py-15 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-2xl font-bold text-[#2f43a0] inline-block relative drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
            主要戦略イニシアチブ

            {/* Underline */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[280px] h-[4px] bg-cyan-600 shadow-md"></span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {initiatives.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gradient-to-b from-[#e9e9f4] via-[#aeb3db] to-[#3747a8]
                rounded-md border border-[#9b8fe8] shadow-md
                min-h-[430px] px-10 py-5 flex flex-col"
              >

                {/* Icon */}
                <div className="w-15 h-15 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-8">
                  <Icon className="text-[#2f43a0]" size={30} />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white leading-snug mb-14">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-white/90 leading-[2] text-lg">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StrategicInitiatives;