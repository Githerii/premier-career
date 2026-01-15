import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">

      {/* MAIN BACKGROUND IMAGE */}
      <img
        src="/hero/students.png"
        alt="Students studying"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* RIGHT MAP IMAGE – subtle, classy */}
      <img
        src="/hero/region-map.png"
        alt="East & Central Africa Map"
        className="absolute right-6 bottom-6 w-56 opacity-70 drop-shadow-lg hidden md:block"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <p className="text-white/80 text-sm md:text-lg mb-3 tracking-wide">
          Exclusive MAPP® provider — East & Central Africa
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
          Discover your career, find your passion.
        </h1>

        <div className="flex gap-4">
          <Link
            to="/assessments"
            className="bg-pcs-sky text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:opacity-90 transition"
          >
            Reserve Assessment
          </Link>

          <Link
            to="/about"
            className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
