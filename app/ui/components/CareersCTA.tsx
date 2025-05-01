"use client";

import Link from "next/link";

const CareersCTA = () => {
  return (
    <section
      id="careers-cta"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-electric/10 via-white to-electric/10"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
          Join Our Team
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          We&apos;re always looking for passionate individuals who share our vision
          of making AI accessible and impactful for businesses of all sizes.
        </p>
        <Link
          href="/careers" // (Change link if your open positions page is different!)
          className="inline-block bg-electric text-white px-8 py-4 rounded-xl hover:opacity-90 transition font-semibold text-lg"
        >
          View Open Positions
        </Link>
      </div>
    </section>
  );
};

export default CareersCTA;
