import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Assessments() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-pcs-dark text-center mb-12">
        Our Assessments
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* MAPP Assessment */}
        <div
          className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer"
          onClick={() => setOpenModal("mapp")}
        >
          <h2 className="text-2xl font-semibold text-pcs-dark mb-3">
            MAPP® Career Assessment
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Motivational Appraisal of Personal Potential (MAPP®) helps
            individuals discover their natural motivations and aligns them with
            real career families.
          </p>

          <Link
            to="/contact?assessment=MAPP"
            className="inline-block bg-pcs-sky text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
            onClick={(e) => e.stopPropagation()}
          >
            Reserve Now
          </Link>
        </div>

        {/* Color Persona */}
        <div
          className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer"
          onClick={() => setOpenModal("color")}
        >
          <h2 className="text-2xl font-semibold text-pcs-dark mb-3">
            Color Persona Assessment
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A fun, color-based personality model that helps teams understand
            behavior styles and improve communication.
          </p>

          <Link
            to="/contact?assessment=Color-Persona"
            className="inline-block bg-pcs-sky text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
            onClick={(e) => e.stopPropagation()}
          >
            Reserve Now
          </Link>
        </div>

      </div>

      {/* ================= MODALS ================= */}

      {openModal === "mapp" && (
        <Modal onClose={() => setOpenModal(null)}>

          <h2 className="text-2xl font-bold text-pcs-dark mb-4">
            MAPP® Career Assessment
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The MAPP® assessment identifies your natural motivations,
            personality traits, and preferred work environments — giving you
            scientific career direction and clarity.
          </p>

          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>Ideal for students, professionals & career changers</li>
            <li>Globally used and research-backed</li>
            <li>Matches you to real-world career families</li>
          </ul>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="font-semibold text-pcs-dark mb-1">Individual Price</p>
            <p className="text-gray-700">KES 12,500</p>
          </div>

          {/* PDF Links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="/brochures/MAPP_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-pcs-sky text-pcs-sky px-5 py-2 rounded-lg text-center hover:bg-pcs-sky hover:text-white transition"
            >
              Download MAPP Brochure (PDF)
            </a>

            <a
              href="/brochures/PCS_Price_list.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 text-gray-700 px-5 py-2 rounded-lg text-center hover:bg-gray-100 transition"
            >
              View Group Packages (PDF)
            </a>
          </div>

          {/* CTA */}
          <Link
            to="/contact?assessment=MAPP"
            className="inline-block bg-pcs-sky text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Reserve MAPP Assessment
          </Link>

        </Modal>
      )}

      {openModal === "color" && (
        <Modal onClose={() => setOpenModal(null)}>

          <h2 className="text-2xl font-bold text-pcs-dark mb-4">
            Color Persona Assessment
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            This color-based model helps individuals understand communication
            styles, emotional intelligence, and team dynamics.
          </p>

          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>Great for corporate teams</li>
            <li>Leadership & self-awareness development</li>
            <li>Improves collaboration and empathy</li>
          </ul>

          <Link
            to="/contact?assessment=Color-Persona"
            className="bg-pcs-sky text-white px-5 py-2 rounded-lg shadow"
          >
            Reserve Color Persona Assessment
          </Link>

        </Modal>
      )}

    </div>
  );
}

/* ================= REUSABLE MODAL ================= */

function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-8 max-w-lg mx-6 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          onClick={onClose}
          className="mt-6 text-gray-600 hover:text-gray-900"
        >
          Close
        </button>
      </div>
    </div>
  );
}
