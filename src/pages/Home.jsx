import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

export default function Home(){
  return (
    <div>
      <Hero />

      {/* WHAT WE DO */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="grid md:grid-cols-2 gap-12 items-start mb-12">

    {/* LEFT INTRO TEXT */}
    <div>
      <h2 className="text-3xl font-bold text-pcs-dark mb-4">What we do</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Premier Career Services provides certified MAPP® career assessments for 
        individuals, academic institutions, corporates, and NGOs across East & 
        Central Africa. Our mission is to help people discover the career paths 
        they were naturally designed for.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you're a student choosing your field of study, a professional 
        seeking clarity, or an organization supporting career development, we provide 
        science-based assessments that match natural motivations to real career families.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The transition from high school to college is a key turning point where choices 
        begin to shape a student’s future, yet many make these decisions with limited self-awareness.
        Premier Career Services aims to fill this gap by offering a career assessment that 
        helps students uncover their strengths, interests, personality traits, and natural abilities,
         giving them clarity and confidence about possible career paths.

        Instead of guessing or following pressure from peers and parents, students gain data-driven
         insight to make informed subject, course, and career decisions—saving time, reducing frustration,
          and setting a strong foundation for a purposeful and successful future.
      </p>
    </div>

    {/* FEATURE CARDS */}
    <div className="grid gap-6">

      {/* CARD 1 */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex gap-4">
        <img src="/icons/individual.jpg" className="w-14 h-14 object-contain" />
        <div>
          <h4 className="font-semibold mb-1 text-pcs-dark">Individual Assessments</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Personalized MAPP® assessments with interpretation, helping individuals 
            identify careers aligned with their natural strengths.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex gap-4">
        <img src="/icons/group.jpg" className="w-14 h-14 object-contain" />
        <div>
          <h4 className="font-semibold mb-1 text-pcs-dark">Group Assessments</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Packages for schools, NGOs, and corporates — providing bulk assessments 
            with consolidated reports and advisory.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex gap-4">
        <img src="/icons/coaching.jpg" className="w-14 h-14 object-contain" />
        <div>
          <h4 className="font-semibold mb-1 text-pcs-dark">Workshops</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Interpretation workshops, career guidance sessions for long-term growth.
          </p>
        </div>
      </div>

    </div>

  </div>

</section>
<section className="bg-gray-50 py-16 mt-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-pcs-dark text-center mb-10">
      Trusted by Students, Parents & Institutions
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mb-10">

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-700 italic mb-4">
          “The assessment brought clarity at a very critical decision point.”
        </p>
        <p className="font-semibold text-pcs-dark">— Agnes Njeri, Parent</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-700 italic mb-4">
          “I finally understood what careers fit my personality.”
        </p>
        <p className="font-semibold text-pcs-dark">— Grace Wacera, Student</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-700 italic mb-4">
          “Extremely useful for guiding learners with confidence.”
        </p>
        <p className="font-semibold text-pcs-dark">— Rashid Otieno, Educator</p>
      </div>

    </div>

    <div className="text-center">
      <a
        href="/testimonials"
        className="inline-block bg-pcs-sky text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
      >
        Read More Testimonials
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
