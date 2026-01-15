import React from "react";

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-pcs-dark text-center mb-12">
        What Our Clients Say
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700 italic mb-4">
            “The MAPP assessment gave my daughter clarity and confidence when
            choosing her university course. It removed so much stress.”
          </p>
          <p className="font-semibold text-pcs-dark">— Parent, Nairobi</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700 italic mb-4">
            “This assessment helped me understand myself better than years of
            guessing. Highly recommended for students.”
          </p>
          <p className="font-semibold text-pcs-dark">— University Student</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700 italic mb-4">
            “Our school used the group package and the insights were incredibly
            valuable for career guidance.”
          </p>
          <p className="font-semibold text-pcs-dark">— School Administrator</p>
        </div>

      </div>
    </div>
  );
}
