import React from "react";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS &amp; CONTRIBUTIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlights of my contributions, problem solving and project work.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="mt-1 w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg">Solved 100+ DSA problems on LeetCode</h3>
              <p className="text-gray-400">
                Completed 100+ algorithm &amp; data-structure problems.
                {" "}
                <a
                  href="https://leetcode.com/u/shantannugupta20nov2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline"
                >
                  LeetCode profile
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-1 w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg">Hacktoberfest Contributor (2023 &amp; 2024)</h3>
              <p className="text-gray-400">
                Contributed to multiple open-source projects during Hacktoberfest.
                {" "}
                <a
                  href="https://www.holopin.io/@shantannudev2003#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline"
                >
                  Open source contributions
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-1 w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg">Created &amp; deployed 3+ full-stack personal projects</h3>
              <p className="text-gray-400">
                Built and deployed multiple full-stack applications showcasing end-to-end capabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-1 w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg">Participated in national level hackathon — Ambition</h3>
              <p className="text-gray-400">
                Team-based participation at a national hackathon, focusing on rapid prototyping and problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;