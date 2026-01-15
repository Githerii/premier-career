import React from "react";

export default function About(){
  return (
    <div>
      <section className="relative h-[30vh] flex items-center">
        <img
          src="/hero/region-map.png"
          alt="Nairobi"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            About Premier Career Services
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white shadow-xl rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-pcs-dark mb-4">
            Who we are
          </h2>

          <p className="text-gray-700 mb-4">
            Premier Career Services is a consulting firm that deals with career
            assessments. We have exclusive license to provide MAPP assessments
            in East & Central Africa and the Islands.
          </p>

          <p className="text-gray-700 mb-6">
            We offer career assessments for individuals or groups (academic
            institutions, corporates, NGOs, etc.)
          </p>

          {/* NEW CONTENT FROM CLIENT */}
          <div className="bg-gray-50 border-l-4 border-pcs-sky p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              The transition from high school to college is a key turning point
              where choices begin to shape a student’s future, yet many make
              these decisions with limited self-awareness.
            </p>

            <p className="text-gray-700 mb-4">
              Premier Career Services aims to fill this gap by offering a career
              assessment that helps students uncover their strengths, interests,
              personality traits, and natural abilities, giving them clarity and
              confidence about possible career paths.
            </p>

            <p className="text-gray-700">
              Instead of guessing or following pressure from peers and parents,
              students gain data-driven insight to make informed subject, course,
              and career decisions—saving time, reducing frustration, and
              setting a strong foundation for a purposeful and successful
              future.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg flex-1">
              <h4 className="font-semibold mb-2">VISION</h4>
              <p>Discover your career</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex-1">
              <h4 className="font-semibold mb-2">MISSION</h4>
              <p>Find your passion</p>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-pcs-sky text-white px-5 py-2 rounded-lg">
              Reserve your assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
