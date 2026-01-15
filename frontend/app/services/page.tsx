import Image from "next/image";
import { fetchServices } from "@/lib/api";

export default async function ServicesPage() {
  const services = await fetchServices();

  // Free Unsplash images (no download needed)
  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1558655146-d09347e92766",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            We provide end-to-end digital solutions that help businesses
            innovate, scale, and succeed in the modern world.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service: any, index: number) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-52 w-full">
                <Image
                  src={images[index % images.length]}
                  alt={service.attributes?.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">
                  {service.attributes?.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.attributes?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Cynaris?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            We combine technology, creativity, and strategy to deliver
            high-impact digital solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Expert Engineers",
              "Modern Tech Stack",
              "Secure & Scalable",
              "On-Time Delivery",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 opacity-90">
            Let’s discuss how Cynaris Solutions can help transform your ideas
            into reality.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
