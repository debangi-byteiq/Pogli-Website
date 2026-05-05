import React from "react";

const NewsSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-7 px-6 md:px-20 pb-25">
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <h2 className="text-center text-[#2E3E9E] text-5xl md:text-7xl font-bold mb-7">
          News
        </h2>

        {/* News Block */}
        <div className="mb-20">
          <h3 className="text-[#2E3E9E] text-4xl md:text-5xl font-bold mb-7">
            News
          </h3>

          <div className="space-y-10 ml-25">

            {/* News Item 1 */}
            <div className="flex items-center gap-10">
              <div className="w-28 h-28 bg-gray-300"></div>

              <div>
                <h4 className="text-[#2E3E9E] text-3xl md:text-4xl font-bold">
                  Here is the News’ title
                </h4>
                <p className="text-black text-lg mt-2">
                  The first short texts shown on this part.
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex items-center gap-10">
              <div className="w-28 h-28 bg-gray-300"></div>

              <div>
                <h4 className="text-[#2E3E9E] text-3xl md:text-4xl font-bold">
                  Here is the News’ title
                </h4>
                <p className="text-black text-lg mt-2">
                  The first short texts shown on this part.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Blog Block */}
        <div>
          <h3 className="text-[#2E3E9E] text-4xl md:text-5xl font-bold mb-7">
            Blog
          </h3>

          <div className="flex items-center gap-10 ml-25">
            <div className="w-28 h-28 bg-gray-300"></div>

            <div>
              <h4 className="text-[#2E3E9E] text-3xl md:text-4xl font-bold">
                Here is Karun san’s latest blog title
              </h4>
              <p className="text-black text-lg mt-2">
                The first short texts shown on this parts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;