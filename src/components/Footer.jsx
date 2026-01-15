import React from "react";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-2">Premier Career Services</h4>
          <p className="text-sm">Helping individuals and organisations discover their calling through certified MAPP assessments.</p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Quick Links</h5>
          <ul className="text-sm space-y-2">
            <li><a className="hover:underline" href="/">Home</a></li>
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/assessments">Assessments</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Contact</h5>
          <p className="text-sm">Email: admin@premiercareerservices.com</p>
          <p className="text-sm">Phone: +254 785 555 522</p>
          <p className="text-sm mt-2">Nairobi, Kenya</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} Premier Career Services. All rights reserved.
      </div>
    </footer>
  );
}
