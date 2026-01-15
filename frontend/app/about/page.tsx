"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Satisfied Customers" },
    { value: "400+", label: "Interns Trained" },
    { value: "200+", label: "Projects Completed" },
    { value: "200+", label: "Skilled Professionals" },
  ];

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          About Us
        </motion.h1>

        <div className="h-1 w-20 bg-blue-600 mb-6" />

        <p className="text-gray-600 max-w-4xl leading-relaxed">
         At Cynaris Solutions, we are more than just a software development company-we are your strategic partners in innovation. Our deep commitment to excellence and passion for technology drive us to deliver tailored solutions that empower businesses to thrive in the digital age.
Founded in 2018, Cynaris Solutions has rapidly established itself as a leader in the software development industry. With executives bringing over two decades of experience, we leverage a wealth of knowledge and expertise to ensure that every project we undertake is a success. Our focus is not just on developing software but on crafting innovative solutions that align with your business goals and drive long-term growth.
We are proud to hold ISO 9001:2015, ISO 27001, and ISO 22301 certifications, which underscore our commitment to maintaining the highest standards of quality, security, and business continuity. These certifications reflect our dedication to delivering exceptional results while safeguarding your business and ensuring operational resilience.

    
        </p>
        <p className="text-gray-700 font-medium max-w-5xl">
          At Cynaris Solutions, we don’t just build software — we build the
          future of your business.
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To Co-Create, Co-Craft, Co-Execute, and Co-Deliver world-class
              software solutions that drive innovation, efficiency, and growth
              through collaboration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize industries through innovative software solutions
              that enhance agility, assurance, and resiliency in business
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold text-blue-600">
                {item.value}
              </p>
              <p className="text-gray-600 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* Video */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AnQQa8td6tg"
              title="Cynaris Solutions Company Intro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="h-1 w-16 bg-blue-600 mb-6" />

            <p className="text-gray-600 mb-8 leading-relaxed">
              Cynaris Solutions is your trusted partner in innovation. Our 4C
              Principle — Co-Create, Co-Craft, Co-Execute, and Co-Deliver —
              guides everything we do.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Tailored Solutions",
                "Client-Centric Approach",
                "Dedicated Support & Continuous Improvement",
                "Expertise in Cutting-Edge Technology",
                "Results-Driven Methodologies",
                "Industry-Leading Certification",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-700 shadow-sm transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:shadow-lg"
                >
                  <span className="text-lg font-semibold transition group-hover:translate-x-1">
                    »
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW WE MAKE WORK SUCCESSFUL ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Make Work Successful
          </h2>

          <p className="max-w-3xl text-gray-600 leading-relaxed mb-16">
            Our 4C Principle — Co-Create, Co-Craft, Co-Execute, and Co-Deliver —
            is deeply embedded in everything we do.
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {[
              ["1", "Co-Create", "We collaborate closely to understand your goals and vision."],
              ["2", "Co-Craft", "We design intuitive, high-quality solutions with precision."],
              ["3", "Co-Execute", "We seamlessly integrate solutions into your operations."],
              ["4", "Co-Deliver", "We ensure long-term value, adaptability, and growth."],
            ].map(([num, title, desc]) => (
              <div key={num}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center font-semibold">
                    {num}
                  </span>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS + CTA ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
            We collaborate with esteemed partners across the USA, South Africa,
            the Middle East, and India to deliver exceptional solutions
            worldwide.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white font-medium transition hover:bg-blue-700"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}