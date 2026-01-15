import React from "react";

export default function Staff(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-pcs-dark mb-6">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="w-40 h-44 mx-auto overflow-hidden mb-4 border">
            <img src="/staff/ben-irungu.png" alt="Benson" className="w-full h-full object-cover"/>
          </div>
          <h4 className="font-semibold">Benson K. Irungu</h4>
          <p className="text-sm text-gray-600 mt-2">Executive Coach (AoEC)</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="w-40 h-44 mx-auto overflow-hidden mb-4 border">
            <img src="/staff/rashid-otieno.png" alt="Rashid" className="w-full h-full object-cover"/>
          </div>
          <h4 className="font-semibold">Rashid Otieno</h4>
          <p className="text-sm text-gray-600 mt-2">Administrator</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center text-gray-400">More staff coming soon</div>
      </div>
    </section>
  );
}
