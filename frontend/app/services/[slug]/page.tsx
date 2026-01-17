import React from 'react';
import { ArrowLeft, CheckCircle, Zap, Shield, BarChart, Settings } from 'lucide-react';
import Link from 'next/link';

// Redefine data to prevent ReferenceError
const services = [
  { title: "Web Development", slug: "web-development" },
  { title: "Cloud Solutions", slug: "cloud-solutions" },
  { title: "Cybersecurity", slug: "cybersecurity" },
  { title: "Mobile App Development", slug: "mobile-apps" }
];

export default async function ServiceSlugPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Await params (Next.js 15+ Fix)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. Find the service
  const service = services.find((s) => s.slug === slug);

  // Fallback if not found
  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link href="/services" className="text-blue-600 underline mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b py-6 bg-gray-50">
        <div className="container mx-auto px-6">
          <Link href="/services" className="flex items-center gap-2 text-blue-600 font-bold w-fit hover:underline">
            <ArrowLeft size={18} /> Back to Services
          </Link>
        </div>
      </nav>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-4 mb-8">{service.title}</h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We provide world-class {service.title} solutions designed to scale your business. 
              By combining technical mastery with strategic thinking, we ensure your digital assets 
              are not just functional, but competitive.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-blue-50 rounded-3xl">
                <Zap className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                <p className="text-gray-600">Optimized processes that reduce time-to-market for your products.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl">
                <Shield className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-gray-600">Built-in security measures to keep your data and users safe.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[40px] shadow-sm">
              <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Custom Strategy Development",
                  "24/7 Monitoring & Support",
                  "Cloud Infrastructure Integration",
                  "Legacy System Modernization",
                  "Scalable Architecture",
                  "Performance Optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-12 bg-blue-900 rounded-[40px] text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                Schedule a consultation with our experts to discuss your {service.title} needs.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}