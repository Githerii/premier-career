import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const selectedFromUrl = params.get("assessment") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    assessment: selectedFromUrl,
    message: ""
  });

  const [status, setStatus] = useState(null);

  const updateField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-pcs-dark mb-6">Get in Touch</h1>

      <p className="text-gray-700 mb-8">
        Fill out the form below and we’ll get back to you shortly.
      </p>

      <form
        action="https://formspree.io/f/xkogldvd"
        method="POST"
        onSubmit={() => setStatus("loading")}
        className="space-y-6 bg-white p-8 rounded-xl shadow"
      >

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg px-4 py-2"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg px-4 py-2"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Referred by</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg px-4 py-2"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="w-full border rounded-lg px-4 py-2"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>

        {/* Assessment */}
        <div>
          <label className="block font-medium mb-1">Assessment Type</label>
          <select
            name="assessment"
            className="w-full border rounded-lg px-4 py-2"
            value={form.assessment}
            onChange={(e) => updateField("assessment", e.target.value)}
          >
            <option value="">Select an assessment</option>
            <option value="MAPP">MAPP Career Assessment</option>
            <option value="Color-Persona">Color Persona Assessment</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            className="w-full border rounded-lg px-4 py-2 h-28"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
          />
        </div>

        {/* Honeypot spam field */}
        <input type="text" name="_gotcha" className="hidden" />

        {/* Redirect after success */}
        <input
          type="hidden"
          name="_redirect"
          value="https://premiercareerservices.com/thank-you"
        />

        {status === "success" && (
          <p className="text-green-600 font-medium">
            Your message has been sent!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 font-medium">
            Something went wrong. Try again.
          </p>
        )}

        <button
          type="submit"
          className="bg-pcs-sky text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
