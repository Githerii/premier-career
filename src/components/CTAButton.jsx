import React from "react";
import { Link } from "react-router-dom";

export default function CTAButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-block bg-pcs-sky text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}
